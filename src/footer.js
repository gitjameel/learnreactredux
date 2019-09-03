import React, {Component} from 'react';
import { connect} from 'react-redux';
import Popup from 'reactjs-popup';
import './footer.css';

class Footer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state =  {
            locationaddress:'',
            latitude:'',
            longitude:'',
            eventtype:''
        }
    }
        

    getCurrentLocation = () => {
       
        var address;      
        var eventtype;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;

                alert(lat +  "   " + lng);
                const coord = lat+','+lng;
                let googleservice = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDLBw-Wq8__vPDJDUXQ-1i-inv4CtqZQfs&latlng="+coord;
                console.log("current position:" + lat  + "   "  + lng);
                
                //calling the google service
                fetch(googleservice)
                .then(res => res.json())
                .then ( response => {         
                     address = response.results[0].formatted_address;
                     console.log("parsed address :" + address);
                     document.getElementById("location").value = address;  
                     eventtype = document.querySelector('input[name="event"]:checked').value;     

                     this.setState({ 
                        latitude: lat,
                        longitude: lng,                   
                        eventtype: eventtype,
                        locationaddress: address,                    
                    }) ;                           
                });
                           
              
             },
              (error) => this.setState(
                {error: error.message}
              )
            );
          }else {
            alert("Geolocation not supported");
          }
        }

    
  submitEvent = () => { 
    console.log("dispatching data to store reducer " + this.state.locationaddress);  
    
     const eventdata = 
        {            
            "locationaddress": this.state.locationaddress,
            "eventtype": this.state.eventtype,
            "latitude": this.state.latitude,
            "longitude": this.state.longitude
        };    
         
    this.props.dispatch( addTrafficAction(eventdata) );       
}


render() {
        return (
            <div>  
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                        
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>                        
                        </div>
                        <form>
                            <div class="modal-body">
                                <label class="radio-inline">
                                    <input type="radio" name="event" value="Check"/>Check
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" name="event"  value="Block" />Block
                                </label>
            
                                <div class="form-group">
                                
                                    <label for="usr">Location :</label>
                                    <input type="text" class="form-control" id="location" onClick={this.getCurrentLocation} />
                                    </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" onClick={this.submitEvent} class="btn btn-default" data-dismiss="modal" >Submit</button>
                            </div>
                        </form>
                    </div>
                    
                    </div>
                </div> 

                <button  class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" > Report Event</button>
               
            </div>
        )
    }
}

//action creator
const addTrafficAction = data => ({
    type: "ADDEVENT",
    payload : data
  });


 function mapStateToProps (state) {
    return {    
        locationaddress: state.mapreducer.locationaddress,
        eventtype: state.mapreducer.eventtype,
        latitude: state.mapreducer.latitude,
        longitude: state.mapreducer.longitude    
    };
 }

export default connect(mapStateToProps)(Footer);