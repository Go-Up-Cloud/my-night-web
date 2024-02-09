import React from 'react';

export default function Canceled({ message, order }) {

  return (
    <div>
      <h2>Operación Cancelada</h2>
      <h1>Orden n°: {order} </h1>
      <p>{message}</p>
    </div>
  );
}
