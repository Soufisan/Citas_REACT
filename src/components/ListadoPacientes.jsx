import { useEffect } from 'react'
import Paciente from './Paciente'




const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {



    return (


        <div className="md:w-1/2 lg:w-3/5">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-center mt-5 text-lg mb-10">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    <div className="md:h-screen md:overflow-y-scroll">
                        {pacientes.map((paciente) => {
                            return (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    eliminarPaciente={eliminarPaciente}
                                />
                            )
                        })}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No tienes pacientes</h2>
                    <p className="text-center mt-5 text-lg mb-10">
                        Aqui se mostrarán {''}
                        <span className="text-indigo-600 font-bold">Los Pacientes y Las Citas</span>
                    </p>
                </>
            )}

        </div>
    )
}

export default ListadoPacientes
