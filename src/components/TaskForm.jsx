import { useState } from "react";
import { useTasks } from "../contexts/TaskContext";

/* Serial-wise fields: Task Title, Date, Assign To, Category, Description, Create Task */
export default function TaskForm() {
  const { addTask } = useTasks();
  const [form, setForm] = useState({
    title: "",
    date: "",
    assign: "",
    category: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.assign) return alert("Task title & Assign to required");
    addTask(form); // status will be "new"
    setForm({ title: "", date: "", assign: "", category: "", desc: "" });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 mb-8">
      <h2 className="text-xl font-bold mb-6 text-white tracking-wide">
        Create a New Task
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Task Title"
          className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
        />
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="dd/mm/yyyy"
          className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
        />
        <input
          name="assign"
          value={form.assign}
          onChange={handleChange}
          placeholder="Assign to (employee name)"
          className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 col-span-2 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category (design, dev, etc)"
          className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 col-span-2 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
        />
        <textarea
          name="desc"
          value={form.desc}
          onChange={handleChange}
          placeholder="Description"
          className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 col-span-2 min-h-[120px] resize-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
        />
        <button
          type="submit"
          className="mt-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl col-span-2 shadow-lg hover:shadow-green-400/50 transform hover:scale-101 transition-all duration-200"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}
