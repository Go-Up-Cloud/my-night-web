import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import Success from "./Status/Success";
import Failed from "./Status/Failed";
import Canceled from "./Status/Canceled";
import { commitWeb } from "../../redux/actions";

export default function Commit() {
  const dispatch = useDispatch();
  const response_code = useSelector((state) => state.response_code);
  const message = useSelector((state) => state.message);
  const buy_order = useSelector((state) => state.buy_order);
  const urlParams = new URLSearchParams(window.location.search);

  // Recoge todos los parámetros de la URL y los convierte a un objeto
  const params = Array.from(urlParams.entries()).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(commitWeb(params));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader order={buy_order} />;
  }

  return (
    <>
      {message ? (
        <Canceled message={message} order={buy_order} />
      ) : response_code === 0 ? (
        <Success order={buy_order} />
      ) : (
        <Failed order={buy_order} />
      )}
    </>
  );
}


