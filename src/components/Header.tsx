const Header = () => {
  return (
    <header className="min-h-screen w-52 p-5 bg-black text-white">
        <nav className="w-full border-gray-400 border-b-2 py-4">
          <div className="flex items-center gap-4 mb-3">
            <span className="material-symbols-outlined">home</span>
            <p>Home</p>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <span className="material-symbols-outlined">search</span>
            <p>Search</p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined">library_books</span>
            <p>Your Library</p>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <span className="material-symbols-outlined">add_circle</span>
            <p>Create Playlist</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined">favorite</span>
            <p>Liked Songs</p>
          </div>
        </nav>

        <div className="py-4 font-light">
          <ul>
            <li>ANIVERSÁRIO</li>
            <li>Aniver Funk</li>
            <li>Niver Diegonica</li>
            <li>My Playlist #13</li>
            <li>Daily Mix 4</li>
            <li>Hot Hit Brasil</li>
            <li>Sofrência</li>
            <li>This Is Victor & Leo</li>
          </ul>
        </div>
      </header>
  )
}

export default Header
