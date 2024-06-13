import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const [taskList, setTaskList] = useState(tasks)
  console.log(taskList)

  function handleTaskDelete(taskText) {
    const updatedTasks = taskList.filter((task) => task.text !== taskText)
    setTaskList(updatedTasks)
  }

  const listOfTasks = taskList.map((task) => {
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
