# Dokumentasi Backend API & Basis Data IGRS (Indonesia Game Rating System)

Dokumentasi ini dibuat sebagai referensi pengembangan sisi Backend untuk mendukung portal **IGRS**. Dokumentasi ini mencakup skema basis data relasional yang telah dinormalisasi serta spesifikasi API untuk dua entitas utama: **Gim (Games)** dan **Blog/Artikel/Pengumuman (Blogs)**.

---

## 1. Skema Basis Data (Database Schema)

Skema database dirancang menggunakan pendekatan relasional untuk mendukung klasifikasi gim secara fleksibel melalui normalisasi data *content descriptors*.

```mermaid
erDiagram
    GAMES ||--o{ GAME_DESCRIPTORS : has
    CONTENT_DESCRIPTORS ||--o{ GAME_DESCRIPTORS : defines
    BLOGS {
        int id PK
        varchar title
        varchar banner_image
        enum category
        text content
        json tags
        timestamp published_at
        timestamp created_at
        timestamp updated_at
    }
    GAMES {
        int id PK
        varchar title
        varchar thumbnail
        int release_year
        enum rating_age
        json genres
        json platforms
        varchar publisher
        varchar developer
        text description
        int player_count
        int likes_count
        timestamp created_at
        timestamp updated_at
    }
    CONTENT_DESCRIPTORS {
        int id PK
        varchar name
        text description
        varchar icon_url
    }
    GAME_DESCRIPTORS {
        int game_id FK
        int descriptor_id FK
    }
```

### A. Tabel `games`
Menyimpan metadata dasar dari gim yang terdaftar di sistem IGRS.

| Kolom | Tipe Data | Atribut | Deskripsi |
| :--- | :--- | :--- | :--- |
| `id` | `INT` | PK, Auto Increment | ID unik gim. |
| `title` | `VARCHAR(255)` | Not Null | Judul gim (misal: *Mobile Legends: Bang Bang*). |
| `thumbnail` | `VARCHAR(255)` | Not Null | URL gambar thumbnail/sampul gim. |
| `release_year` | `INT` | Not Null | Tahun rilis resmi gim (misal: `2016`). |
| `rating_age` | `ENUM` | Not Null | Klasifikasi rating usia: `'3+'`, `'7+'`, `'13+'`, `'15+'`, `'18+'`. |
| `genres` | `JSON` | Not Null | Array string genre gim (misal: `["MOBA", "Strategy", "Action"]`). |
| `platforms` | `JSON` | Not Null | Platform yang tersedia (misal: `["Android", "iOS"]`). |
| `publisher` | `VARCHAR(100)` | Not Null | Nama perusahaan penerbit gim. |
| `developer` | `VARCHAR(100)` | Not Null | Nama pengembang gim. |
| `description` | `TEXT` | Not Null | Deskripsi lengkap mengenai alur dan fitur gim. |
| `player_count` | `INT` | Default `0` | Jumlah pemain untuk metrik popularitas (ditampilkan dalam format ribuan di UI). |
| `likes_count` | `INT` | Default `0` | Jumlah suka/like dari pengguna. |
| `created_at` | `TIMESTAMP` | Default `NOW()` | Tanggal data ditambahkan. |
| `updated_at` | `TIMESTAMP` | Default `NOW()` | Tanggal terakhir data diperbarui. |

### B. Tabel `content_descriptors` (Normalisasi)
Tabel master untuk deskripsi klasifikasi konten sensitif dalam gim berdasarkan standar IGRS.

| Kolom | Tipe Data | Atribut | Deskripsi |
| :--- | :--- | :--- | :--- |
| `id` | `INT` | PK, Auto Increment | ID unik deskriptor konten. |
| `name` | `VARCHAR(100)` | Not Null, Unique | Nama indikator konten (misal: *Violence*, *Drugs*, *Gambling*). |
| `description` | `TEXT` | Not Null | Penjelasan maksud dari indikator tersebut. |
| `icon_url` | `VARCHAR(255)` | Not Null | URL ikon representatif untuk indikator konten. |

> [!NOTE]
> **Daftar Master Deskriptor Konten IGRS:**
> 1. **Violence** - Menampilkan aksi pertarungan atau kekerasan.
> 2. **Sexuality** - Mengandung unsur romantis atau konten dewasa.
> 3. **Drugs** - Menampilkan atau merujuk pada penggunaan narkoba.
> 4. **Gambling** - Mengandung unsur taruhan atau perjudian.
> 5. **Language** - Mengandung kata-kata kasar atau tidak pantas.
> 6. **Blood** - Menampilkan darah atau luka.
> 7. **Horor** - Mengandung adegan menyeramkan atau menegangkan.
> 8. **Online Interactions** - Pemain dapat berinteraksi dengan orang lain secara online.
> 9. **Character Appearance** - Mengandung kostum atau penampilan karakter tertentu.

