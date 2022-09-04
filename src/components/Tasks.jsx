import React from 'react'

export const Tasks = ({ task, setTask }) => {

  const {title, date, description} = task; /* desestructuracion */
 /*  console.log(task); */


  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-lg mb-3">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Titulo: {""}
          <span className="font-normal normal-case">{title}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha: {""}
          <span className="font-normal normal-case">{date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Descripcion: {""}
          <span className="font-normal normal-case">{description}</span>
        </p>

        <div className='flex justify-between'>
          <button 
          className='bg-green-600 text-white hover:bg-green-700 mt-4 py-2 px-10 rounded-md font-bold'
          type="button" 
          onClick={ () => setTask(task) }
          >Actualizar</button>
          <button type="button" className='bg-red-600 text-white hover:bg-red-700 mt-4 py-2 px-10 rounded-md font-bold'>Eliminar</button>
        </div>

      </div>
      
  )
}

