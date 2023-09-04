import React, { Component } from 'react'

export class CFunctionClick extends Component {

    constructor(props){
        super(props);
        this.text=this.text.bind(this);

        this.state={
            age:"and i am 20 years old and my seat no is",
            seatno:this.props.seatno
        }

       
    }
    text=()=>{

        this.setState({
            age:"and i am 6 years old and my seat no is",
            seatno:this.props.seatno
        })

        console.log("my name is haris ",this.state.age,this.props.seatno)
    }
    render() {
        const text=this.props.text;
        // const newText=text.map((text)=>{
        //   return <li>{text}</li>
        // })
    return (
      
      <React.Fragment>
        <button onClick={this.text}>Jado dekh</button>
        {this.age} {this.seatno} 
        <ul>
          {text.map((text)=><li key={text}>{text}</li>)}
        </ul>
      </React.Fragment>
    )
  }
}

export default CFunctionClick