### C. Tabel `game_descriptors` (Junction Table)
Menghubungkan entitas gim dengan deskriptor konten yang ada di dalamnya (Relasi *Many-to-Many*).

| Kolom | Tipe Data | Atribut | Deskripsi |
| :--- | :--- | :--- | :--- |
| `game_id` | `INT` | FK, Composite PK | Merujuk ke `games.id` (Cascade on Delete). |
| `descriptor_id` | `INT` | FK, Composite PK | Merujuk ke `content_descriptors.id` (Cascade on Delete). |

### D. Tabel `blogs`
Menyimpan data berita, artikel edukasi, serta pengumuman penting IGRS.

| Kolom | Tipe Data | Atribut | Deskripsi |
| :--- | :--- | :--- | :--- |
| `id` | `INT` | PK, Auto Increment | ID unik artikel/pengumuman. |
| `title` | `VARCHAR(255)` | Not Null | Judul artikel (misal: *Panduan Cuplikan Konten*). |
| `banner_image` | `VARCHAR(255)` | Not Null | URL gambar utama/banner artikel. |
| `category` | `ENUM` | Not Null | Kategori tulisan: `'Pengumuman Penting'`, `'Berita'`. |
| `content` | `TEXT` | Not Null | Konten utama artikel (mendukung format Markdown/HTML). |
| `tags` | `JSON` | Not Null | Kumpulan tag artikel (misal: `["IGRS", "Edukasi", "Sosialisasi"]`). |
| `published_at` | `TIMESTAMP` | Not Null | Waktu publikasi artikel ke publik. |
| `created_at` | `TIMESTAMP` | Default `NOW()` | Tanggal data ditambahkan. |
| `updated_at` | `TIMESTAMP` | Default `NOW()` | Tanggal terakhir data diperbarui. |

---

## 2. Dokumentasi API Endpoints (API Specification)

Semua request dan response menggunakan format **JSON**. Basis URL API didefinisikan sebagai `/api/v1`.

### A. Modul Gim (Games API)

#### 1. Mendapatkan Daftar Gim
* **Endpoint:** `GET /games`
* **Query Parameters (Opsional):**
  * `search` (string) - Mencari gim berdasarkan judul.
  * `rating_age` (string) - Memfilter berdasarkan rating usia (contoh: `18+`, `13+`).
  * `sort` (string) - Mengurutkan hasil (`popular` untuk popularitas pemain, `trending`, `newest` untuk terbaru).
  * `page` (int) - Nomor halaman untuk pagination (default: `1`).
  * `limit` (int) - Jumlah data per halaman (default: `10`).

* **Contoh Response (Success - `200 OK`):**
  ```json
  {
    "status": "success",
    "message": "Daftar gim berhasil diambil",
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_items": 45,
      "per_page": 10
    },
    "data": [
      {
        "id": 1,
        "title": "Pulau Petualangan Fantasi",
        "thumbnail": "https://api.igrs.id/uploads/games/pulau-petualangan.jpg",
        "release_year": 2024,
        "rating_age": "3+",
        "genres": ["Petualangan", "Puzzle"],
        "player_count": 1200,
        "likes_count": 340,
        "content_descriptors": [
          {
            "id": 8,
            "name": "Online Interactions",
            "icon_url": "https://api.igrs.id/icons/online-interaction.svg"
          }
        ]
      },
      {
        "id": 2,
        "title": "Neon Drift Racing",
        "thumbnail": "https://api.igrs.id/uploads/games/neon-drift.jpg",
        "release_year": 2023,
        "rating_age": "7+",
        "genres": ["Balapan", "Multiplayer"],
        "player_count": 8500,
        "likes_count": 1200,
        "content_descriptors": [
          {
            "id": 8,
            "name": "Online Interactions",
            "icon_url": "https://api.igrs.id/icons/online-interaction.svg"
          }
        ]
      },
      {
        "id": 3,
        "title": "Legenda Kota Hilang",
        "thumbnail": "https://api.igrs.id/uploads/games/legenda-kota.jpg",
        "release_year": 2025,
        "rating_age": "13+",
        "genres": ["Aksi", "RPG"],
        "player_count": 45000,
        "likes_count": 9800,
        "content_descriptors": [
          {
            "id": 1,
            "name": "Violence",
            "icon_url": "https://api.igrs.id/icons/violence.svg"
          },
          {
            "id": 5,
            "name": "Language",
            "icon_url": "https://api.igrs.id/icons/language.svg"
          }
        ]
      }
    ]
  }
  ```

