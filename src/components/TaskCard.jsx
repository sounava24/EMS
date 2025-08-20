export default function TaskCard({ task, onAccept, onComplete, onFail }) {
  return (
    <div className="bg-[#111] p-4 rounded border border-gray-700">
      <div className="flex items-center justify-between">
        <span className="text-sm px-2 py-1 rounded bg-gray-800 capitalize">
          {task.category || "General"}
        </span>
        <span className="text-xs text-gray-400">{task.date}</span>
      </div>

      <p className="text-lg font-bold mt-2">{task.title}</p>
      <p className="text-sm text-gray-400">{task.desc}</p>

      <div className="flex gap-2 mt-4">
        <button onClick={onAccept} className="bg-yellow-500 px-3 py-1 rounded">
          Accept
        </button>
        <button onClick={onComplete} className="bg-green-600 px-3 py-1 rounded">
          Complete
        </button>
        <button onClick={onFail} className="bg-red-600 px-3 py-1 rounded">
          Fail
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-400">
        Status: <span className="uppercase">{task.status}</span>
      </div>
    </div>
  );
}
