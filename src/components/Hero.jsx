import heroImage from "../assets/banner-stack.png";
function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">

        {/* Left Content */}
        <div>
        

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-gray-500">
            Explore frontend, backend, database, and modern development tools.
            Compare the best technologies and build the perfect stack for your
            next project.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-pink-400 hover:text-pink-500">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
     <div className="flex justify-center md:justify-end">
      <img
          src={heroImage}
          alt="Development Stack"
          className="w-full max-w-md"
       />
     </div>

      </div>
    </section>
  )
}

export default Hero