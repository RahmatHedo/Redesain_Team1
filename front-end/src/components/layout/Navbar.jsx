function Navbar() {
  return (
    <nav className="bg-white text-gray-800 p-4 flex flex-row justify-between items-center shadow-md">
        <div className="flex px-4 items-center space-x-2">
            <img src="/assets/logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex px-6 space-x-4">
            <a href="/" className="hover:text-blue-500">Beranda</a>
            <a href="/games" className="hover:text-blue-500">Games</a>
            <a href="/information-rating" className="hover:text-blue-500">Informasi Rating</a>
            <a href="/about" className="hover:text-blue-500">Tentang</a>
        </div>
        <div className="flex-1 flex justify-end">
            <button className="bg-primary text-white px-4 py-2 rounded-3xl hover:bg-blue-600">Login</button>
        </div>


    </nav>
  );
}

export default Navbar;