import { combineReducers } from 'redux';
import samplereducer from './samplereducer';

  const initialstate = { count : 0};
  //const mapinitialstate = {};
  const mapinitialstate =  { trafficdata:[] };

  const myreducer = (state = initialstate, action) => {
   
    console.log("Inside my reducer");
    console.log(action.type + " reducer function :" + state  + "  "  + action);
    switch(action.type) {
        case "INCREMENT":
            return {
                count : state.count+1
             };
        case "DECREMENT":
            return {
             count : state.count-1
            };
        case "RESET":
            return {
                count : 0
            }
        default:
            return state;
    } 
   
    return state;
}


  const newreducer = (state = initialstate, action) => {

    console.log("Inside new reducer");
    console.log(action.type + " reducer function :" + state  + "  "  + action);
    if(action.type === "UP") {
        return {
            count : state.count+1
             };
    }else if(action.type ==="DOWN"){
        return {
            count : state.count-1
        };
    } else if(action.type ==="RESET"){
        return {
            count : 0
        }
    }
   
    return state;
}  



const mapreducer = (state = mapinitialstate, action) => {
    console.log("current action " + action.type);
    switch(action.type){
        case "ADDEVENT":
            console.log("into ADDEVENT case statement");
            /* return {
                ...state,
                trafficdata : state.trafficdata.concat(action.payload)
            }
             */const newarray = state.trafficdata.slice(); //create a new array
             newarray.push(action.payload)                
            var newstate = {
                trafficdata : newarray
            }
            localStorage.setItem('data',newstate);         
            return newstate;
        case "LOADEVENTS":
            console.log("into LOADEVENTS case statement " + action.payload);
            var newstate = Object.assign({}, state, {trafficdata: action.payload})
            localStorage.setItem('data',newstate); 
            return newstate;
        default : 
          return state;
            
    }
    return state;
}

//combining multiple reducers
const rootReducer = combineReducers({
 //   myreducer,
  //  newreducer,
    mapreducer,
    samplereducer
});


export default rootReducer