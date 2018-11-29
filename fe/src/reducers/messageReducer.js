import { ADD_MESSAGE, DELETE_MESSAGE, FETCH_MESSAGE, UPDATE_MESSAGE } from '../actions/types';

const initState = {
  messages: []
}

const messageReducer = (state = initState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_MESSAGE:
      return {
        ...state,
        messages: [...action.messages]
      }
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.data]
      }
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages.filter((message) => message.id !== action.id)]
      }
    case 'EDIT_MESSAGE':
      var copyState = JSON.parse(JSON.stringify( state ));
      let foundMessage = [...copyState.messages.filter((message) => message.id === action.id)][0]
      foundMessage.editing = !foundMessage.editing
      return copyState
    case UPDATE_MESSAGE:
      let copyState1 = JSON.parse(JSON.stringify( state ));
      let foundMessage2 = [...copyState1.messages.filter((message) => message.id === action.id)][0]
      foundMessage2.editing = !foundMessage2.editing
      foundMessage2.message = action.message
      return copyState1
    default:
      return state;
  }
}
export default messageReducer;
