import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Details from "./components/Details";
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
          {/* <em><h3>Choose the label for your task list!</h3></em>
          {tasks.map((task) => (
            <h2><Labels key={task.id} task={task} /></h2>
          ))} */}
          
          
          <Link to="/tasks/Personal"><h2>Personal</h2></Link>
          <Link to="/tasks/Work"><h2>Work</h2></Link>
          <Link to="/tasks/Health"><h2>Health</h2></Link>
          <Link to="/tasks/Project"><h2>Project</h2></Link>
          <Link to="/tasks/Errands"><h2>Errands</h2></Link>
          
          
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
        <Details tasks={tasks} setToggleFetch={setToggleFetch}/>
        {/* <DetailsForm /> */}
      </Route>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
