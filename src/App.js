import "./App.css";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const url =
      "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return <div></div>;
};

export default App;
