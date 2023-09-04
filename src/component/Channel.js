import React from 'react';

class Channel extends React.Component{

    constructor(){
        super();
        this.state={
           text:'Whats your name'
        }
    }
    onText(){
       this.setState({
           text:'My name is Anas'        
       })
    }


    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={()=> {this.onText()}}>Subscribe</button>
            </div>
        )
    }
}
export default Channel;