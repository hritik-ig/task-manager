import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tasks from "./Tasks";
import TaskEdit from "./TaskEdit"

function App(){
    const [tasks, setTasks] = useState([
        { desc: "Learn React", id: 1, date: "2021-01-03 10:00", status: "Complete" },
        { desc: "Profit", id: 2, date: "2021-01-05 15:00", status: "Open" },
      ]);
    const [showTaskEdit, setShowTaskEdit] = useState(false);
    
    const onTglStatus = (task) => {
        console.log("completing task");
        setTasks(
          tasks.map((chkTask) => {
            chkTask.complete =
              task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
            return chkTask;
          })
        );
      };
    
    const onSaveTask = ({ desc, date }) => {
        console.log("saving tasks");
        setTasks([
          { desc: desc, date: date, id: Date.now(), complete: false },
          ...tasks,
        ]);
      };

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="col-12 text-right">
                    <button className="button outline" onClick={() => setShowTaskEdit(!showTaskEdit)}>
                        {!showTaskEdit && "New"}
                        {showTaskEdit && "➖"}
                    </button>
                </div>
            {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
            <Tasks tasks={tasks} onTglStatus={onTglStatus} />
            </div>
            <Footer></Footer>
        </div>
        
    )
}

export default App;