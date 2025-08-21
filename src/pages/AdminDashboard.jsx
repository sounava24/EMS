import { useAuth } from "../contexts/AuthContext";
import { useTasks } from "../contexts/TaskContext";
import TaskForm from "../components/TaskForm";
import EmployeeTable from "../components/EmployeeTable";
import Header from "../components/Header";
export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const { tasks } = useTasks();

  return (
    <>
    {/* Fixed header on top */}
    <div className="fixed top-0 left-0 w-full z-50 text-amber-50">
        <Header />
      </div>
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Hello <span className="text-yellow-300">{user?.name} 👋</span>
        </h1>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg shadow-lg font-medium transition-all duration-200"
        >
          Log Out
        </button>
      </div>

      {/* Task Creation Form (serial-wise fields exactly like your screenshot) */}
      <TaskForm />

      {/* Employee stats table auto-updates by assigned name */}
      <EmployeeTable tasks={tasks} />
    </div>
    </>
  );
}
