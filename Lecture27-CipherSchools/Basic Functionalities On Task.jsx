 import {createContext, useState} from "react";
import {v4: asrandomUUID} from "uuid";

const TaskProvider  = ({children}) =>{
  const [TaskList, setTaskList] = useState([]);
  const addNewTask = (task) =>{
    setTaskList([...taskList, {..task, createdDate: newDate(), taskId: randomUUID }]),
  };

const deleteTask = (TaskId) => {
 setTaskList(taskList.filter((task) => task.taskId != taskId));
};

const editTask = (task)  =>{
  let tempTaskList = [...taskList];
  for (let t of tempTaskList){
    if (t.taskId === task.taskId){
     TASK_EDITABLE_FIELD_LIST.forEach((field) => (t[field] = task[field]));
    }
  }
}
return (
  <TaskContext.Provider value={{taskList, addNewTask, deleteTask }}>
  {children}
  </TaskContext.Provider>
);
};

export {TaskProvider};
export default TaskContext;

const[isEditing, setISEditing] = useState(false);
