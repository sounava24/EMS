import { createContext, useContext, useEffect, useState } from "react";

/*
 Task shape:
 {
   title: string,
   date: string,
   assign: string,    // employee name
   category: string,
   desc: string,
   status: "new" | "accepted" | "completed" | "failed"
 }
*/

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, status: "new" }]);
  };

  const updateTaskStatus = (index, status) => {
    setTasks((prev) =>
      prev.map((t, i) => (i === index ? { ...t, status } : t))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
