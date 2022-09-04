import Form from "./components/Form";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useState } from "react";


function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
 /*  console.log(task); */


  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="md:mx-36 my-1 md:flex">
        <Form 
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        setTask={setTask}
        />
        <TaskList 
        tasks={tasks}
        setTask={setTask}
        />
      </div>
    </div>
  );
}

export default App;
