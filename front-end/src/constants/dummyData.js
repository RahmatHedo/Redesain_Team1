// Dummy data for IGRS Home Page sections, aligned with backend API structures and schema

/**
 * 1. Summary of Games count by Age Rating
 * Aligns with backend endpoint: GET /games/summary/ratings
 */
export const RATINGS_AGE_SUMMARY = [
  {
    rating_age: "3+",
    total_games: 856,
    label: "Semua Umur",
    theme: "blue",
    colorClass: "bg-[#DBEAFE] border-[#2563EB] text-[#1D4ED8]",
    pillColor: "bg-[#EFF6FF] text-[#1E40AF]",
    icon: "/src/assets/ratingage-icon/3.png"
  },
  {
    rating_age: "7+",
    total_games: 1032,
    label: "Semua Umur",
    theme: "green",
    colorClass: "bg-[#D1FAE5] border-[#059669] text-[#047857]",
    pillColor: "bg-[#ECFDF5] text-[#065F46]",
    icon: "/src/assets/ratingage-icon/7.png"
  },
  {
    rating_age: "13+",
    total_games: 768,
    label: "Remaja",
    theme: "yellow",
    colorClass: "bg-[#FEF3C7] border-[#D97706] text-[#B45309]",
    pillColor: "bg-[#FFFBEB] text-[#92400E]",
    icon: "/src/assets/ratingage-icon/13.png"
  },
  {
    rating_age: "15+",
    total_games: 534,
    label: "Remaja",
    theme: "red",
    colorClass: "bg-[#FEE2E2] border-[#DC2626] text-[#B91C1C]",
    pillColor: "bg-[#FEF2F2] text-[#991B1B]",
    icon: "/src/assets/ratingage-icon/15.png"
  },
  {
    rating_age: "18+",
    total_games: 412,
    label: "Dewasa",
    theme: "darkred",
    colorClass: "bg-[#FDE8E8] border-[#9B1C1C] text-[#7A1C1C]",
    pillColor: "bg-[#FFF5F5] text-[#7A1C1C]",
    icon: "/src/assets/ratingage-icon/18.png"
  }
];

/**
 * 2. Popular Games list
 * Aligns with backend endpoint: GET /games (with sort=popular/trending)
 */
export const POPULAR_GAMES = [
  {
    id: 1,
    title: "Pulau Petualangan Fantasi",
    icon: "/src/assets/ratingage-icon/3.png",
    thumbnail: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=600&auto=format&fit=crop&q=80",
    release_year: 2024,
    rating_age: "3+",
    genres: ["Petualangan", "Puzzle"],
    platforms: ["Android", "iOS"],
    players_count: "1.2k Pemain",
    tag: "Trending",
    tagColor: "bg-[#1B4685] text-white"
  },
  {
    id: 2,
    title: "Neon Drift Racing",
    icon: "/src/assets/ratingage-icon/7.png",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
    release_year: 2023,
    rating_age: "7+",
    genres: ["Balapan", "Multiplayer"],
    platforms: ["Android", "iOS", "PC"],
    players_count: "850 Pemain",
    tag: "Pilihan Minggu Ini",
    tagColor: "bg-[#7C3AED] text-white"
  },
  {
    id: 3,
    title: "Legenda Kota Hilang",
    icon: "/src/assets/ratingage-icon/13.png",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
    release_year: 2025,
    rating_age: "13+",
    genres: ["Aksi", "RPG"],
    platforms: ["PC", "PlayStation"],
    players_count: "412 Pemain",
    tag: "Baru Ditambahkan",
    tagColor: "bg-[#D97706] text-white"
  }
];

/**
 * 3. Content Descriptors list
 * Aligns with database table: content_descriptors
 * Formatted exactly as shown in the design image grid
 */
