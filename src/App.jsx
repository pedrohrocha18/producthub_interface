import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://producthub-api.vercel.app");
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dados da api</h1>
      {data ? <>{data}</> : <>{error}</>}
    </div>
  );
};

export default App;
