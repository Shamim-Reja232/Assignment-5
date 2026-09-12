function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
          {technology.category}
        </span>

        <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-1 text-sm">
        <span className="text-yellow-500">★</span>
        <span className="font-semibold text-gray-700">
          {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-md px-4 py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  )
}

export default TechnologyCard