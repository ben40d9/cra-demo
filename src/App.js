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
        console.log(data);

        // const individualObjs = data.map((obj) => obj.title).join(",");
        // console.log(individualObjs);

        const testy = await data.map((objs) => {
          return objs.title;
          // console.log(objs.title);
        });
        console.log(testy);

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
