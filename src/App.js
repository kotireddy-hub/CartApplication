import { useEffect, useState } from "react";
import "./styles.css";

import CartView from "./CartView";

export default function App() {
  const { loading, error, data } = useFetch("https://dummyjson.com/carts/1");

  if (loading) return "loading....";

  if (error) return <p>ERROR: {error}</p>;

  return (
    <div className="App">
      <h1>Cart Task</h1>
      <CartView details={data} />
    </div>
  );
}

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        setData(responseJson);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return {
    loading,
    data,
    error,
  };
};
