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
        console.log(data);
        //logging (...data) show objects listed individually
        // console.log(...data);

        //using array manipuation, get params of each object in the array
        const dataTitle = await data.map((objs) => {
          //console.log(objs);
          return objs.title;
        });
        // console.log(dataTitle);

        const dataId = await data.map((objs) => {
          return data.id;
        });

        const dataUserId = await data.map((objs) => {
          return data.userId;
        });

        const sidebar = await (
          <ul>
            {data.map((objs) => (
              <li key={objs.id}>{objs.title}</li>
            ))}
          </ul>
        );
        const content = data.map((objs) => (
          <div key={objs.id}>
            <h3>{objs.title}</h3>
            <p>{objs.content}</p>
          </div>
        ));
      } catch (err) {
        console.log("error", err);
      }
    };

    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );

    fetchData();
  }, []);
  // return (
  //   <div>
  //     {sidebar}
  //     <hr />
  //     {content}
  //   </div>
  // );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(App());

export default App;
