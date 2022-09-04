import Form from "./components/Form";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useState, useEffect } from "react";


function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    
    const getTasksLocalStorage = () => {
      const tasksLocalStorage = JSON.parse(localStorage.getItem('tasks')) ?? [];
      setTasks(tasksLocalStorage);
    };

    getTasksLocalStorage();

  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify( tasks ))
  }, [tasks]);

  const deleteTask = (id) => {
    const updateTask = tasks.filter( task => task.id !== id);
    setTasks(updateTask)
  }
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
        deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
