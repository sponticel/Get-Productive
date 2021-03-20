import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import './App.css';
import LabelForm from "./components/LabelForm";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Details from "./components/Details";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getIt = async () => {
      const resp = await axios.get(baseURL, config);
      setTasks(resp.data.records)
      console.log(resp.data.records)
    }
    getIt()
  },[])
  // console.log(process.env)
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h2>Welcome lets GET-PRODUCTIVE!</h2>
        <div
          className="label-container">
          <h3>Choose the label for your task list!</h3>
          {tasks.map((task) => (
            <li> <LabelForm key={task.id} task={task} /></li>
          ))}
          </div>
      </Route>
      <Route path="/tasks/:label">
        <TaskList tasks={tasks}/>
        
      </Route>
      <Route path="/details/:id">
        <Details tasks={tasks}/>
      </Route>
      
    </div>
  );
}

export default App;
