import StreamAPI from '../apis/streams';
import history from '../history';

export const signIn = (userId) => {
    return {
        type : 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type : 'SIGN_OUT'
    }
}

export const createStream = (formData) => {
    return async (dispatch, getState) => {
        const response = await StreamAPI.post('/streams', 
            {
                ...formData, 
                userId: getState().auth.userId
            }
        );
        dispatch({
            type: "CREATE_STREAM",
            payload: response.data
        });
        history.push('/');
    }
}

export const deleteStream = (streamId) => {
    return async (dispatch) => {
        await StreamAPI.delete(`/streams/${streamId}`);
        dispatch({
            type: "DELETE_STREAM",
            payload: streamId
        })
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await StreamAPI.get('/streams');
        dispatch({
            type: "FETCH_STREAMS",
            payload: response.data
        });
    }
}

export const fetchStream = (streamId) => {
    return async (dispatch) => {
        const response = await StreamAPI.get(`/streams/${streamId}`);
        dispatch({
            type: "FETCH_STREAM",
            payload: response.data
        });
    }
}