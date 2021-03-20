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
  const [toggleFetch, setToggleFetch] = useState(false);

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
        <div className="labels-container">
          <em><h3>Choose the label for your task list!</h3></em>
          {tasks.map((task) => (
            <h2><Labels key={task.id} task={task} /></h2>
          ))}
        </div>
      </Route>
      
      <Route path="/tasks/:label">
        <div clasName="tasklist">
          <TaskList tasks={tasks}/>
          <TaskForm setToggleFetch={setToggleFetch} />
         </div> 
      </Route>

      <Route path="/details/:id">
        <Details tasks={tasks} />
        <DetailsForm setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
