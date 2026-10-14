'use client';

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";


const About = () =>{
  const params = useSearchParams();
  //const name  = params.get('name');
  //const address = params.get('address');
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const login = ()=> {
    //const qS = `name=${username}`;
    //router.push(`../just_page?${qS}`);
 //   const params = new URLSearchParams();
 //   params.append('name', username);
 //    params.append('address', address); 
    sessionStorage.setItem('name', username);
    sessionStorage.setItem('address', address);
    router.push(`../just_page`);
  }
  return (
  <div>
    <h1>Hello from main page. You should visit {address} </h1>
 <input type="text" onChange={(e)=> {setUsername(e.target.value)}}/>
      <input type="text" onChange={(e)=> {setAddress(e.target.value)}}/>
    <button className="bg-blue-800 p-2 rounded-md"
      onClick={login}
      >Login</button>
  </div>
  )
}


export default About;
