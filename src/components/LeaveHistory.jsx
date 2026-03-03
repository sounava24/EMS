import { useAuth } from "../contexts/AuthContext";
import { useLeaves } from "../contexts/LeaveContext";
import { useEffect, useMemo, useState } from "react";

export default function LeaveHistory() {
  const { user } = useAuth();
  const { leaves } = useLeaves();
  const [localLeaves, setLocalLeaves] = useState([]);

  // Update local state when leaves change
  useEffect(() => {
    console.log('Leaves updated in context:', leaves);
    const filtered = leaves.filter(l => l.email === user.email);
    console.log('Filtered leaves:', filtered);
    setLocalLeaves(filtered);
  }, [leaves, user.email]);

  // Debug effect to log state changes
  useEffect(() => {
    console.log('Local leaves state updated:', localLeaves);
  }, [localLeaves]);

  const getStatusClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-600 text-white";
      case "rejected":
        return "bg-red-600 text-white";
      default:
        return "bg-yellow-500 text-black";
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-green-400 mb-4">Leave History</h3>
      {localLeaves.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-900 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Type</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Dates</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Reason</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {localLeaves.map((leave) => (
                <tr key={leave.id} className="border-t border-gray-700">
                  <td className="px-4 py-2 capitalize">{leave.leaveType} {leave.isUrgent && <span className="text-red-400">(Urgent)</span>}</td>
                  <td className="px-4 py-2">{leave.startDate} to {leave.endDate}</td>
                  <td className="px-4 py-2 text-gray-400">{leave.reason}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(leave.status)}`}>
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400">You have not applied for any leaves yet.</p>
      )}
    </div>
  );
}
