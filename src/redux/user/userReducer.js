import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "./userActionTypes"

const initialState = {
    hasError:"",
    isLoading:false
}

const userReducer = (state = initialState, { type,payload }) => {
    switch (type) {
        case ADD_USER_REQUEST:
            return { ...state, isLoading: true, hasError: "" }
        
        case ADD_USER_SUCCESS:
            return { ...state, isLoading: false, hasError: "" }

        case ADD_USER_FAILURE:
            return { ...state, isLoading: false, hasError: payload }

    default:
        return state
    }
}

export default userReducer
