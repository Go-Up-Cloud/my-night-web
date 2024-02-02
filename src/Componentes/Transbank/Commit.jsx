import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import Success from "./Status/Success";
import Failed from "./Status/Failed";
import Canceled from "./Status/Canceled";
import { commit } from "../../redux/actions";

export default function Commit() {
  const dispatch = useDispatch();
  const response_code = useSelector((state) => state.response_code);
  const message = useSelector((state) => state.message);
  const urlParams = new URLSearchParams(window.location.search);

  // Recoge todos los parámetros de la URL y los convierte a un objeto
  const params = Array.from(urlParams.entries()).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  useEffect(() => {
    dispatch(commit(params));
  }, [dispatch]);

  return (
    <>
      {message? (
      <Canceled message={message}/> 
      ) :
      response_code === 0 ? (
        <Success />
      ) : response_code === false ? (
        <Failed />
      ) : (
        <Loader />
      )}
    </>
  );
}
