import Form from "./components/Form";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="md:mx-36 my-1 md:flex">
        <Form />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
