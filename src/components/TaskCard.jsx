import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500">{task.description}</p>
      <button
        className="bg-red-700 rounded-md p-2 mt-2 hover:bg-red-500"
        onClick={() => deleteTask(task.id)}
      >
        Delete task
      </button>
    </div>
  );
}

export default TaskCard;
