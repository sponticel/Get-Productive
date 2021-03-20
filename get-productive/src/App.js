import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import Navbar from "./components/Navbar";
import Labels from "./components/Labels";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Details from "./components/Details";
import DetailsForm from "./components/DetailsForm";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getIt = async () => {
      const resp = await axios.get(baseURL, config);
      setTasks(resp.data.records)
      // console.log(resp.data.records)
    }
    getIt()
  }, [toggleFetch]);
  // console.log(process.env)
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
    
      <Route exact path="/">
        <h2>Welcome lets GET-PRODUCTIVE!</h2>
        <div className="label-container">
          <h3>Choose the label for your task list!</h3>
          {tasks.map((task) => (
            <li> <Labels key={task.id} task={task} /></li>
          ))}
        </div>
      </Route>
      
      <Route path="/tasks/:label">
        <li><TaskList tasks={tasks}/></li>
        <TaskForm setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/details/:id">
        <li><Details tasks={tasks} /></li>
        <DetailsForm />
      </Route>
    </div>
  );
}

export default App;
