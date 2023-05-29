// Home.js
import React, {  useState } from "react";
import { connect } from "react-redux";
import { increment, decrement,calculoEdad,logEdad } from "../redux/actions";

const Home = ({ count, increment, decrement, text,calculoEdad,logEdad  }) => {

    const [edad, setedad] = useState(0)
    
  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  const clickCalculoEdad=()=>{
    calculoEdad(edad);
  }

  const clickLogEdad=()=>{
    logEdad(edad);
  }

  return (
    <div>
      <div>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>
        <input onChange={(e)=>setedad(e.target.value)} type="number" />
        <button onClick={clickCalculoEdad} >calcula edad</button>
        <button onClick={clickLogEdad} >imprime edad</button>
        
      </div>
      <p>{text}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count.count, // Accede correctamente al valor de count en el estado
    text:state.logEdad.text
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  calculoEdad,
  logEdad 
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
