import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css"
// jsx
const App = () => {
  const [posts, setPosts] = useState([
    { userId: 1, id: 100, title: `about react`, body: "page1" },
    { userId: 2, id: 110, title: `about js`, body: "page2" },
  ]);
  const [userId, setuserId] = useState("");
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addPost = ()=>{
    setPosts([...posts,{userId:userId,id:id,title:title,body:body}]);
  }
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res)=>{
        setPosts(res.data);
      })
    },[]);

   
  return (
    <>
    {posts.map((elme, i) => {
      return (
        <div className="pragr" key={i}>
          <p><span>Title:</span>  {elme.title}</p>
          <p><span>Body:</span> {elme.body}</p>

        </div>
      );
    })}
      <div className= "input">
      <input  type="text" placeholder="UserID" onChange={(e) => {
        setuserId(e.target.value) 
      }}/>
      <input type="text" placeholder="id" onChange={(e) => {
        setID(e.target.value)
      }}/>
      <input typ="text" placeholder="title" onChange={(e) => {
        setTitle(e.target.value)
      }}/>
      <input type="text" placeholder="body" onChange={(e) => {
        setBody(e.target.value)
      }}/>
      <button onClick={addPost}>Click me </button>
      </div>
    </>
  );
};
export default App;