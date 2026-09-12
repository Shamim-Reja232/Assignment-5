function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-sm font-bold text-white">
              DS
            </div>

            <span className="text-lg font-bold">
              <span className="text-gray-900">Dev</span>{" "}
              <span className="text-pink-500">Stack</span>
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Build your ideal development stack with modern and reliable
            technologies for your next project.
          </p>

          {/* Social */}
          <div className="mt-5 flex gap-4 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-pink-500">GitHub</a>
            <a href="#" className="hover:text-pink-500">Twitter</a>
            <a href="#" className="hover:text-pink-500">LinkedIn</a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Product
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-pink-500">
              Home
            </a>
            <a href="#technologies" className="block hover:text-pink-500">
              Technologies
            </a>
            <a href="#" className="block hover:text-pink-500">
              Projects
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Company
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-pink-500">
              About
            </a>
            <a href="#" className="block hover:text-pink-500">
              Contact
            </a>
            <a href="#" className="block hover:text-pink-500">
              Careers
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Legal
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-pink-500">
              Privacy Policy
            </a>
            <a href="#" className="block hover:text-pink-500">
              Terms of Service
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer