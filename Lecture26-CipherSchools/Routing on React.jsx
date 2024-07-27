import ToDoScreen from "./screens/ToDoScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/"
    element:<ToDoScreen />;
  },
  {
    path:"/add-task",
    element:<AddTask />,
  },  
])
const App = () =>{
  return <RouterProvider router={router} />;
};
export default App;

import {useState} from "react";
import AddTask from"./comopnents/AddTask";
import ToDoScreen from "./screens/ToDoScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter{[
      {
        path:"/",
        element: <ToDoScreen />,
      },
      {
        path: "/add-task",
        element:<Add Task>,
      },
]};

const App = () =>{
    useState([])
    const[tasks,setTasks] = useState([])
    return <RouterProvider router={router} />;
}
