
import { Tasks } from './Tasks';

export const TaskList = () => {
  return (
    <div className="md:w-full lg:w-1/2 mx-5 mb-10 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center mb-10">Lista de tareas</h2>
      <Tasks /> 
      <Tasks /> 
      <Tasks /> 
    </div>
  );
};
