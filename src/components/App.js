import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  function handleCategories(category) {
    if (category === "All") {
      return setFilteredTasks(TASKS);
    }
    const newTasks = TASKS.filter(task => task.category === category);

    setFilteredTasks(newTasks);
  }
  function handleTaskDelete(text) {
    const newTasksList = filteredTasks.filter(task => {
      if (task.text !== text) {
        return true;
      }
    });
    console.log(newTasksList);

    setFilteredTasks(newTasksList);
  }
  function handleTaskFormSubmit(newtask) {
    setFilteredTasks([...filteredTasks, newtask]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        tasks={TASKS}
        onHandleCategories={handleCategories}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
