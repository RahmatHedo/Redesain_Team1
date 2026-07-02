
// Reusable card component used for Vision & Mission and Layanan IGRS sections
function InfoCard({ icon, title, description, accentColor }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-6 h-full ${
        accentColor ? `border-l-4 ${accentColor}` : "border border-gray-100"
      }`}
    >
      {icon && (
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-700">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

// Dummy data
const visionMissionData = [
  {
    id: "tujuan",
    title: "Tujuan IGRS",
    description:
      "Layanan ini bertujuan untuk memberikan klasifikasi usia dan konten dalam Gim yang beredar di Indonesia, dengan memperhatikan norma sosial, budaya bangsa, serta kesesuaian dengan peraturan perundang-undangan.",
    accentColor: "border-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "peran",
    title: "Peran IGRS",
    description:
      "Melalui sistem klasifikasi yang transparan dan akuntabel, IGRS hadir sebagai upaya strategis negara dalam menyeimbangkan antara perkembangan industri kreatif digital dan kebutuhan perlindungan publik dari potensi dampak negatif konten gim.",
    accentColor: "border-green-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M4.5 16.5c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8 1-2 1-2s-1.2.2-2 1c0 0-.2-1.2 1-2Z" />
        <path d="M12 15l-3-3 8-8 3 3-8 8Z" />
        <path d="M9 9l6 6" />
      </svg>
    ),
  },
];

const layananData = [
  {
    id: "kemudahan",
    title: "Kemudahan Klasifikasi Gim",
    description:
      "IGRS memberikan kemudahan bagi penerbit gim untuk mendaftarkan dan mengklasifikasikan produknya sesuai kategori usia yang berlaku.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
      </svg>
    ),
  },
  {
    id: "pengaduan",
    title: "Pengaduan dan Konsultasi",
    description:
      "IGRS memfasilitasi aduan serta konsultasi masyarakat terkait klasifikasi Gim dan pemanfaatannya secara luas di masyarakat.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2 1.8-2 3.5M12 17h.01" />
      </svg>
    ),
  },
  {
    id: "dukungan",
    title: "Dukungan Industri Gim",
    description:
      "Layanan ini tidak hanya memperkuat pelindungan konsumen, tetapi juga mendukung pertumbuhan industri Gim nasional.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M3 17l6-6 4 4 8-8M21 7v6h-6" />
      </svg>
    ),
  },
];

const alurKerjaData = [
  {
    step: 1,
    title: "Registrasi Akun",
    description: "Penerbit Gim/Pengembang mendaftar akun pada website IGRS.",
  },
  {
    step: 2,
    title: "Self-assessment",
    description:
      "Penerbit Gim/Pengembang melakukan self-assessment dengan mengisi formulir dan kuesioner.",
  },
  {
    step: 3,
    title: "Verifikasi",
    description:
      "Penerbit Gim/Pengembang menunggu hasil verifikasi dari IGRS.",
  },
  {
    step: 4,
    title: "Sanggah",
    description:
      "Penerbit Gim/Pengembang dapat mengajukan proses sanggah terhadap hasil verifikasi.",
  },
  {
    step: 5,
    title: "Sertifikasi",
    description:
      "Penerbit Gim/Pengembang mengunduh sertifikat hasil klasifikasi.",
    done: true,
  },
];

function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="bg-blue-50 max-w-6xl mx-auto px-16 py-10 rounded-2xl">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
          Tentang IGRS
        </h1>
        <p className="text-sm text-gray-500">
          Sistem klasifikasi permainan interaktif elektronik yang aman,
          andal, dan bertanggung jawab untuk masa depan digital Indonesia.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
              Indonesia Game Rating System
            </h2>
            <p className="text-sm md:text-base text-gray-600 text-justify leading-relaxed mb-4">
              Indonesia Game Rating System (IGRS) adalah layanan publik yang
              diselenggarakan oleh Kementerian Komunikasi dan Digital
              (Komdigi) sebagai bentuk komitmen pemerintah dalam rangka
              mewujudkan penyelenggaraan sistem dan transaksi elektronik
              khususnya Gim yang aman, andal, dan bertanggung jawab.
            </p>
            <p className="text-sm md:text-base text-gray-600 text-justify leading-relaxed">
              Adapun klasifikasi Gim dilakukan sesuai Peraturan Menteri
              Komunikasi dan Informatika Nomor 2 Tahun 2024 tentang
              Klasifikasi Gim. Layanan ini bertujuan untuk memberikan
              klasifikasi usia dan konten dalam Gim yang beredar di
              Indonesia, dengan memperhatikan norma sosial, budaya bangsa,
              serta kesesuaian dengan peraturan perundang-undangan.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-50 rounded-lg p-6 flex items-center  gap-3">
             <img src="/src/assets/igrs-logo.png" alt="IGRS Logo" className="h-16 w-16 object-contain"/>
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visionMissionData.map((item) => (
          <InfoCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            accentColor={item.accentColor}
          />
        ))}
      </div>
    </section>
  );
}

function LayananSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-3">
            Layanan IGRS
          </h2>
          <span className="inline-block w-16 h-1 bg-blue-700 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layananData.map((item) => (
            <InfoCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AlurKerjaSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
          Alur Kerja IGRS
        </h2>
        <p className="text-sm text-gray-500">
          Proses transparan mulai dari pendaftaran hingga penerbitan
          sertifikat
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-4">
        {alurKerjaData.map((item) => (
          <div key={item.step} className="flex flex-col items-center text-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-3 ${
                item.done
                  ? "bg-green-500 text-white"
                  : "border-2 border-blue-700 text-blue-700"
              }`}
            >
              {item.done ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              ) : (
                item.step
              )}
            </div>
            <p className="text-sm font-bold text-gray-900 mb-1">
              {item.title}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen px-16">
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <LayananSection />
      <AlurKerjaSection />
    </main>
  );
}