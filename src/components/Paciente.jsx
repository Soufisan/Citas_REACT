import React, { useState } from 'react'


const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, correo, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        eliminarPaciente(id)
    }

    return (
        <div className="mb-5 ml-5 mr-5 bg-white shadow-md rounded-md px-5 py-10">
            <p className="font-bold uppercase mb-3 text-gray-700">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Correo: {''}
                <span className="font-normal normal-case">{correo}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Fecha del alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="mt-10 flex justify-between">
                <button
                    className="p-3 rounded-md text-center uppercase font-bold text-white bg-indigo-600 hover:bg-indigo-800"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    className="p-3 rounded-md text-center uppercase font-bold text-white bg-red-600 hover:bg-red-800"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
