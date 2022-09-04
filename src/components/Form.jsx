import { useState, useEffect } from "react";
/* import AlertError from "./AlertError"; */

const Form = ({ tasks, setTasks, task, setTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(task).length > 0) {
      setTitle(task.title);
      setDate(task.date);
      setDescription(task.description);
    }
  }, [task]);

  const generarId = () => {
    const id = Math.random().toString(20).substr(2);

    return id;
  };
  // Validacion formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([title, date, description].includes("")) {
      setError(true);
      errorModal();
      return;
    }
    setError(false);

    /* Limpiar formulario */
    setTitle("");
    setDate("");
    setDescription("");

    okModal();

    setTasks(setTasks);

    //Object task

    const objectTasks = {
      title,
      date,
      description,
    };

    if (task.id) {
      /* Editando la tarea */
      objectTasks.id = task.id;
      const updatedTask = tasks.map((taskState) =>
        taskState.id === task.id ? objectTasks : taskState
      );
      setTasks(updatedTask);
      setTask({});
    } else {
      /* Nuevo tarea */
      objectTasks.id = generarId();
      setTasks([...tasks, objectTasks]);
    }
  };

  const okModal = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Ejercicio completado 😎",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const errorModal = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  return (
    <>
      <div className="md:w-full h-full lg:w-1/2 mx-5 relative">
        <h2 className="font-black text-3xl text-center mb-10">
          Creacion de tareas
        </h2>
        {/* Inicia el Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-7 px-5 mb-1 h-full relative"
        >
          <div className="mb-5">
            <label
              htmlFor="user"
              className="block text-gray-700 uppercase font-bold"
            >
              Titulo
            </label>
            <input
              id="user"
              type="text"
              placeholder="Nombres"
              className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="fecha"
              className="block text-gray-700 uppercase font-bold"
            >
              FECHA
            </label>
            <input
              id="date"
              type="date"
              className="text-gray-700 border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="fecha"
              className="block text-gray-700 uppercase font-bold"
            >
              DESCRIPCION
            </label>
            <textarea
              type="text"
              id="description"
              placeholder="Descripcion de tarea"
              className="placeholder-gray-400 w-full p-2 mt-2 border-2 rounded-md text-gray-700"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {!task.id ? (
            <input
              type="submit"
              className="bg-blue-600 w-full p-2 text-white uppercase font-bold rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
              value="Crear tarea"
            />
          ) : (
            <input
              type="submit"
              className="bg-purple-600 w-full p-2 text-white uppercase font-bold rounded-full hover:bg-purple-700 transition-colors cursor-pointer"
              value="Actualizar tarea"
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
