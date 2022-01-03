import { useState, useEffect } from 'react'
import Error from './Error'
import Paciente from './Paciente'

// A la función le pasamos los props del componente padre "App"
const Furmulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    // Los state de los campos de los input

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [correo, setCorreo] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    // El state de error. Su estado incial tiene que ser falso
    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setCorreo(paciente.correo)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fechaRandom = Date.now().toString(36)
        return random + fechaRandom
    }


    const handleSubmit = (e) => {


        // Metodo necesario para el estado de la página 
        e.preventDefault();

        // Condiciones para los campos no rellenos
        if ([nombre, propietario, correo, fecha, sintomas].includes('')) {
            setError(true)
            return;
        }
        // Con este objeto, capturamos los valores que están en el input
        const objetoPacientes = {
            nombre,
            propietario,
            correo,
            fecha,
            sintomas,
        }





        if (paciente.id) {
            // Editando el registro
            objetoPacientes.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ?
                objetoPacientes :
                pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            // Agregando nuevo registro
            //Generar ID
            objetoPacientes.id = generarId()
            // La prop que recoge los datos
            setPacientes([...pacientes, objetoPacientes])

        }

        // Reiniciar los forms
        setNombre('')
        setPropietario('')
        setCorreo('')
        setFecha('')
        setSintomas('')


    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguiemientos pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añadir pacientes y {''}
                <span className="text-indigo-600 font-bold">
                    Administralos
                </span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-md py-10 px-5 mb-5">

                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre mascota
                    </label>

                    <input
                        id="mascota"
                        type="text"
                        placeholder="Bora"
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre del propietario
                    </label>

                    <input
                        id="propietario"
                        type="text"
                        placeholder="Victor"
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Correo electronico
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="**@email.com"
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Fecha del alta
                    </label>

                    <input
                        id="alta"
                        type="date"
                        placeholder="00/00/0000"
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>

                    <textarea
                        id="sintomas"
                        type="date"
                        placeholder="Mi perro tiene fiebre..."
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="text-white w-full bg-indigo-600 p-3 rounded-md uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
                    value={
                        paciente.id ?
                            'editar paciente' :
                            'agregar paciente'
                    }
                />
            </form>

        </div>
    )
}

export default Furmulario
