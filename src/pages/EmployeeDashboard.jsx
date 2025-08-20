import { useAuth } from "../contexts/AuthContext";
import { useTasks } from "../contexts/TaskContext";
import TaskCard from "../components/TaskCard";

export default function EmployeeDashboard() {
  const { user, logout } = useAuth();
  const { tasks, updateTaskStatus } = useTasks();

  // Only show tasks assigned to this employee
  const myTasks = tasks.filter(
    (t) =>
      t.assign?.trim().toLowerCase() === (user?.name || "").trim().toLowerCase()
  );

  const newTasks = myTasks.filter((t) => t.status === "new");
  const accepted = myTasks.filter((t) => t.status === "accepted");
  const completed = myTasks.filter((t) => t.status === "completed");
  const failed = myTasks.filter((t) => t.status === "failed");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Hello <span className="text-yellow-400">{user?.name} 👋</span>
        </h1>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg shadow-lg font-medium transition-all duration-200"
        >
          Log Out
        </button>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-600 p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform">
          <p className="text-4xl font-bold">{newTasks.length}</p>
          <p className="mt-2 text-lg font-medium">New Task</p>
        </div>
        <div className="bg-yellow-500 p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform">
          <p className="text-4xl font-bold">{accepted.length}</p>
          <p className="mt-2 text-lg font-medium">Accepted Task</p>
        </div>
        <div className="bg-green-600 p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform">
          <p className="text-4xl font-bold">{completed.length}</p>
          <p className="mt-2 text-lg font-medium">Completed Task</p>
        </div>
        <div className="bg-red-600 p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform">
          <p className="text-4xl font-bold">{failed.length}</p>
          <p className="mt-2 text-lg font-medium">Failed Task</p>
        </div>
      </div>

      {/* Task List */}
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
        Your Tasks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myTasks.map((task, i) => (
          <TaskCard
            key={i}
            task={task}
            index={i}
            onAccept={() => updateTaskStatus(tasks.indexOf(task), "accepted")}
            onComplete={() => updateTaskStatus(tasks.indexOf(task), "completed")}
            onFail={() => updateTaskStatus(tasks.indexOf(task), "failed")}
          />
        ))}
        {myTasks.length === 0 && (
          <p className="text-gray-400 col-span-full text-center text-lg">
            No tasks assigned to you yet.
          </p>
        )}
      </div>
    </div>
  );
}
