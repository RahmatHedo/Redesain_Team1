// components/AnnouncementCard.jsx
function AnnouncementCard({ data }) {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden">
      {/* Gambar */}
      <img src="" alt="Announcement" className="w-full h-48 object-cover" />

      {/* Konten */}
      <div className="p-4">
        {/* Badge status */}

        <div className="flex flex-row items-center justify-between mb-2">
          <div className="inline-block bg-bgiconred text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
            Pengumuman
          </div>

          {/* Tanggal */}
          <p className="text-sm text-gray-500 mb-2">1232312</p>
        </div>

        {/* Judul */}
        <h2 className="text-xl font-bold uppercase text-gray-800 mb-1">
          Lorem Ipsum Dolor
        </h2>

        {/* Preview konten */}
        <p className="text-sm text-gray-600 line-clamp-3">liwjdaoiwhdwiodh</p>
      </div>
    </div>
  );
}

export default AnnouncementCard;
