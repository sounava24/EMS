import { useAuth } from "../contexts/AuthContext";
import { useTasks } from "../contexts/TaskContext";
import TaskCard from "../components/TaskCard";
import Header from "../components/Header";
export default function EmployeeDashboard() {
  const { user, logout } = useAuth();
  const { tasks, updateTaskStatus } = useTasks();

  // All tasks ever assigned to this employee
  const myTasks = tasks.filter(
    (t) =>
      t.assign?.trim().toLowerCase() === (user?.name || "").trim().toLowerCase()
  );

  // Separate tasks by status
  const newTasks = myTasks.filter((t) => t.status === "new");
  const accepted = myTasks.filter((t) => t.status === "accepted");
  const completed = myTasks.filter((t) => t.status === "completed");
  const failed = myTasks.filter((t) => t.status === "failed");

  // Only show tasks that are either new or accepted (active)
  const activeTasks = myTasks.filter(
    (t) => t.status === "new" || t.status === "accepted"
  );

  return (
    <>
    {/* Fixed header on top */}
    <div className="fixed top-0 left-0 w-full z-50 text-amber-50">
        <Header />
      </div>
    <div className="relative min-h-screen bg-black text-white p-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Hello <span className="text-green-400">{user?.name} 👋</span>
        </h1>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full shadow-lg font-semibold transition-all duration-300"
          >
          Log Out
        </button>
      </div>

      {/* Status Summary */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-600/90 backdrop-blur-md p-6 rounded-2xl text-center shadow-xl border border-blue-400 hover:scale-105 transition-transform">
          <p className="text-4xl font-bold">{newTasks.length}</p>
          <p className="mt-2 text-lg font-medium">New Task</p>
        </div>
        <div className="bg-yellow-500/90 backdrop-blur-md p-6 rounded-2xl text-center shadow-xl border border-yellow-300 hover:scale-105 transition-transform">
          <p className="text-4xl font-bold">{accepted.length}</p>
          <p className="mt-2 text-lg font-medium">Accepted Task</p>
        </div>
        <div className="bg-green-600/90 backdrop-blur-md p-6 rounded-2xl text-center shadow-xl border border-green-400 hover:scale-105 transition-transform">
          <p className="text-4xl font-bold">{completed.length}</p>
          <p className="mt-2 text-lg font-medium">Completed Task</p>
        </div>
        <div className="bg-red-600/90 backdrop-blur-md p-6 rounded-2xl text-center shadow-xl border border-red-400 hover:scale-105 transition-transform">
          <p className="text-4xl font-bold">{failed.length}</p>
          <p className="mt-2 text-lg font-medium">Failed Task</p>
        </div>
      </div>

      {/* Track total assigned */}
      <div className="relative z-10 mb-6 text-gray-400 text-sm">
        Total tasks ever assigned: <span className="text-white font-semibold">{myTasks.length}</span>
      </div>

      {/* Active Tasks */}
      <h2 className="relative z-10 text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
        Your Active Tasks
      </h2>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {activeTasks.length > 0 ? (
          activeTasks.map((task, i) => (
            <TaskCard
            key={i}
            task={task}
            onAccept={() => updateTaskStatus(tasks.indexOf(task), "accepted")}
              onComplete={() => updateTaskStatus(tasks.indexOf(task), "completed")}
              onFail={() => updateTaskStatus(tasks.indexOf(task), "failed")}
            />
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center text-lg">
            No active tasks right now.
          </p>
        )}
      </div>

      {/* Permanent History Section */}
      <h2 className="relative z-10 text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
        Task History
      </h2>

      {/* Completed Tasks */}
      <div className="relative z-10 mb-6">
        <h3 className="text-xl font-semibold mb-3 text-green-400">Completed Tasks</h3>
        {completed.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completed.map((task, i) => (
              <TaskCard key={i} task={task} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No completed tasks yet.</p>
        )}
      </div>

      {/* Failed Tasks */}
      <div className="relative z-10 mb-6">
        <h3 className="text-xl font-semibold mb-3 text-red-400">Failed Tasks</h3>
        {failed.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {failed.map((task, i) => (
              <TaskCard key={i} task={task} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No failed tasks yet.</p>
        )}
      </div>
    </div>
        </>
  );
}
