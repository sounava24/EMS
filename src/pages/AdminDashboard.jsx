import { useAuth } from "../contexts/AuthContext";
import { useTasks } from "../contexts/TaskContext";
import TaskForm from "../components/TaskForm";
import EmployeeTable from "../components/EmployeeTable";
import Header from "../components/Header";
import LeaveRequests from "../components/LeaveRequests";
export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const { tasks } = useTasks();

  return (
    <>
    <Header />
    <div className="min-h-screen bg-black text-white p-6 pt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Hello <span className="text-yellow-300">{user?.name} 👋</span>
        </h1>
      </div>

      {/* Task Creation Form (serial-wise fields exactly like your screenshot) */}
      <TaskForm />

      {/* Employee stats table auto-updates by assigned name */}
      <EmployeeTable tasks={tasks} />

      {/* Leave Requests Table */}
      <LeaveRequests />
    </div>
    </>
  );
}
