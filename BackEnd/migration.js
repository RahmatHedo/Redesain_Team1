const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const createTablesQuery = `
  CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    icon VARCHAR(255) NOT NULL,
    thumbnail VARCHAR(255) NOT NULL,
    release_year INT NOT NULL,
    rating_age VARCHAR(10) NOT NULL CHECK (rating_age IN ('3+', '7+', '13+', '15+', '18+')),
    genres JSONB NOT NULL,
    platforms JSONB NOT NULL,
    publisher VARCHAR(100) NOT NULL,
    developer VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    screenshots JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS content_descriptors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS game_descriptors (
    game_id INT REFERENCES games(id) ON DELETE CASCADE,
    descriptor_id INT REFERENCES content_descriptors(id) ON DELETE CASCADE,
    PRIMARY KEY (game_id, descriptor_id)
  );

  CREATE TABLE IF NOT EXISTS blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    banner_image VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    tags JSONB NOT NULL,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const insertInitialDataQuery = `
  INSERT INTO content_descriptors (id, name, description)
  VALUES 
    (1, 'Violence', 'Menampilkan aksi pertarungan atau kekerasan.'),
    (2, 'Sexuality', 'Mengandung unsur romantis atau konten dewasa.'),
    (3, 'Drugs', 'Menampilkan atau merujuk pada penggunaan narkoba.'),
    (4, 'Gambling', 'Mengandung unsur taruhan atau perjudian.'),
    (5, 'Language', 'Mengandung kata-kata kasar atau tidak pantas.'),
    (6, 'Blood', 'Menampilkan darah atau luka.'),
    (7, 'Horor', 'Mengandung adegan menyeramkan atau menegangkan.'),
    (8, 'Online Interactions', 'Pemain dapat berinteraksi dengan orang lain secara online.'),
    (9, 'Character Appearance', 'Mengandung kostum atau penampilan karakter tertentu.')
  ON CONFLICT (id) DO NOTHING;

  -- Resync sequence just in case
  SELECT setval('content_descriptors_id_seq', (SELECT MAX(id) FROM content_descriptors));

  -- Insert dummy games
  INSERT INTO games (id, title, icon, thumbnail, release_year, rating_age, genres, platforms, publisher, developer, description, screenshots)
  VALUES
    (1, 'Pulau Petualangan Fantasi', 'https://api.igrs.id/uploads/games/pulau-petualangan-icon.jpg', 'https://api.igrs.id/uploads/games/pulau-petualangan.jpg', 2024, '3+', '["Petualangan", "Puzzle"]'::jsonb, '["PC", "Mobile"]'::jsonb, 'EduStudio', 'EduStudio Dev', 'Game petualangan ramah anak.', '[]'::jsonb),
    (2, 'Neon Drift Racing', 'https://api.igrs.id/uploads/games/neon-drift-icon.jpg', 'https://api.igrs.id/uploads/games/neon-drift.jpg', 2023, '7+', '["Balapan", "Multiplayer"]'::jsonb, '["Console", "PC"]'::jsonb, 'SpeedGames', 'SpeedGames Inc', 'Game balap cepat.', '[]'::jsonb),
    (3, 'Legenda Kota Hilang', 'https://api.igrs.id/uploads/games/legenda-kota-icon.jpg', 'https://api.igrs.id/uploads/games/legenda-kota.jpg', 2025, '13+', '["Aksi", "RPG"]'::jsonb, '["PC", "Mobile", "Console"]'::jsonb, 'ActionStudios', 'ActionStudios', 'Game RPG penuh aksi.', '[]'::jsonb),
    (4, 'Mobile Legends: Bang Bang', 'https://api.igrs.id/uploads/games/mlbb-icon.jpg', 'https://api.igrs.id/uploads/games/mlbb-thumbnail.jpg', 2016, '18+', '["Action", "MOBA", "Strategy"]'::jsonb, '["Android", "iOS"]'::jsonb, 'Moonton Games', 'Moonton', 'Mobile Legends: Bang Bang is one of the most popular mobile Multiplayer Online Battle Arena (MOBA) games worldwide that brings communities together through teamwork and strategy.', '["https://api.igrs.id/uploads/games/mlbb-ss1.jpg", "https://api.igrs.id/uploads/games/mlbb-ss2.jpg", "https://api.igrs.id/uploads/games/mlbb-ss3.jpg"]'::jsonb)
  ON CONFLICT (id) DO NOTHING;

  -- Resync sequence just in case
  SELECT setval('games_id_seq', (SELECT MAX(id) FROM games));

  -- Insert dummy game descriptors
  INSERT INTO game_descriptors (game_id, descriptor_id)
  VALUES
    (1, 8),
    (2, 8),
    (3, 1),
    (3, 5),
    (4, 1),
    (4, 8),
    (4, 9)
  ON CONFLICT (game_id, descriptor_id) DO NOTHING;

  -- Insert dummy blogs
  INSERT INTO blogs (id, title, banner_image, category, content, tags, published_at)
  VALUES
    (1, 'Evaluasi dan Penangguhan Sementara Layanan Klasifikasi Gim / IGRS', 'https://qqkucewbprvhvlxpfxny.supabase.co/storage/v1/object/public/game-assets/thumbnails-blog/thm-artikel1.png', 'Pengumuman Penting', 'Jakarta — Indonesia Game Rating System (IGRS) saat ini tengah menjalani proses evaluasi menyeluruh yang mencakup aspek tata kelola, sistem, dan proses bisnis layanan. Langkah ini merupakan upaya IGRS dalam menghadirkan layanan klasifikasi Gim yang andal, akuntabel, dan mudah dimanfaatkan oleh Penerbit Gim maupun masyarakat.

Selama proses evaluasi berlangsung, layanan klasifikasi gim IGRS untuk sementara waktu ditangguhkan sementara. Keputusan ini diambil agar seluruh tahapan perbaikan dapat diselesaikan dengan baik, sehingga sistem dan proses bisnis yang hadir nantinya benar-benar siap dan lebih baik dari sebelumnya.

Perlu diketahui bahwa selama periode penangguhan ini seluruh Penerbit Gim maupun platform distribusi dikecualikan dari pengenaan sanksi administratif akibat tidak melakukan klasifikasi Gim maupun menampilkan klasifikasi IGRS sebagaimana diatur dalam Peraturan Menteri Komunikasi dan Informatika Nomor 2 Tahun 2024 tentang Klasifikasi Gim. Kebijakan ini berlaku hingga Kementerian Komunikasi dan Digital RI menerbitkan pemberitahuan resmi bahwa layanan telah kembali beroperasi penuh.

Kami mengucapkan terima kasih kepada seluruh Penerbit Gim, Platform Distribusi, dan pemangku kepentingan terkait lainnya atas perhatian dan kerja sama yang baik selama proses evaluasi ini berlangsung.

Untuk informasi lebih lanjut, hubungi kami melalui:

Website: www.igrs.id/contact-us
Email: helpdesk@igrs.id', '["Pengumuman Penting"]'::jsonb, '2026-06-18 00:00:00'),
    (2, 'MAKLUMAT PELAYANAN', 'https://qqkucewbprvhvlxpfxny.supabase.co/storage/v1/object/public/game-assets/thumbnails-blog/thm-artikel2.jpg', 'Berita', '1. Direktorat Pengembangan Ekosistem Digital berkomitmen untuk menerapkan dan meningkatkan pelayanan dengan cara melayani dengan proaktif yaitu profesional, akuntabel, integritas, inovatif dalam rangka memberikan hasil yang maksimal dan terbaik kepada pemohon.
2. Direktorat Pengembangan Ekosistem Digital tidak mengenal KKN, karena pelayanan diutamakan kepada melayani dengan hati, tanpa gratifikasi, korupsi, dan pungli.
3. Direktorat Pengembangan Ekosistem Digital berkomitmen untuk menerbitkan Sertifikat Hasil Klasifikasi Gim maksimal 7 x 24 jam secara otomatis melalui sistem pendaftaran.
4. Direktorat Pengembangan Ekosistem Digital selalu terbuka untuk menerima saran serta masukan dari publik melalui kanal aduan pada website IGRS (https://igrs.id) dalam rangka perbaikan dan peningkatan pelayanan dalam layanan Klasifikasi Gim IGRS.
5. Direktorat Pengembangan Ekosistem Digital berkomitmen untuk selalu memberikan kemudahan kepada pemohon dengan tersedianya layanan Helpdesk via WhatsApp di nomor (+62 811-806-860), email (igrs@komdigi.go.id), serta kanal aduan pada website (https://igrs.id) yang aktif dari hari Senin s.d. Jumat pukul 08.00 — 16.00 WIB (kecuali hari libur nasional).
6. Direktorat Pengembangan Ekosistem Digital berkomitmen untuk selalu mengutamakan solusi terhadap permasalahan terkait Klasifikasi Gim.

Plt. Direktur Pengembangan Ekosistem Digital

Sonny Hendra Sudaryana', '[]'::jsonb, '2025-10-24 00:00:00'),
    (3, 'Pemberitahuan Terkait Proses Verifikasi IGRS', 'https://qqkucewbprvhvlxpfxny.supabase.co/storage/v1/object/public/game-assets/thumbnails-blog/thm-artikel3.png', 'Pengumuman Penting', 'Sehubungan dengan meningkatnya jumlah pengajuan klasifikasi Gim, dapat kami sampaikan beberapa hal sebagai berikut:

1. Indonesia Game Rating System (IGRS) saat ini tengah melakukan penyesuaian pengelolaan proses verifikasi guna menjaga akurasi serta menjamin kepastian pemberian layanan.
2. Dalam masa penyesuaian tersebut, proses verifikasi terhadap sebagian Gim dapat memerlukan waktu tambahan.
3. Penerbit Gim yang telah melakukan klasifikasi gim secara mandiri (self-assessment) melalui sistem IGRS, tetap akan diproses sesuai ketentuan peraturan perundang-undangan.
4. IGRS berkomitmen untuk terus mengoptimalkan layanan dan memastikan keberlanjutan proses klasifikasi Gim secara bertanggung jawab.

Demikian pemberitahuan ini kami sampaikan. Atas perhatian dan kerja sama yang baik, kami ucapkan terima kasih.

Sonny Hendra Sudaryana - Plt. Direktur Pengembangan Ekosistem Digital', '["Pengumuman Penting"]'::jsonb, '2026-02-02 00:00:00')
  ON CONFLICT (id) DO UPDATE SET 
    banner_image = EXCLUDED.banner_image,
    category = EXCLUDED.category,
    title = EXCLUDED.title,
    content = EXCLUDED.content,
    tags = EXCLUDED.tags,
    published_at = EXCLUDED.published_at;

  -- Resync sequence for blogs just in case
  SELECT setval('blogs_id_seq', (SELECT MAX(id) FROM blogs));
`;

async function runMigration() {
    try {
        console.log("Connecting to database...");
        
        console.log("Running DDL to create tables...");
        await pool.query(createTablesQuery);
        console.log("Tables created successfully.");

        console.log("Inserting initial data...");
        await pool.query(insertInitialDataQuery);
        console.log("Initial data inserted successfully.");

    } catch (err) {
        console.error("Migration failed:", err);
    } finally {
        await pool.end();
    }
}

runMigration();
