import csrfFetch from "./csrf"

export const SET_USER = '/api/session'
export const REMOVE_USER = '/api/session'

export const setUser = (user) => ({
    type: SET_USER,
    user
})

export const removeUser = () => ({
    type: REMOVE_USER
})

export const loginUser = user => async dispatch => {
    const res = await csrfFetch(SET_USER, {
        method: 'POST',
        body: JSON.stringify(user)
    })
    let data = await res.json();
    dispatch(setUser(data.user))
}

export const logoutUser = userId => async dispatch => {
    const res = await csrfFetch(REMOVE_USER, {
        method: 'DELETE'
    })
    dispatch(removeUser(userId))
}

const sessionReducer = (state = {}, action) => {
    // const nextState = {...state}
    switch(action.type) {
        case SET_USER:
            // nextState["user"] = action.user;
            return { ...state, user: action.user };
            // return nextState;
        case REMOVE_USER:
            // const nextState = {...state};
            // delete nextState[action.userId];
            // return nextState;
            return {...state, user: null}
        default:
            return state
    }
}

export default sessionReducer;