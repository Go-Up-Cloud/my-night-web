import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useLocation } from 'react-router-dom';

export default function Transbank() {
  const [paymentToken, setPaymentToken] = useState(null);
  const [viewData, setViewData] = useState(null);
  const location = useLocation();
  const evento = location.state?.evento;

  useEffect(() => {
    const handlePayment = async () => {
      try {
        if (!evento) {
          console.log("No se encontró el evento");
          return;
        }

        const response = await axios.post("/transbank/create", {
          total: evento.price,
          buy_order: 1234,
        });

        if (response.data && response.data.token && response.data.url) {
          setPaymentToken(response.data.token);
          setViewData(response.data);
        } else {
          console.log("Error: del handlePayment, no hay token o url");
        }
      } catch (error) {
        console.error("Error al iniciar el pago:", error);
      }
    };
    handlePayment();
  }, [evento]);

  useEffect(() => {
    if (viewData && viewData.token && viewData.url) {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = viewData.url;

      const tokenInput = document.createElement("input");
      tokenInput.type = "hidden";
      tokenInput.name = "token_ws";
      tokenInput.value = viewData.token;

      form.appendChild(tokenInput);
      document.body.appendChild(form);

      form.submit();
      document.body.removeChild(form);
    }
  }, [viewData]);

  if (!viewData) {
    return <Loader />;
  }

  return null;
}
