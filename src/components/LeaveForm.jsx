import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLeaves } from "../contexts/LeaveContext";

export default function LeaveForm() {
  const { user } = useAuth();
  const { applyForLeave } = useLeaves();

  const [leaveType, setLeaveType] = useState("casual");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!startDate || !endDate || !reason) {
      setMessage("All fields are required.");
      return;
    }

    const leaveRequest = {
      id: Date.now(),
      employee: user.name,
      email: user.email,
      leaveType,
      startDate,
      endDate,
      reason,
      isUrgent,
      status: "pending", // pending, approved, rejected
    };

    applyForLeave(leaveRequest);
    setMessage("Leave request submitted successfully!");

    // Clear form
    setLeaveType("casual");
    setStartDate("");
    setEndDate("");
    setReason("");
    setIsUrgent(false);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-bold text-green-400 mb-4">Apply for Leave</h3>
      {message && (
        <div className="bg-green-600/90 text-white text-sm p-3 rounded-lg border border-green-400 mb-4">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        >
          <option value="casual" className="bg-black">Casual Leave</option>
          <option value="sick" className="bg-black">Sick Leave</option>
          <option value="earned" className="bg-black">Earned Leave</option>
        </select>
        <div className="flex gap-4">
          <input
            type="date"
            className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="w-full px-4 py-3 rounded-full border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Reason for leave"
          className="w-full px-4 py-3 rounded-lg border border-green-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="urgent"
            checked={isUrgent}
            onChange={(e) => setIsUrgent(e.target.checked)}
            className="h-4 w-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
          />
          <label htmlFor="urgent" className="text-sm font-medium">Urgent</label>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 py-3 rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
