
const initialstate = {
    name:'sample',
    id:'',
    phonenos: {
        house: 123123,
        office: 123123
    }
};

const samplereducer = (state = initialstate, action) => {
    switch(action.type) {
        case "UPDATE":        
            return {
               ...state,
               name: action.payload.name,
               phonenos:{
                   ...state.phonenos,
                    house : action.payload.phoneno              
               }
            };        
        default :
            return state;
    }
}


export default samplereducer;