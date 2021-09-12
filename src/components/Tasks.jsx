import React from "react";
import Task from "./Task"

function Tasks({tasks, onTglStatus}) {
    return (
        <div className="row">
        {tasks.map((task) => (
          <Task task = {task} key={task.id} onTglStatus={onTglStatus}></Task>
        ))}
        <div className="col-12"></div>
      </div>
    );
  }
  
  export default Tasks;
  