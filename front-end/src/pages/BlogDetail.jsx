function BlogDetail() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <p className=" bg-bgiconred w-fit text-red-600 text-xs px-4 py-2 rounded-2xl font-bold tracking-wide uppercase mb-3">
          Pengumuman Penting
        </p>


        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-snug mb-4">
          Evaluasi dan Penangguhan Sementara
          <br />
          Layanan Klasifikasi Gim / IGRS
        </h1>


        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <i class="bi bi-calendar"></i>
          <span>18 June 2026</span>
        </div>

        <div className="bg-white border border-gray-200 rounded-md flex flex-col items-center justify-center py-12 mb-4">
          <div className="flex items-center gap-6">
            <div>
              <img className="w-32 h-32 object-contain" src="" alt="IGRS Logo" />
            </div>
          </div>
        </div>


        <div className="bg-white border border-gray-200 rounded-md p-6 md:p-8 text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            Jakarta — Indonesia Game Rating System (IGRS) saat ini tengah
            menjalani proses evaluasi menyeluruh yang mencakup aspek tata
            kelola, sistem, dan proses bisnis layanan. Langkah ini merupakan
            upaya IGRS dalam menghadirkan layanan klasifikasi gim yang andal,
            akuntabel, dan mudah dimanfaatkan oleh Penerbit Gim maupun
            masyarakat.
          </p>

          
        </div>
      </div>
    </main>
  );
}

export default BlogDetail;