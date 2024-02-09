import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import Success from "./Success";
import Failed from "./Failed";
import Canceled from "./Canceled";
import { commitMobile } from "../../../redux/actions";

export default function CommitMobile () {
  const dispatch = useDispatch();
  const response_code = useSelector((state) => state.response_code);
  const message = useSelector((state) => state.message);
  const urlParams = new URLSearchParams(window.location.search);

  // Recoge todos los parámetros de la URL y los convierte a un objeto
  const params = Array.from(urlParams.entries()).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  console.log("antes del useefect", response_code);
    
    useEffect(() => {
      dispatch(commitMobile(params))
    }, []);

  console.log("despues del useefect", response_code);
              
    return (
      <>
        {message? (
        <Canceled message={message}/> 
        ) :
        response_code === 0 ? (
          <Success />
        ) : response_code === false ? (
          <Loader />
        ) : (
          <Failed />
        )}
      </>
    );
  }



