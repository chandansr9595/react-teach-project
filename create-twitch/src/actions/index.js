import StreamAPI from '../apis/streams';

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
    return async (dispatch) => {
        const response = await StreamAPI.post('/streams', formData);
        console.log(response.data)
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