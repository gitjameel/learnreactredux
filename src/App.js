import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import CounterPanel from './counterpanel';
import GoogleMap from './map';
import EventDetails from './eventdetails';
import Footer from './footer';
import SampleLearnComponent from './samplelearncomponent';

function App() {
  return (
    <div className="App">
   {/*     <CounterPanel/>              
      <Counter/>  */}   
      <SampleLearnComponent/>
      <div className="container" >
        <div className="row">
            {/* <div className="col-lg-4">
              <div className="div1">
                 <EventDetails/>
              </div>
            </div> */}
            <div className="col-lg-12">
              <div className="div2">
             {/*    <GoogleMap/>   */}
              </div>
            </div>           
        </div>    
        <div className="row">
           <div className="com-lg-12">
            <Footer/>
            </div>
        </div>    
      </div>
       
    </div>
    
  );
}

export default App;
