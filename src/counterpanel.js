import React, { Component} from 'react';
import { connect} from 'react-redux';

class CounterPanel extends React.Component {

    render() {
        return (
        <div>
            <h1>{this.props.count}</h1>
        </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
      count: state.myreducer.count
    };
  }

export default connect(mapStateToProps)(CounterPanel);
