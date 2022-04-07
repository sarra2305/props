import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile";


function App() {
  const handelName = () => {
    alert("this is an Alert");
  };
  
  return (
    <div style={{backgroundColor: "teal", backgroundSize: "cover" , color:"white", fontSize:"30px"}} className="App">
      <Profile
        handelName={handelName}
        fullName="Sarra Oualha"
        bio="Hello, my name is Sarra, i'm 24 and i'm a Graphic Designer"
        profession="Graphic designer"
      />
      <img style={{ width:200,height:200,position:'absolute', top:22, left:20}} src="/mypic.jpg" alt="mypic" />
            

    </div>
  );
}
export default App;
