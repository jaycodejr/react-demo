import axios from "axios"
import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "./userActionTypes"

export const addUserRequest = () => {
    return {
        type: ADD_USER_REQUEST
    }
}

export const addUserSuccess = () => {
    return {
        type: ADD_USER_SUCCESS
    }
}

export const addUserFailure = error => {
    return {
        type: ADD_USER_FAILURE,
        payload: error
    }
}

export const addUser = newUser => {
    return dispatch => {
        dispatch(addUserRequest())

        axios.post("http://localhost:3010/users",newUser)
        .then(data => {
            dispatch(addUserSuccess())
        }).catch(error => {
            dispatch(addUserFailure(error.message))
        })
    }
}