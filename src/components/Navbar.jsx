import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white relative">
      <div className="mx-auto max-w-7xl px-4">

        {/* Desktop Navbar */}
        <div className="hidden h-16 items-center justify-between md:flex">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-sm font-bold text-white">
              DS
            </div>

            <span className="text-lg font-bold">
              <span className="text-gray-900">Dev</span>{" "}
              <span className="text-pink-500">Stack</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-7 text-sm font-medium text-gray-600">
            <a
              href="#"
              className="text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              className="hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              className="hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              className="hover:text-pink-500"
            >
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-600">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>


        {/* Mobile Navbar */}
        <div className="flex h-16 items-center justify-between md:hidden">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
            aria-label="Open menu"
          >
            ☰
          </button>


          {/* Center Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-xs font-bold text-white">
              DS
            </div>

            <span className="text-base font-bold">
              <span className="text-gray-900">Dev</span>{" "}
              <span className="text-pink-500">Stack</span>
            </span>
          </a>


          {/* Mobile Buttons */}
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 text-xs font-medium text-gray-600">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-1.5 text-xs font-semibold text-white">
              Sign Up
            </button>
          </div>

        </div>


        {/* Mobile Hamburger Menu */}
        {menuOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white py-4 shadow-md md:hidden">

            <div className="flex flex-col gap-4 px-6 text-sm font-medium text-gray-600">

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-500"
              >
                Projects
              </a>

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-500"
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar