import { ADD_MESSAGE, DELETE_MESSAGE, FETCH_MESSAGE, UPDATE_MESSAGE } from './types';

export const createMessage = (data) => {
  return {
    type: ADD_MESSAGE,
    data
  }
};

export const deleteMessage = id => {
  return {
    type: DELETE_MESSAGE,
    id
  }
};

export const fetchAllMessages = (messages) => {
  return {
    type: FETCH_MESSAGE,
    messages
  }
};


export const updateMessage = (id, message) => {
  return {
    type: UPDATE_MESSAGE,
    id,
    message
  }
};
