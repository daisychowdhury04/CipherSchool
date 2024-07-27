import TodoScreen from "./screens/TodoScreen";
import "./App.css"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import AddItem from "./screens/AddItem";

const router=createBrowserRouter([
  {
    path:"/",
    element:<TodoScreen/>
  },
  {
    path:"/addtask",
    element:<AddItem/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
