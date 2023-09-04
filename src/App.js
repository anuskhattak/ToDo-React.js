import React from 'react';
import './App.css';
import Header from './component/Header';
import CHeader from './component/CHeader';
import Channel from './component/Channel';
import FunctionClick from './component/FunctionClick';
import CFunctionClick from './component/CFunctionClick';
import Stylesheet from './component/Stylesheet';
import Form from './component/Form';
import LifeCycleA from './component/LifeCycleA';
import Product from './component/Product';
import HookCounter from './component/HookCounter';
import Counter from './component/Counter';
import HookObject from './component/HookObject';
class App extends React.Component{
  render(){
    const text=[1,2,3,4,5];
     return(
      <div className="App">
       {/* <Header name = "Awais "/>
       <p>ye buddy light weight</p>
       <Header name = "Zohaib "/>
       <button href="">Click Here</button>
       <Header name = "Hamdan "/>
       <CHeader/>
       <CHeader name = "this is our class props"/>
       <Channel/>
       <FunctionClick/>
       <CFunctionClick seatno="4" text={text}/> */}
       {/* <Stylesheet isvalue={false}></Stylesheet> */}
       {/* <Form></Form> */}
        {/* <LifeCycleA></LifeCycleA> */}
        {/* <Product></Product> */}
        {/* <HookCounter></HookCounter> */}
        {/* <Counter></Counter> */}
        <HookObject></HookObject>

      </div>
      
     )
  }
}



export default App;
