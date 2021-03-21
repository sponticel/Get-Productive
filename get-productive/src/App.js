import { useEffect, useState } from "react";
import { useParams, Route, Link } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import Navbar from "./components/Navbar";
import Labels from "./components/Labels";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Details from "./components/Details";
import DetailsForm from "./components/DetailsForm";
import Footer from "./components/Footer";
import './App.css';

function nonDupLabel() {
  
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const params = useParams();
  console.log("")
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
          
          {/* <Link to={`/tasks/:label`}>
            <h2>Personal</h2>
            <h2>Work</h2>
            <h2>Health</h2>
            <h2>Project</h2>
            <h2>Errands</h2>
          </Link> */}
        </div>
      </Route>
      
      <Route path="/tasks/:label">
        
        <div clasName="tasklist">
          <TaskList tasks={tasks} setToggleFetch={setToggleFetch}/>
          <TaskForm setToggleFetch={setToggleFetch}/>
        </div> 
      </Route>
      {/* <h2>{`Details for ${tasks}`}</h2> */}
      <Route path="/details/:id">
        <Details tasks={tasks} />
        <DetailsForm />
      </Route>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
