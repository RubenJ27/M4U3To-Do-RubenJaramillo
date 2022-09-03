import { useState } from "react";

const Form = () => {

    const [user, setUser] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();

      if ([user, phone, email, date].includes("")) {
        setError(true);
        return;
      }

      setError(false);

      /* Limpiar formulario */
      setUser("");
      setPhone("");
      setEmail("");
      setDate("");
    } 

 
  return (
    <>
    <div className="md:w-full h-full lg:w-1/2 mx-5 relative">
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
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
          <textarea name="" className="placeholder-gray-400 border-2 rounded-md pl-1 pt-1 text-gray-700" id="" cols="50" rows="5" placeholder="Descripcion de tarea"></textarea>
        </div>


        <input
          type="submit"
          className="bg-blue-600 w-full p-2 text-white uppercase font-bold rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
          value="Crear tarea"
        />
      </form>
    </div>

  </>


  );
}

export default Form;
