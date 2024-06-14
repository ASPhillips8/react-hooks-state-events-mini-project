import React from "react";
import Task from "./Task";

function TaskList({tasks, setTaskList}) {

  function handleTaskDelete(taskText) {
    const updatedTasks = tasks.filter((task) => task.text !== taskText)
    setTaskList(updatedTasks)
  }

  const listOfTasks = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onHandleTaskDelete={handleTaskDelete}
      />
    )
  })

  return (
    <div className="tasks">
      {listOfTasks}
    </div>
  );
}

export default TaskList;
