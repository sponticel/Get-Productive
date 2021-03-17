import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import './App.css';

function App() {
  const [label, setLabel] = useState([]);
  useEffect(() => {
    const getIt = async () => {
      const resp = await axios.get(baseURL, config);
      setLabel(resp.data.records)
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
          <h3>Choose the label for you task!</h3>
          {label.map((label) => (
            <p>{label.fields.label}</p>
          ))}
          </div>
      </Route>
      <Route path ="/new">
      <h2>Add a new Task</h2>
      </Route>
      <Route path="/edit/:id">
        <h2>View or edit Task details!</h2>
      </Route>
    </div>
  );
}

export default App;
