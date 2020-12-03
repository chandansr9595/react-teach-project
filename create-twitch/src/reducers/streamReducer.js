import _ from 'lodash';

const StreamReducer = (state={}, action) => {
    switch(action.type){
        case 'FETCH_STREAMS':
            return _.mapKeys(action.payload, 'id');
        case 'EDIT_STREAMS' :
        case 'CREATE_STREAM':
        case 'FETCH_STREAM' :
            return {...state, [action.payload.id] : action.payload }
        case 'DELETE_STREAM':
            return _.omit(state, action.payload);
        default:
            return state;
    }
}


export default StreamReducer;