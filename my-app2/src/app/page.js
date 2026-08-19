

"use client";
import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: value, completed: false }]);
    setValue("");
  };

  const handleDelete = (idToDelete) => {
    setTasks(tasks.filter(task => task.id !== idToDelete));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-md flex flex-col gap-7 border p-8 rounded-[10px] bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-center">Todo List</h1>

        <div className="flex gap-4">
          <input
            value={value}
            onChange={handleChange}
            placeholder="...add a task"
            className="w-full px-4 py-2 border rounded-[10px] outline-none"
          />
          <button
            onClick={handleClick}
            className="px-4 py-2 rounded-[10px] bg-blue-400 text-white hover:bg-blue-500"
          >
            add
          </button>
        </div>

        <div className="flex gap-5 justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`border px-3 py-1 rounded-[10px] transition-colors ${filter === "all" ? "bg-blue-500 text-white border-blue-500" : "hover:bg-gray-50 bg-white"
              }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`border px-3 py-1 rounded-[10px] transition-colors ${filter === "active" ? "bg-blue-500 text-white border-blue-500" : "hover:bg-gray-50 bg-white"
              }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`border px-3 py-1 rounded-[10px] transition-colors ${filter === "completed" ? "bg-blue-500 text-white border-blue-500" : "hover:bg-gray-50 bg-white"
              }`}
          >
            Complete
          </button>
        </div>

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {filteredTasks.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border rounded-2xl p-3 bg-gray-50 gap-3 shadow-sm"
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTask(item.id)}
                  className="w-5 h-5 cursor-pointer"
                />
                <span
                  className={`break-all ${item.completed ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                >
                  {item.text}
                </span>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-md hover:bg-red-200 shrink-0"
              >
                Delete
              </button>
            </div>
          ))}

          {filteredTasks.length === 0 && (
            <p className="text-center text-gray-400 text-sm py-4">No tasks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
