import {combineReducers} from "redux"
import markReducer from "./markJobCard/markReducer"
const rootReducer = combineReducers({
    markJobState:markReducer
})

export default rootReducer