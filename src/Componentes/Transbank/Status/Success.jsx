import React from 'react';
import "./Status.css";
import { useNavigate } from 'react-router-dom';
import { UilCheckCircle } from '@iconscout/react-unicons'

export default function Success({order}) {

    const navigate = useNavigate();

  return (
    <div className='container-status'>
      <UilCheckCircle size="100" color="#32CD32"/>
    <h1>Compra Exitosa</h1>
    <h1>Orden n°: {order} </h1>
    <p>Tu compra se ha realizado con éxito. ¡Gracias por tu compra!</p>
    <button onClick={()=> navigate('/perfil')}>Ver entradas</button>
  
  </div>
  )
}

