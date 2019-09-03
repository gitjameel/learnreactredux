import React, { Component }  from 'react';
import { connect } from 'react-redux';

class SampleLearnComponent extends React.Component {

    updateitem = () => {            
        this.props.dispatch(updateitemaction(this.refs.nameitem.value, this.refs.phonenoitem.value)); // will call reducer
    }

    render() {
        return (
            <div>
                <h2>SampleLearn</h2>
                <div>
                Name<input type="textbox" name="nameitem" ref="nameitem" />   <br/>
                House Phoneno<input type="textbox" name="phonenoitem" ref="phonenoitem"  />                
                <span>{this.props.name}  { this.props.phonenos.house} </span>
                <button onClick={this.updateitem}>+</button>                  
                </div>
            </div>
        )
    }


}

//action creator using function
function updateitemaction (namedata,phonenodata) {
    return { 
        type : "UPDATE",
        payload : {
            name: namedata,
            phoneno : phonenodata
        }
    }  
}


function mapStateToProps(state) {
    return {
      name : state.samplereducer.name,
      id: state.samplereducer.id,
      phonenos: {
          house: state.samplereducer.phonenos.house,
          office: state.samplereducer.phonenos.office
      }
      // if more than 1 reducer use state.<reducername>.prop otherwise state.prop
    };
  }


  export default connect(mapStateToProps)(SampleLearnComponent);