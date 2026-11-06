import Boton from "../componentes/Boton";
import { useState } from "react";
import Tarjeta from "../componentes/Tarjeta";
import Modal from "../componentes/Modal";

function Productos()
{
        const [mostrar, setMostrar] = useState(false)
    
        function cerrarMensaje()
        {
            setMostrar(false)
        }
    
        function mostrarMensaje()
        {
            setMostrar(true)
        }
    
    return(
        <main>
            <h1>Productos</h1>
            <Tarjeta
                imagen=""
                titulo="Manteca"
                descripcion="Hola"
            >
            <Boton funcion={mostrarMensaje}>Mostrar</Boton>
            </Tarjeta>

            {mostrar &&(
                <Modal>
                    <h2>Listo</h2>
                    <p>Tu mensaje fue enviado</p>
                    <Boton funcion={cerrarMensaje}>Aceptar</Boton>
                </Modal>
            )}
        </main>
    )
}

export default Productos;