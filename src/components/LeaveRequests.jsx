import { useLeaves } from "../contexts/LeaveContext";

export default function LeaveRequests() {
  const { leaves, updateLeaveStatus } = useLeaves();

  const pendingLeaves = leaves.filter((l) => l.status === "pending");

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h3 className="text-xl font-bold text-yellow-300 mb-4">Pending Leave Requests</h3>
      {pendingLeaves.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-900 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Employee</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Type</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Dates</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Reason</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingLeaves.map((leave) => (
                <tr key={leave.id} className="border-t border-gray-700">
                  <td className="px-4 py-2">{leave.employee}</td>
                  <td className="px-4 py-2 capitalize">{leave.leaveType} {leave.isUrgent && <span className="text-red-400">(Urgent)</span>}</td>
                  <td className="px-4 py-2">{leave.startDate} to {leave.endDate}</td>
                  <td className="px-4 py-2 text-gray-400">{leave.reason}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => updateLeaveStatus(leave.id, "approved")}
                      className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-xs font-semibold transition-all"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateLeaveStatus(leave.id, "rejected")}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-xs font-semibold transition-all"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400">No pending leave requests.</p>
      )}
    </div>
  );
}
