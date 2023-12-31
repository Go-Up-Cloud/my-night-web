import React, { useEffect } from 'react';
import './Registro.css'
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { loginUsuario, registroUsuario } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Registro() {

    const {loginWithRedirect} = useAuth0()
    

    function validate(input) {
        let errors = {};
      
        if (!input.nombre) {
          errors.nombre = "Se requiere un nombre";
        } else if (!input.contraseña) {
          errors.contraseña = "Se requiere una contraseña";
        } else if (!input.correo || !input.correo.includes("@")) {
          errors.correo = "Se requiere correo";
        } else if (input.contraseña != input.confirmarContraseña) {
          errors.rango = "Las contraseñas no coinciden";
        }
      
        return errors;
      }

      
  function handleChange(e) {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  }

  function handleSubmit(e) {
    if (
      !input.nombre ||
      !input.contraseña ||
      !input.correo
    ) {
      e.preventDefault();
      alert("Verifique los campos para poder continuar");
    } else {
      e.preventDefault();
      const newUser = {
        nombre: input.nombre,
        correo: input.correo,
        contraseña: input.contraseña
      }

      dispatch(registroUsuario(newUser)); 

      setInput({
        nombre: "",
        contraseña: "",
        correo: "",
        confirmarContraseña:"",
      });

      navigate("/productos")
    }

  }


      const onSuccess = (response) => {
        setUser(response.profileObj);
    
        const res = {
          nombre : response.profileObj.name,
          contraseña : response.googleId ,
          correo: response.profileObj.email 
            
        }

        dispatch(registroUsuario(res))
        document.getElementsByClassName("btn").hidden = true;
        alert("Usuario creado")
        navigate("/")
      }

      const [errors, setErrors] = useState({});
      const [user, setUser] = useState({});
      const navigate = useNavigate();
      const dispatch = useDispatch()

      const [input, setInput] = useState({
        nombre: "",
        contraseña: "",
        correo: "",
        confirmarContraseña:"",
      });

    
  return (
    <div className='registro'>
      <form class="formRegistro" >
    <h1 class="title">Regístrate </h1>
        <div class="flex">
        <label>
            <input required="" type="text" name='nombre' onChange={handleChange}  value={input.nombre} placeholder="Nombre"  class="input"/>
        </label>

    </div>  
            
    <label>
        <input required="" type="email" name='correo' onChange={handleChange} value={input.correo} placeholder="Email" class="inputt"/>
    </label> 
        
    <label>
        <input required="" type="password" name='contraseña' onChange={handleChange} value={input.contraseña} placeholder="Contraseña" class="inputt"/>
        
    </label>
    <label>
        <input required="" type="password" name='confirmarContraseña' onChange={handleChange} value={input.confirmarContraseña} placeholder="Confirmar contraseña" class="inputt"/>
       
    </label>
    <button class="sigin-btn" onClick={loginWithRedirect} >Registrarme</button>

    <button class="sigin-btn" id="signInButton"></button>

    
    


    <p class="signin">¿Ya tienes una cuenta? <a href="/inicio-sesion">Inicia sesión</a> </p>
</form>
    </div>
  )
}
