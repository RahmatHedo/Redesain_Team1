import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary ">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex flex-col gap-4 md:w-2/5">
            <img src="/assets/logo.png" alt="IGRS Logo" className="h-10 mb-4" />
            <p className="text-sm text-white leading-relaxed w-3/5">
              Indonesia Game Rating System (IGRS) merupakan pengklasifikasian
              Permainan Interaktif Elektronik (PIE) atau game berdasarkan konten
              dan kelompok usia pengguna.
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex-1 flex-col">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Pintasan
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sm text-white hover:text-blue-600 transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="/blog-detail/1"
                    className="text-sm text-white hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Informasi (Information) */}
            <div className="flex-1 flex-col">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Informasi
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/tentang"
                    className="text-sm text-white hover:text-blue-600 transition-colors"
                  >
                    Tentang IGRS
                  </a>
                </li>
                <li>
                  <a
                    href="/maklumat"
                    className="text-sm text-white hover:text-blue-600 transition-colors"
                  >
                    Maklumat Pelayanan
                  </a>
                </li>
                <li>
                  <a
                    href="/informasi-rating"
                    className="text-sm text-white hover:text-blue-600 transition-colors"
                  >
                    Informasi Rating
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Kontak & Alamat */}
            <div className="flex-1 flex-col">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Kontak
              </h3>
              <ul className="space-y-2 mb-4">
                <li>
                  <a
                    href="/contact"
                    className="text-sm text-white hover:text-blue-600 transition-colors"
                  >
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 flex-col">
              <h4 className="text-sm font-semibold text-white mb-4">
                Alamat Kami
              </h4>
              <address className="text-sm text-white not-italic leading-relaxed">
                Jl. Medan Merdeka Barat No.9, RT.002/RW.003,
                <br />
                Gambir, Jakarta Pusat, DKI Jakarta 10110
              </address>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-white">
                  📞{" "}
                  <a
                    href="tel:+62811806860"
                    className="hover:text-blue-600 transition-colors"
                  >
                    +62811806860
                  </a>
                </p>
                <p className="text-sm text-white">
                  📧{" "}
                  <a
                    href="mailto:helpdesk@igrs.id"
                    className="hover:text-blue-600 transition-colors"
                  >
                    helpdesk@igrs.id
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className=" pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">Didukung oleh:</span>
             <img className="h-8" src="/assets/kominfo.png" alt="Kominfo Logo" />
            </div>

            <div className="flex-1 flex items-center justify-center gap-4 text-sm text-white">
              <a
                href="/syarat-ketentuan"
                className="hover:text-blue-600 transition-colors"
              >
                Syarat dan Ketentuan
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="/kebijakan-privasi"
                className="hover:text-blue-600 transition-colors"
              >
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-sm text-white text-center">
           © IGRS 2026 - Direktorat Jenderal Ekosistem Digital | Kementerian Komunikasi dan Digital RI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
