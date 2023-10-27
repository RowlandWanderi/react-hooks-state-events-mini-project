import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  function handleDelete(text) {
    onTaskDelete(text);
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            text={task.text}
            category={task.category}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;