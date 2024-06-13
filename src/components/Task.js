import React, {useState} from "react";


function Task({text, category}) {
  const [task, setTask] = useState("")
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
