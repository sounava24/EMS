export default function EmployeeTable({ tasks }) {
  // Unique employee names from tasks
  const employees = [...new Set(tasks.map((t) => (t.assign || "").trim()))].filter(Boolean);

  const count = (list, name, status) =>
    list.filter((t) => t.assign?.trim() === name && t.status === status).length;

  return (
    <table className="w-full text-center border border-gray-700">
      <thead>
        <tr className="bg-gray-900">
          <th className="p-2">Employee Name</th>
          <th className="p-2">New Task</th>
          <th className="p-2">Accepted Task</th>
          <th className="p-2">Completed</th>
          <th className="p-2">Failed</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 && (
          <tr><td className="p-3 text-gray-400" colSpan={5}>No tasks yet</td></tr>
        )}
        {employees.map((emp, i) => (
          <tr key={i} className="border-t border-gray-800">
            <td className="p-2">{emp}</td>
            <td className="p-2">{count(tasks, emp, "new")}</td>
            <td className="p-2">{count(tasks, emp, "accepted")}</td>
            <td className="p-2">{count(tasks, emp, "completed")}</td>
            <td className="p-2">{count(tasks, emp, "failed")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
