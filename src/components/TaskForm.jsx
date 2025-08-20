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
    addTask(form);   // status will be "new"
    setForm({ title: "", date: "", assign: "", category: "", desc: "" });
  };

  return (
    <div className="bg-[#111] border border-gray-700 rounded p-6 mb-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Task Title"
          className="p-2 rounded bg-transparent border"
        />
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="dd/mm/yyyy"
          className="p-2 rounded bg-transparent border"
        />
        <input
          name="assign"
          value={form.assign}
          onChange={handleChange}
          placeholder="Assign to (employee name)"
          className="p-2 rounded bg-transparent border col-span-2"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category (design, dev, etc)"
          className="p-2 rounded bg-transparent border col-span-2"
        />
        <textarea
          name="desc"
          value={form.desc}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 rounded bg-transparent border col-span-2 min-h-[100px]"
        />
        <button type="submit" className="mt-2 bg-green-600 px-4 py-2 rounded col-span-2">
          Create Task
        </button>
      </form>
    </div>
  );
}
