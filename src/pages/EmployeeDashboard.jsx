import { useAuth } from "../contexts/AuthContext";
import { useTasks } from "../contexts/TaskContext";
import TaskCard from "../components/TaskCard";

export default function EmployeeDashboard() {
  const { user, logout } = useAuth();
  const { tasks, updateTaskStatus } = useTasks();

  // Only show tasks assigned to this employee
  const myTasks = tasks.filter((t) => t.assign?.trim().toLowerCase() === (user?.name || "").trim().toLowerCase());

  const newTasks = myTasks.filter((t) => t.status === "new");
  const accepted = myTasks.filter((t) => t.status === "accepted");
  const completed = myTasks.filter((t) => t.status === "completed");
  const failed = myTasks.filter((t) => t.status === "failed");

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Hello <span className="text-yellow-300">{user?.name} 👋</span>
        </h1>
        <button onClick={logout} className="bg-red-600 px-4 py-2 rounded">
          Log Out
        </button>
      </div>

      {/* Status Summary like your screenshot */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-600 p-4 rounded text-center">
          {newTasks.length}<br/>New Task
        </div>
        <div className="bg-yellow-500 p-4 rounded text-center">
          {accepted.length}<br/>Accepted Task
        </div>
        <div className="bg-green-600 p-4 rounded text-center">
          {completed.length}<br/>Completed Task
        </div>
        <div className="bg-red-600 p-4 rounded text-center">
          {failed.length}<br/>Failed Task
        </div>
      </div>

      {/* Task Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        {myTasks.length === 0 && <p className="text-gray-400">No tasks assigned to you yet.</p>}
      </div>
    </div>
  );
}

