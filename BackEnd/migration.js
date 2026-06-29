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