export const CONTENT_DESCRIPTORS = [
  {
    id: 7,
    name: "Horror",
    description: "Mengandung adegan menyeramkan atau menegangkan.",
    icon: "/src/assets/content-icon/Horor.png",
    layout: "horizontal",
    bgColor: "bg-[#F5F3FF] border-[#DDD6FE]",
    textColor: "text-[#7C3AED]",
    gridClass: "col-span-1 md:col-span-2 md:row-start-1 md:col-start-1"
  },
  {
    id: 8,
    name: "Online Interactions",
    description: "Pemain dapat berinteraksi dengan orang lain secara online",
    icon: "/src/assets/content-icon/Interaction.png",
    layout: "vertical",
    bgColor: "bg-[#ECFDF5] border-[#A7F3D0]",
    textColor: "text-[#059669]",
    gridClass: "col-span-1 md:row-start-1 md:col-start-3"
  },
  {
    id: 9,
    name: "Character Appearance",
    description: "Mengandung kostum atau penampilan karakter tertentu.",
    icon: "/src/assets/content-icon/Character.png",
    layout: "vertical",
    bgColor: "bg-[#F0FDF4] border-[#BBF7D0]",
    textColor: "text-[#15803d]",
    gridClass: "col-span-1 md:row-start-1 md:col-start-4"
  },
  {
    id: 1,
    name: "Violence",
    description: "Menampilkan aksi pertarungan atau kekerasan",
    icon: "/src/assets/content-icon/Violence.png",
    layout: "vertical",
    bgColor: "bg-[#FFFAF0] border-[#FEE2E2]",
    textColor: "text-[#EA580C]",
    iconShape: "circle",
    gridClass: "col-span-1 md:row-span-2 md:row-start-2 md:col-start-1"
  },
  {
    id: 2,
    name: "Sexuality",
    description: "Mengandung unsur romantis atau konten dewasa.",
    icon: "/src/assets/content-icon/Sexuality.png",
    layout: "vertical",
    bgColor: "bg-[#FFF5F7] border-[#FCE7F3]",
    textColor: "text-[#DB2777]",
    gridClass: "col-span-1 md:row-start-2 md:col-start-2"
  },
  {
    id: 3,
    name: "Drugs",
    description: "Menampilkan atau merujuk pada penggunaan narkoba.",
    icon: "/src/assets/content-icon/Drugs.png",
    layout: "vertical",
    bgColor: "bg-[#FFFBEB] border-[#FEF3C7]",
    textColor: "text-[#78350F]",
    gridClass: "col-span-1 md:row-start-2 md:col-start-3"
  },
  {
    id: 4,
    name: "Gambling",
    description: "Mengandung unsur taruhan atau perjudian.",
    icon: "/src/assets/content-icon/Gambling.png",
    layout: "vertical",
    bgColor: "bg-[#FFFDF5] border-[#FEF3C7]",
    textColor: "text-[#CA8A04]",
    gridClass: "col-span-1 md:row-start-2 md:col-start-4"
  },
  {
    id: 5,
    name: "Language",
    description: "Mengandung kata-kata kasar atau tidak pantas.",
    icon: "/src/assets/content-icon/Language.png",
    layout: "horizontal",
    bgColor: "bg-[#EFF6FF] border-[#BFDBFE]",
    textColor: "text-[#2563EB]",
    gridClass: "col-span-1 md:col-span-2 md:row-start-3 md:col-start-2"
  },
  {
    id: 6,
    name: "Blood",
    description: "Menampilkan darah atau luka.",
    icon: "/src/assets/content-icon/Blood.png",
    layout: "vertical",
    bgColor: "bg-[#FFF5F5] border-[#FEE2E2]",
    textColor: "text-[#DC2626]",
    gridClass: "col-span-1 md:row-start-3 md:col-start-4"
  }
];

/**
 * 4. Blogs / Announcements list
 * Aligns with backend endpoint: GET /blogs
 */
export const BLOG_ANNOUNCEMENTS = [
  {
    id: 101,
    title: "Evaluasi dan Penangguhan Sementara Layanan Klasifikasi Gim / IGRS",
    banner_image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
    category: "Pengumuman Penting",
    snippet: "Indonesia Game Rating System (IGRS) saat ini sedang melakukan evaluasi komprehensif terhadap layanan klasifikasi guna meningkatkan kualitas pelayanan digital di Indonesia.",
    tags: ["IGRS", "Suspension", "Layanan"],
    published_at: "13 Juni 2023"
  },
  {
    id: 102,
    title: "Pemberitahuan Terkait Proses Verifikasi IGRS",
    banner_image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    category: "Pengumuman Penting",
    snippet: "Sehubungan dengan meningkatnya pengajuan klasifikasi gim dari para developer lokal maupun global, proses verifikasi administrasi dan konten disesuaikan demi menjaga akurasi penilaian.",
    tags: ["Verifikasi", "Klasifikasi", "Admin"],
    published_at: "17 Januari 2023"
  },
  {
    id: 103,
    title: "MAKLUMAT PELAYANAN",
    banner_image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=80",
    category: "Berita",
    snippet: "Kementerian Komunikasi dan Digital berkomitmen untuk selalu memberikan pelayanan publik yang transparan, profesional, dan akuntabel sesuai dengan standar kelayakan IGRS.",
    tags: ["Pelayanan", "Kominfo", "Publik"],
    published_at: "24 Oktober 2025"
  },
  {
    id: 104,
    title: "Panduan Cuplikan Konten",
    banner_image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
    category: "Pengumuman Penting",
    snippet: "Panduan cuplikan konten merupakan kumpulan dokumen visual berupa gambar yang merujuk pada konten kekerasan, darah, horor, penampilan rokok dan/atau narkotika, serta penggunaan bahasa kasar.",
    tags: ["IGRS", "Panduan", "Edukasi"],
    published_at: "11 Februari 2023"
  }
];