#### 2. Mendapatkan Detail Gim Berdasarkan ID
* **Endpoint:** `GET /games/:id`
* **Contoh Response (Success - `200 OK`):**
  ```json
  {
    "status": "success",
    "message": "Detail gim berhasil ditemukan",
    "data": {
      "id": 4,
      "title": "Mobile Legends: Bang Bang",
      "thumbnail": "https://api.igrs.id/uploads/games/mlbb-thumbnail.jpg",
      "release_year": 2016,
      "rating_age": "18+",
      "genres": ["Action", "MOBA", "Strategy"],
      "platforms": ["Android", "iOS"],
      "publisher": "Moonton Games",
      "developer": "Moonton",
      "description": "Mobile Legends: Bang Bang is one of the most popular mobile Multiplayer Online Battle Arena (MOBA) games worldwide that brings communities together through teamwork and strategy...",
      "player_count": 150000000,
      "likes_count": 4820100,
      "screenshots": [
        "https://api.igrs.id/uploads/games/mlbb-ss1.jpg",
        "https://api.igrs.id/uploads/games/mlbb-ss2.jpg",
        "https://api.igrs.id/uploads/games/mlbb-ss3.jpg"
      ],
      "content_descriptors": [
        {
          "id": 1,
          "name": "Violence",
          "description": "Contains animated combat with fantasy-style effects and combat-oriented gameplay.",
          "icon_url": "https://api.igrs.id/icons/violence.svg"
        },
        {
          "id": 8,
          "name": "Online Interaction",
          "description": "Features real-time voice and text chat between players during matches.",
          "icon_url": "https://api.igrs.id/icons/online-interaction.svg"
        },
        {
          "id": 9,
          "name": "Character Visuals",
          "description": "Hero skins and designs emphasize heroic and stylized fantasy archetypes.",
          "icon_url": "https://api.igrs.id/icons/character-appearance.svg"
        }
      ],
      "created_at": "2026-01-10T08:30:00Z",
      "updated_at": "2026-06-20T12:00:00Z"
    }
  }
  ```

#### 3. Membuat Data Gim Baru (Admin Only)
* **Endpoint:** `POST /games`
* **Headers:** `Authorization: Bearer <token>`
* **Contoh Request Body:**
  ```json
  {
    "title": "Game Petualangan Baru",
    "thumbnail": "https://api.igrs.id/uploads/games/new-adv.jpg",
    "release_year": 2026,
    "rating_age": "13+",
    "genres": ["Adventure", "RPG"],
    "platforms": ["Android"],
    "publisher": "Studio Lokal Indonesia",
    "developer": "Dev Lokal",
    "description": "Jelajahi dunia misterius nusantara dalam gim RPG terbaru.",
    "player_count": 0,
    "likes_count": 0,
    "screenshots": [
      "https://api.igrs.id/uploads/games/new-ss1.jpg"
    ],
    "descriptors": [1, 8]
  }
  ```
* **Contoh Response (Created - `201 Created`):**
  ```json
  {
    "status": "success",
    "message": "Data gim baru berhasil disimpan",
    "data": {
      "id": 5
    }
  }
  ```

#### 4. Menghapus Data Gim (Admin Only)
* **Endpoint:** `DELETE /games/:id`
* **Headers:** `Authorization: Bearer <token>`
* **Contoh Response (Success - `200 OK`):**
  ```json
  {
    "status": "success",
    "message": "Data gim dengan ID 5 berhasil dihapus"
  }
  ```

---

### B. Modul Blog / Artikel (Blogs API)

#### 1. Mendapatkan Daftar Blog / Artikel
* **Endpoint:** `GET /blogs`
* **Query Parameters (Opsional):**
  * `category` (string) - Memfilter kategori (`Pengumuman Penting` atau `Berita`).
  * `search` (string) - Mencari berdasarkan kata kunci judul.
  * `limit` (int) - Jumlah data yang diambil (default: `10`).

