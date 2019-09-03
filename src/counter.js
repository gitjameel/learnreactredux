import React, { Component }  from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    componentDidMount() {
        console.log("****** Component did mount called *****");
    }

    //state = { count : 0};

    increment = () => {
      /*   this.setState( {
            count : this.state.count+1
        }); */
        this.props.dispatch(increment()); // will call reducer
    }

    decrement = () => {
       /*  this.setState( {
            count: this.state.count -1
        }); */
        this.props.dispatch(decrement()); // will call reducer
    }


    reset = () => {
       this.props.dispatch({type:"RESET"}); // will call reducer
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}>+</button>
                <button onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }


}

//action creator using function
function increment() {
    return { type : "INCREMENT"}  
}

//action creator using fat arrow
const  decrement = () => ({
    type : "DECREMENT"
})

function mapStateToProps(state) {
    return {
      count: state.myreducer.count  // if more than 1 reducer use state.<reducername>.prop otherwise state.prop
    };
  }


  export default connect(mapStateToProps)(Counter);