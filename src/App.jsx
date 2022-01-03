import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import Furmulario from './components/Furmulario'

function App() {

  // El state que usamos para las props.
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)

  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Furmulario
          // Valores anteriores de la prop
          pacientes={pacientes}
          // Nuevos valores de la prop
          setPacientes={setPacientes}
          // Devuelve el objeto seleccionado
          paciente={paciente}
          //Devolver el objeto vacio
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}
export default App
