import { useState } from "react";

import RatingCards from "../components/shared/RatingCards";
import { RATING_CARDS } from "../constants/dummyData";

function InformationRating() {
  const [activeRating, setActiveRating] = useState("3plus");

  const activeItem = RATING_CARDS.find((item) => item.id === activeRating);

  return (
    <>
      <main className="bg-background min-h-screen">
        {/* Hero Section */}

        <section className="max-w-6xl mx-auto px-6 py-6">
          <div className="bg-blue-50 max-w-6xl mx-auto px-16 py-10 rounded-2xl ">
            <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
              Informasi Rating Umur
            </h1>
            <p className="text-sm text-gray-500">
              Indonesia Game Rating System (IGRS) membantu orang tua, pendidik,
              dan masyarakat dalam memilih permainan interaktif elektronik yang
              sesuai dengan tingkat usia pengguna.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="grid grid-cols-1 max-w-6xl mx-auto px-6 py-6 gap-6 md:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="mb-3 text-xs font-semibold tracking-wide text-slate-500">
                NAVIGASI HALAMAN
              </p>

              <nav className="flex flex-col gap-2">
                {RATING_CARDS.map((item) => {
                  const isActive = item.id === activeRating;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveRating(item.id)}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "border-blue-600 text-blue-700"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? "bg-blue-600" : "bg-slate-300"
                        }`}
                      />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="rounded-xl bg-blue-900 p-5 text-white">
              <div className="mb-3 flex items-center gap-2">
                <i class="bi bi-shield-shaded"></i>
                <h3 className=" font-semibold">Penting bagi Orang Tua</h3>
              </div>
              <p className="text-sm text-blue-100">
                Selalu periksa label rating pada kemasan atau deskripsi digital
                sebelum membeli game untuk buah hati Anda.
              </p>
            </div>
          </aside>

          {/* Card */}
          <div>
            <RatingCards data={activeItem} />
          </div>
        </section>
      </main>
    </>
  );
}

export default InformationRating;
