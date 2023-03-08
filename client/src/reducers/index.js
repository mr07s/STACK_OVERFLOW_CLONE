import { combineReducers } from "redux";
import authReducer from "./auth";
// import questoionReducer from './question'
import currentUser from './currentUser'
import questionsReducer from './questions'
import usersReducer from './users'

export default combineReducers({
    authReducer ,currentUser,questionsReducer,usersReducer
})
