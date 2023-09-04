import React, {useEffect, useState} from 'react'

export default function HookCounter() {
  const [text,newText] = useState("Anas");
  const [count,newcount] = useState(0)
  const [count1,newcount1] = useState(0)
  const [counter,newcounter] = useState(0)



  const handle = () =>{
    newText("Khattak");
  }

  const Increment = () =>{
    newcount(count + 1)
  }

  const Decrement = () =>{
    newcount1(count1 - 1)
  }

  // const Incremented = () =>{
  //   newcounter(counter + 10)
  // }

  const Incremented = () =>{
    for(let i=0;i<10;i++){
      newcounter(preCount => preCount + 1)
    }
  }
 

  useEffect(()=>{
   console.log("Aj")
  },[count])
  return (
    <div>
      <button onClick={handle}>Click here{text}</button>
      <button onClick={Increment}>Increment{count}</button>
      <button onClick={Decrement}>Decrement{count1}</button>
      <button onClick={Incremented}>Incremented 10 - {counter}</button>
    </div>
  )
}
