import React,{useState} from 'react'

function HookObject() {
    const [name,setname]= useState({firstName:'', lastName:''});
  return (
    <div>
      <form>
        <input type='text' value={name.firstName} onChange={ f => {setname({...name,firstName:f.target.value})}}></input>
        <input type='text' value={name.lastName} onChange={ f => {setname({...name,lastName:f.target.value})}}></input>

      </form>

      {name.firstName}
      {name.lastName}

    </div>
   
  )
}

export default HookObject
