
import { createStore } from 'redux'
import { messageReducer } from './message/message.reducer'
let store = createStore(messageReducer, composeWithDevtools())
// store stores all the states
export { store } 
