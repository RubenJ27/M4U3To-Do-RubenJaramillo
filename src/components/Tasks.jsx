import React from 'react'

export const Tasks = ({task}) => {

  const {title, date, description} = task; /* desestructuracion */
 

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
      </div>
  )
}

