export default function TaskCard({ task, onAccept, onComplete, onFail }) {
  // Utility to style status badge
  const statusColors = {
    new: "bg-blue-600",
    accepted: "bg-yellow-500",
    completed: "bg-green-600",
    failed: "bg-red-600",
  };

  const isAccepted = task.status === "accepted";
  const isNew = task.status === "new";
  const isActionable = isNew || isAccepted; // Only show buttons if actionable

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-green-400/20 hover:scale-[1.02] transition-all duration-200">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-700 text-gray-200 capitalize">
          {task.category || "General"}
        </span>
        <span className="text-xs text-gray-400">{task.date}</span>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold text-white">{task.title}</h3>
      <p className="text-sm text-gray-400 mt-1">
        {task.desc || "No description provided."}
      </p>

      {/* Special Note if Accepted */}
      {isAccepted && (
        <p className="mt-3 text-yellow-400 text-sm font-medium">
          Currently working on this task...
        </p>
      )}

      {/* Action Buttons */}
      {isActionable && (
        <div className="flex flex-wrap gap-2 mt-5">
          {isNew && (
            <button
              onClick={onAccept}
              className="px-4 py-2 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-medium transition-all shadow-md hover:shadow-yellow-400/40"
            >
              Accept
            </button>
          )}
          {isAccepted && (
            <>
              <button
                onClick={onComplete}
                className="px-4 py-2 rounded-full bg-green-600 hover:bg-green-500 text-white font-medium transition-all shadow-md hover:shadow-green-400/40"
              >
                Complete
              </button>
              <button
                onClick={onFail}
                className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white font-medium transition-all shadow-md hover:shadow-red-400/40"
              >
                Fail
              </button>
            </>
          )}
        </div>
      )}

      {/* Status Badge */}
      <div className="mt-5 flex items-center">
        <span className="text-xs text-gray-300 mr-2">Status:</span>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full uppercase ${
            statusColors[task.status] || "bg-gray-600"
          }`}
        >
          {task.status}
        </span>
      </div>
    </div>
  );
}
