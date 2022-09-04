import Form from "./components/Form";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useState } from "react";


function App() {

  const [tasks, setTasks] = useState([]);


  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="md:mx-36 my-1 md:flex">
        <Form 
        tasks={tasks}
        setTasks={setTasks}
        />
        <TaskList 
        tasks={tasks}
        />
    
      </div>
    </div>
  );
}

export default App;
