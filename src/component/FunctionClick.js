import React from 'react'

export default function FunctionClick() {
    
    function text(e){
        e.prevent.Default();
        // console.log('ye buddy')
    }
  return (
    <div>
      {/* <button onClick={text}>Click me</button> */}
      <a href='https://getbootstrap.com/' onClick={text}>ye link hai</a>
    </div>
  )
}
