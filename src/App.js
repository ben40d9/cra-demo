import "./App.css";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    //adding the ?_limit=X to the end of the url sets a limit on how many objects you get back
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=12";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        //when I do not use spread syntax the data is returned in an array of objects
        //console.log(data)
        //logging (...data) show objects listed individually
        console.log(...data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return <div></div>;
};

export default App;
