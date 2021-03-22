import { useEffect, useState } from "react";
import { Route} from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Details from "./components/Details";
import Labels from "./components/Labels";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getIt = async () => {
      const resp = await axios.get(baseURL, config);
      setTasks(resp.data.records)
    }
    getIt()
  }, [toggleFetch]);
  
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
    
      <Route exact path="/">
        <h2 id="welcome">Welcome lets GET-PRODUCTIVE!</h2>
        <div className="labels-container">
          {/* Code for mapping through labels but when adding new task it repeats labels on the Home page */}
          {/* <em><h3>Choose the label for your task list!</h3></em>
          {tasks.map((task) => (
            <h2><Labels key={task.id} task={task} /></h2>
          ))} */}
          <Labels /> 
        </div>
      </Route>
      
      <Route path="/tasks/:label">
        
        <div clasName="tasklist">
          <TaskList tasks={tasks} setToggleFetch={setToggleFetch} />
          <input type="checkbox" id="completed" name="completed" />
          <label for="completed">Completed</label>
          <TaskForm setToggleFetch={setToggleFetch}/>
        </div> 
      </Route>
  
      <Route path="/details/:id">
        <h3 className="detailsFont">
        <Details tasks={tasks} setToggleFetch={setToggleFetch}/>
        </h3>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
