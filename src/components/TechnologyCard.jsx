function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="mt-auto flex items-center justify-between gap-2 pt-4 text-xs">

        {/* Category */}
        <span className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1.5 text-gray-600">
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="whitespace-nowrap text-gray-500">
          {technology.difficulty}
        </span>

        {/* Rating */}
        <span className="flex items-center gap-1 whitespace-nowrap font-semibold text-gray-700">
          <span className="text-yellow-400">★</span>
          {technology.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-md px-4 py-2.5 text-sm font-semibold transition ${
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