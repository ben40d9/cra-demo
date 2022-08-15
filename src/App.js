import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    //adding the ?_limit=X to the end of the url sets a limit on how many objects you get back
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=12";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        //when I do not use spread syntax the data is returned in an array of objects
        console.log(data);
        //logging (...data) show objects listed individually
        // console.log(...data);

        // //using array manipuation, get params of each object in the array
        // const dataTitle = await data.map((objs) => {
        //   return objs.title;
        // });
        // console.log(dataTitle);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return <div></div>;
};

export default App;
