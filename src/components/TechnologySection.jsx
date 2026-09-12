import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TechnologyCard from "./TechnologyCard"

function TechnologySection() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error)
        setLoading(false)
      })
  }, [])

  // Add technology
  const handleAdd = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    setStack([...stack, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  // Remove one technology
  const handleRemove = (id) => {
    const removedTechnology = stack.find((item) => item.id === id)

    setStack(stack.filter((item) => item.id !== id))

    toast.info(`${removedTechnology.name} removed from your stack.`)
  }

  // Remove all
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return
    }

    setStack([])
    toast.info("All technologies removed from your stack.")
  }

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-lg font-medium text-gray-500">
          Loading technologies...
        </p>
      </section>
    )
  }

  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore the{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Pick the technologies you would build your development stack with.
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid gap-6 lg:grid-cols-4">

            {/* Technology Cards */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={handleAdd}
                    isAdded={stack.some(
                      (item) => item.id === technology.id
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Your Stack */}
            <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

              {/* Stack Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Your Stack
                  </h3>

                  <p className="text-sm text-gray-500">
                    {stack.length}{" "}
                    {stack.length === 1
                      ? "Technology Selected"
                      : "Technologies Selected"}
                  </p>
                </div>
              </div>

              {/* Empty State */}
              {stack.length === 0 ? (
                <div className="py-10 text-center">
                  <p className="text-sm font-medium text-gray-500">
                    No Technologies added
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    Your stack is empty.
                    <br />
                    Add technologies to get started.
                  </p>
                </div>
              ) : (
                <>
                  {/* Stack Items */}
                  <div className="mt-4 space-y-3">
                    {stack.map((technology) => (
                      <div
                        key={technology.id}
                        className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
                      >
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-8 w-8 object-contain"
                        />

                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-semibold text-gray-900">
                            {technology.name}
                          </h4>

                          <p className="text-xs text-gray-500">
                            {technology.category}
                          </p>
                        </div>

                        <button
                          onClick={() => handleRemove(technology.id)}
                          className="text-sm font-bold text-gray-400 hover:text-red-500"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Remove All */}
                  <button
                    onClick={handleRemoveAll}
                    className="mt-5 w-full rounded-md border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                  >
                    Remove All
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default TechnologySection