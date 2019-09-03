import React, { Component }  from 'react';
import './map.css';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from 'google-maps-react';
import { connect } from 'react-redux';
import check from './check.png';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative'
  };
 

class GoogleMap extends React.Component {

    state =  {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

    componentDidMount() {        
         fetch('https://demo6302280.mockable.io/gettrafficdata')
        .then(res =>res.json())
        .then( (result) =>{
             this.props.dispatch( addTrafficAction(result))             
        }); 
       
    }

    checkLocalStorage = () => {
        var value= localStorage.getItem('data');
        if(value!=null && value !=undefined)
            return true;
        else 
            return false;
    }
    
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    render() {
        return (
            <div className="mapdimension">
               
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                     initialCenter={{
                    lat: 21.389082,
                    lng: 39.857910
                    }}                      
                    onClick={this.componentDidMount} >

                  {this.props.trafficdata.map(item => (
                    <Marker
                    title={item.locationaddress}
                    name={item.locationaddress}
                    position={{lat: item.latitude, lng: item.longitude}} 
                    onClick={this.onMarkerClick}
                     /* icon={{
                        url: 'https://via.placeholder.com/150'
                        //anchor: new google.maps.Point(32,32),
                        //scaledSize: new google.maps.Size(64,64)
                      }} */
                    />                    
                ))} 

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
                </Map>
            </div>
        );
    }
}


//action creator
const addTrafficAction = data => ({
    type: "LOADEVENTS",
    payload : data
  });


function mapStatetoProps(state) {
    return {
       trafficdata : state.mapreducer.trafficdata
    }
}


export default connect(mapStatetoProps)(GoogleApiWrapper({
    apiKey: 'AIzaSyDLBw-Wq8__vPDJDUXQ-1i-inv4CtqZQfs'
  })(GoogleMap))