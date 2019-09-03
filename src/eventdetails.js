import React, {Component} from 'react';
import { connect } from 'react-redux';

class EventDetails extends React.Component {

    render() {
        return (
            <div>
                <div className="eventdtl">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h5>Event logo</h5>
                            </div>
                            <div className="col-lg-6">
                                <h5>{this.props.eventtype}</h5>
                                <h5>{this.props.longitude}</h5>
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
        )
    }
}


function mapstatetoprops(state) {
    console.log("==== " + state.mapreducer.eventtype);
    return {      
      locationaddress: state.mapreducer.locationaddress,
      eventtype: state.mapreducer.eventtype,
      latitude: state.mapreducer.latitude,
      longitude: state.mapreducer.longitude
    };
  }


export default connect(mapstatetoprops)(EventDetails);