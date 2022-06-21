import React, {useState} from "react";
import './App.css';
import ClassComp from './ClassCompo';
import FunctionComp from './FunctionCompo';

const Header=()=> {

  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);

  const Toggle = () =>{
    setShow(!show);
  }
  const  Toggles =()=>{
    setShows(!shows);  
  }

  return (
    <div className="App">
       <h1 className="head">Styling using Functional and Class Component</h1>
     <div className="btn">
      <button className="btn_left" onClick={Toggle} >To see styling in function Component</button>
      <button className="btn_right" onClick={Toggles} >To see styling in class Component</button>
     </div>
      <span>
      {show && <FunctionComp/>}
      {shows && <ClassComp/>}
      </span>
    </div>
     
    
  );
}

export default Header;
