import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import reservationList from './reservationList'
const rootReducer = (state, action) => {
    switch(action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            };
    }

    return combineReducers({
        reservationList
    })(state,action)
}

export default rootReducer