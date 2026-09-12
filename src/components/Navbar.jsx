function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-sm font-bold text-white">
            DS
          </div>

          <span className="text-lg font-bold">
              <span className="text-gray-900">Dev</span>{" "}
             <span className="text-pink-500">Stack</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 text-sm font-medium text-gray-600 md:flex">
          <a href="#" className="text-pink-500">Home</a>
          <a href="#" className="hover:text-pink-500">Technologies</a>
          <a href="#" className="hover:text-pink-500">Projects</a>
          <a href="#" className="hover:text-pink-500">About</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden px-3 py-2 text-sm font-medium text-gray-600 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar