import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import * as actionTypes from '../constants/actionTypes'

const menuItems = (state = {}, action) => (state)

const data = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                [action.meta.provider]: action.payload
            }
            break
        default:
            return state
    }
}

const rootReducer = combineReducers({
    menuItems,
    routing,
    data
})

export default rootReducer