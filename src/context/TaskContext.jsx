import React, { createContext, useEffect, useState } from "react";
import { TASKS } from "./../data/tasks";
export const TaskContext = createContext();

export default function TaskContextPropvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(TASKS);
  }, []);

  function createTask(task) {
    setTasks([...tasks, { ...task, id: tasks.length }]);
  }

  function deleteTask(idTask) {
    setTasks(tasks.filter((task) => task.id != idTask));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