* **Contoh Response (Success - `200 OK`):**
  ```json
  {
    "status": "success",
    "message": "Daftar artikel berhasil diambil",
    "data": [
      {
        "id": 101,
        "title": "Evaluation and Temporary Suspension of Game Classification Services (IGRS)",
        "banner_image": "https://api.igrs.id/uploads/blogs/igrs-suspension.jpg",
        "category": "Pengumuman Penting",
        "snippet": "The Indonesia Game Rating System (IGRS) is currently undergoing a comprehensive review...",
        "tags": ["IGRS", "Suspension", "Layanan"],
        "published_at": "2020-06-16T00:00:00Z"
      },
      {
        "id": 102,
        "title": "SERVICE STATEMENT",
        "banner_image": "https://api.igrs.id/uploads/blogs/service-statement.jpg",
        "category": "Berita",
        "snippet": "The Ministry of Digital Ecosystem is committed to implementing and improving its services...",
        "tags": ["Berita", "Kominfo", "Pelayanan"],
        "published_at": "2025-10-24T00:00:00Z"
      },
      {
        "id": 103,
        "title": "Tips Memilih Game Edukasi untuk Anak Usia 3-7 Tahun",
        "banner_image": "https://api.igrs.id/uploads/blogs/edu-games.jpg",
        "category": "Berita",
        "snippet": "Memilih game edukasi yang tepat membantu tumbuh kembang anak secara kognitif...",
        "tags": ["Edukasi", "Anak", "Tips"],
        "published_at": "2024-05-10T00:00:00Z"
      }
    ]
  }
  ```

#### 2. Mendapatkan Detail Artikel Berdasarkan ID
* **Endpoint:** `GET /blogs/:id`
* **Contoh Response (Success - `200 OK`):**
  ```json
  {
    "status": "success",
    "message": "Detail artikel berhasil ditemukan",
    "data": {
      "id": 104,
      "title": "Panduan Cuplikan Konten",
      "banner_image": "https://api.igrs.id/uploads/blogs/buku-panduan.jpg",
      "category": "Pengumuman Penting",
      "content": "### Daftar Isi\n\n1. Definisi Cuplikan Konten dan Cuplikan Permainan\n2. Ketentuan Pengisian Cuplikan dalam URL\n3. Contoh Cuplikan Konten dan Cuplikan Permainan\n\n### 1. Definisi\n\n**Cuplikan Konten** adalah kumpulan dokumen visual berupa gambar yang merujuk pada konten kekerasan, darah, horor, penampilan rokok dan/atau narkotika, penggunaan...",
      "tags": ["IGRS", "Klasifikasi", "Panduan"],
      "published_at": "2025-10-01T00:00:00Z",
      "created_at": "2025-10-01T00:00:00Z",
      "updated_at": "2025-10-01T00:00:00Z"
    }
  }
  ```

#### 3. Membuat Artikel Baru (Admin Only)
* **Endpoint:** `POST /blogs`
* **Headers:** `Authorization: Bearer <token>`
* **Contoh Request Body:**
  ```json
  {
    "title": "Sosialisasi Klasifikasi Gim Terbaru 2026",
    "banner_image": "https://api.igrs.id/uploads/blogs/sosialisasi-2026.jpg",
    "category": "Berita",
    "content": "Pemerintah bersama IGRS mengadakan sosialisasi klasifikasi gim secara berkala...",
    "tags": ["IGRS", "Sosialisasi"],
    "published_at": "2026-06-28T14:00:00Z"
  }
  ```
* **Contoh Response (Created - `201 Created`):**
  ```json
  {
    "status": "success",
    "message": "Artikel baru berhasil dipublikasikan",
    "data": {
      "id": 105
    }
  }
  ```

---

## 3. Penanganan Error (Error Handling)

API menggunakan kode status HTTP standar untuk menunjukkan keberhasilan atau kegagalan request.

| HTTP Status Code | Deskripsi | Skenario Kasus |
| :--- | :--- | :--- |
| `200 OK` | Request Berhasil | Mendapatkan data, memperbarui data, menghapus data. |
| `201 Created` | Resource Baru Terbuat | Berhasil menambahkan gim atau artikel baru. |
| `400 Bad Request` | Validasi Payload Gagal | Ada parameter wajib yang kurang atau format payload salah. |
| `401 Unauthorized` | Autentikasi Diperlukan | Token admin tidak dikirim atau tidak valid pada endpoint terproteksi. |
| `404 Not Found` | Data Tidak Ditemukan | ID gim atau ID artikel yang diminta tidak eksis di database. |
| `500 Internal Server Error` | Gangguan Server | Terjadi kegagalan koneksi database atau error server internal lainnya. |

#### Contoh Payload Error (`404 Not Found`):
```json
{
  "status": "fail",
  "message": "Data gim dengan ID 999 tidak ditemukan"
}
```

#### Contoh Payload Error (`400 Bad Request`):
```json
{
  "status": "fail",
  "message": "Validasi gagal",
  "errors": {
    "title": "Judul gim wajib diisi",
    "rating_age": "Rating usia harus bernilai '3+', '7+', '13+', '15+', atau '18+'"
  }
}
```
