import csrfFetch from "./csrf"

export const SET_USER = '/api/session'
export const REMOVE_USER = '/api/session'

export const setUser = (user) => ({
    type: SET_USER,
    user
})

export const removeUser = (userId) => ({
    type: REMOVE_USER,
    userId
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
            // nextState[action.user.id] = action.user;
            return {[action.user.id]: action.user}
        default:
            return state
    }
}