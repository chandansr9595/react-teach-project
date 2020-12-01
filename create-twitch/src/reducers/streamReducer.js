
import _ from 'lodash';

const StreamReducer = (state={}, action) => {
    switch(action.type){
        case 'FETCH_STREAMS':
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
}

export default StreamReducer;