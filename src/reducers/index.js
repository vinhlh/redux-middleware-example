import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

const menuItems = (state = {}, action) => (state)

const rootReducer = combineReducers({
    menuItems,
    routing
})

export default rootReducer