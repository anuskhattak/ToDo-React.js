import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ProductID:'',qty:0
      }
    }
    addToCart = (pid) => {
        console.log(pid)
        this.setState({
            ProductID:pid,qty:this.state.qty+1
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={()=>{this.addToCart(1)}}>Add to Cart</button>
        <Cart>ProductID={this.state.ProductID} qty={this.state.qty}</Cart>
      </div>
    )
  }
}

export default Product;




 class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            Qty:this.props.qty
        }
    }

    // Update = ()=>{
    //     this.setState({
    //         Qty:this.state.Qty+1
    //     })
    // }

    static getDerivedStateFromProps(props,state){
        if(props.qty !== state.Qty){
            return { Qty : props.Qty }
        }
        return null 
    }

    componentDidMount(){
        console.log("press the button")
    }
    componentDidUpdate(prevprops, prevstate){
        console.log("now see +1")
    }
  render() {
    return (
      <div>
        <h1>Cart{this.state.Qty}</h1>
        <button onClick={this.Update}>Click Here</button>
      </div>
    )
  }
}

// export default Cart;
