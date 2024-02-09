import React from 'react';
import "../Status/Status.css";

export default function Failed({order}) {
  return (
    <div>
        <h1>Compra Fallida</h1>
        <h1>Orden n°: {order} </h1>
        <h2>Lo sentimos, no se pudo procesar su compra.</h2>
        <h2>Para más información revise los datos que enviamos a su correo.</h2>
    </div>
  )
}
