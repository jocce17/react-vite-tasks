import React, { useContext, useState } from "react";
import { TaskContext } from "./../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description };
    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-lg mx-auto">
      <form
        className="bg-slate-600 py-5 mb-4 rounded-tl-full rounded-br-full flex justify-center items-center flex-col "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="type your title task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-min mb-2"
        />
        <textarea
          placeholder="Type your description Task here"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-min mb-2"
        ></textarea>
        <button className="bg-cyan-500 text-white p-3 w-2/6 rounded-full">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
