import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Canceled({ message, order }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Operación Cancelada</h2>
      <h1>Orden n°: {order} </h1>
      <p>{message}</p>
      <button onClick={()=> navigate('/')}>Volver</button>
    </div>
  );
}
