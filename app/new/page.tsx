"use client"

import {useState } from 'react';


const NewPage = () => {
  const [name, setName] = useState("")
  const displayName = () => {
    alert(`Hello sir, ${name}`);
  }

  const [n1,setN1] = useState (0);
  const [n2,setN2] = useState (0);
  const [sum , setSum] = useState(0);


  const add =()=>{
    const x = n1;
    const y = n2;
    const z = x+y;
  setSum(z);
  }
  return (
  <div>
    <h1 className="font-black" >useState Hook</h1>
      <label> Basta input</label> 
      <input 
        type="text" 
        id='hookInputNia' 
        name="basta input" 
        className='bg-amber-200 border-2 border-amber-950 rounded-2xl text-black'
        onChange={(e)=>{setName(e.target.value)}}
      /> 
      <button 
        className='bg-blue-800 rounded-md m-2'
        onClick={displayName}
      >
        Click Me
      </button>


      <h1>Calculator</h1>
      <input type='number' id='num1' value={n1}
        onChange={(e)=>{  
          setN1(e.currentTarget.valueAsNumber);
        }}
      />
      <input type='number' id='num2' value={n2}
        onChange={(e)=>{
          setN2(e.currentTarget.valueAsNumber);
        }}
      />
      <h2>= {sum}</h2>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default NewPage;
