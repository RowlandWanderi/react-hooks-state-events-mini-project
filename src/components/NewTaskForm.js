import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [textTask, setTextTask] = useState("");
  const [category, setCategory] = useState("All");
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: textTask,
      category: category,
    };
    onTaskFormSubmit(newTask);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={textTask}
          onChange={e => setTextTask(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={e => setCategory(e.target.value)}>
          {categories.map(category => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;