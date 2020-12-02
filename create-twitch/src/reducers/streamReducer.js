import _ from 'lodash';

const StreamReducer = (state={}, action) => {
    switch(action.type){
        case 'FETCH_STREAMS':
            return _.mapKeys(action.payload, 'id');
        case 'EDIT_STREAMS':
        case 'CREATE_STREAM':
            return {...state, [action.payload.id] : action.payload }
        default:
            return state;
    }
}


export default StreamReducer;