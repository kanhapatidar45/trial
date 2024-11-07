import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //useState hook
  const[text,setText]=useState('');
  const[name,setName]=useState('love');
  //useEffect hook
  // //variation 1 every render
  // useEffect(()=> 
  // {
  //   console.log("ui rendering done");
  // });
  

//   //variation2 first render
//   useEffect(()=>{
// console.log("ui rendering done");
//   },[]);

//   //variation3 first render+whenever dependency change
//   useEffect(()=>{
// console.log("change observed");
//   },[name]);

  //variation4 to handle unmounting of a component
  useEffect(()=>{
   //add event listener
   console.log("listener added");
   return ()=>{
    console.log("listener removed");
   }
  },[text]);

  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
