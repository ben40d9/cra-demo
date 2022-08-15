import "./App.css";
import React, { useEffect, ReactDOM } from "react";
import { createRoot } from "react-dom/client";

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
          return objs.title;
        });
        console.log(dataTitle);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
    const content = props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    ));
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }

  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Blog posts={posts} />);
};

export default App;
