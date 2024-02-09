import React from 'react';
import "../Status/Status.css";
import { UilCheckCircle } from '@iconscout/react-unicons'

export default function Success({order}) {


  return (
    <div className='container-status'>
      <UilCheckCircle size="100" color="#32CD32"/>
    <h1>Compra Exitosa</h1>
    <h1>Orden n°: {order} </h1>
    <p>Tu compra se ha realizado con éxito. ¡Gracias por tu compra!</p>
  
  </div>
  )
}

