import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Login.css'

function Login(){
    
    const [correo, setCorreo] = useState("")
    const [pass, setPass] = useState("")

    const navigate = useNavigate()

    function iniciarSesion(evento)
    {
        evento.preventDefault()

        setCorreo("")
        setPass("")

        navigate("/")
    }

    return(
        <main className="login">
            <div className="login-contenedor">
                <div className="login-pestanas">
                    <button className="activo" onClick={() => navigate("/login")}>Iniciar Sesion</button>
                    <button  onClick={() => navigate("/registro")}>Registrar</button>
                </div>

                <div className="login-formulario">
                    <h2>Bienvenido</h2>
                    <p>Inicia sesion con tu cuenta</p>

                    <form onSubmit={iniciarSesion}>
                        <input 
                            type="email"
                            placeholder="Correo electronico"
                            value={correo}
                            onChange={(evento) => setCorreo(evento.target.value)}
                            required
                        />

                        <input 
                            type="password"
                            placeholder="Contraseña"
                            value={pass}
                            onChange={(evento) => setPass(evento.target.value)}
                            required
                        />

                        <button type="submit">Iniciar Sesión</button>
                    </form>
                </div>
            </div>

            
            
        </main>
    )
}

export default Login