/**
 * 5. Full Games list (for /games page search and pagination)
 */
export const GAME_CARDS = [
  ...POPULAR_GAMES,
  {
    id: 4,
    title: "Mobile Legends: Bang Bang",
    rating_age: "18+",
    genres: ["Aksi", "MOBA", "Strategi"],
    platforms: ["Android", "iOS"],
    players_count: "10M+ Pemain"
  },
  {
    id: 5,
    title: "Minecraft Pocket Edition",
    rating_age: "7+",
    genres: ["Kreatif", "Simulasi"],
    platforms: ["Android", "iOS"],
    players_count: "5M+ Pemain"
  },
  {
    id: 6,
    title: "Roblox",
    rating_age: "13+",
    genres: ["Multiplayer", "Kreatif"],
    platforms: ["Android", "iOS", "PC"],
    players_count: "8M+ Pemain"
  }
];

/**
 * 6. Detailed Rating Cards (for /information-rating page)
 */
export const RATING_CARDS = [
  {
    id: "3plus",
    label: "Rating Usia 3+",
    type: "rating",
    badgeNumber: "3+",
    badgeLabel: "SEMUA UMUR",
    title: "Rating Usia 3 Tahun Ke Atas",
    description:
      "Konten dalam klasifikasi ini aman bagi anak-anak usia dini. Fokus pada edukasi, kreativitas, dan hiburan ringan.",
    points: [
      "Tidak mengandung unsur kekerasan",
      "Tidak ada unsur horor atau menakutkan",
      "Tidak menggunakan kata-kata kasar",
      "Interaksi sosial terbatas dan aman",
    ],
  },
  {
    id: "7plus",
    label: "Rating Usia 7+",
    type: "rating",
    badgeNumber: "7+",
    badgeLabel: "USIA 7+",
    title: "Rating Usia 7 Tahun Ke Atas",
    description: "Konten dalam klasifikasi ini aman bagi anak-anak usia sekolah. Mengandung tantangan kognitif ringan.",
    points: [
      "Kekerasan fantasi sangat ringan",
      "Tidak ada unsur horor yang intens",
      "Bebas kata-kata kasar/sarkasme berat"
    ],
  },
  {
    id: "13plus",
    label: "Rating Usia 13+",
    type: "rating",
    badgeNumber: "13+",
    badgeLabel: "USIA 13+",
    title: "Rating Usia 13 Tahun Ke Atas",
    description: "Mengandung konten yang sesuai bagi remaja usia sekolah menengah pertama.",
    points: [
      "Mengandung unsur pertarungan/kekerasan fantasi sedang",
      "Dialog humor remaja",
      "Terdapat interaksi online bebas terpantau"
    ],
  },
  {
    id: "15plus",
    label: "Rating Usia 15+",
    type: "rating",
    badgeNumber: "15+",
    badgeLabel: "USIA 15+",
    title: "Rating Usia 15 Tahun Ke Atas",
    description: "Kategori game untuk remaja akhir dengan tema yang lebih dewasa.",
    points: [
      "Kekerasan fisik lebih realistis tanpa visualisasi sadis berlebih",
      "Bahasa percakapan gaul remaja yang kasar ringan",
      "Simulasi strategi yang lebih kompleks"
    ],
  },
  {
    id: "18plus",
    label: "Rating Usia 18+",
    type: "rating",
    badgeNumber: "18+",
    badgeLabel: "DEWASA",
    title: "Rating Usia 18 Tahun Ke Atas",
    description: "Hanya untuk pengguna dewasa. Mengandung konten intens yang membutuhkan kematangan berpikir.",
    points: [
      "Kekerasan fisik dan visualisasi luka realistis",
      "Unsur horor/ketakutan psikologis yang intens",
      "Bahasa kasar dan percakapan dewasa"
    ],
  },
  {
    id: "konten-terlarang",
    label: "Konten Terlarang",
    type: "info",
    title: "Konten Terlarang",
    description: "Daftar jenis konten yang tidak boleh ada dalam game apapun berdasarkan hukum di Indonesia.",
    points: [
      "Unsur pornografi dan eksploitasi seksual",
      "Unsur perjudian uang asli",
      "Mempromosikan kebencian SARA dan radikalisme"
    ],
  },
  {
    id: "klasifikasi-konten",
    label: "Klasifikasi Konten",
    type: "info",
    title: "Klasifikasi Konten",
    description: "Penjelasan kategori konten yang dinilai oleh tim ahli komisi IGRS.",
    points: [
      "Alur cerita/Narasi",
      "Visualisasi adegan aksi kekerasan",
      "Interaksi pemain secara online"
    ],
  },
];
