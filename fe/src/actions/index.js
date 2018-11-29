import { ADD_MESSAGE, DELETE_MESSAGE, FETCH_MESSAGE, UPDATE_MESSAGE } from './types';

import axios from 'axios';
const apiUrl = 'http://localhost:3000/messages';

export const createMessage = (data) => {
  return dispatch => {
    axios.post(`${apiUrl}`, data).then(res => {
      dispatch(createMessageSuccess(data));
    }).catch(err => {
      // dispatch(createMessageFailure(res.data));
    })
  }
};

const createMessageSuccess = (data) => {
  return {
    type: ADD_MESSAGE,
    data
  }
}

export const deleteMessage = (id) => {
  return dispatch => {
    axios.delete(`${apiUrl}/${id}`).then(res => {
      dispatch(deleteMessageSuccess(id));
    }).catch(err => {
      // dispatch(createMessageFailure(res.data));
    })
  }
};

const deleteMessageSuccess = id => {
  return {
    type: DELETE_MESSAGE,
    id
  }
};

export const fetchAllMessages = () => {
  return dispatch => {
    axios.get(`${apiUrl}/`).then(res => {
      dispatch(fetchAllMessagesSuccess(res.data));
    }).catch(err => {
      // dispatch(createMessageFailure(res.data));
    })
  }
};

export const fetchAllMessagesSuccess = (messages) => {
  return {
    type: FETCH_MESSAGE,
    messages
  }
};

export const updateMessage = (id, newMessage) => {
  return dispatch => {
    axios.put(`${apiUrl}/${id}`).then(res => {
      dispatch(updateMessageSuccess(id, newMessage));
    }).catch(err => {
      // dispatch(createMessageFailure(res.data));
    })
  }
};


export const updateMessageSuccess = (id, message) => {
  return {
    type: UPDATE_MESSAGE,
    id,
    message
  }
};
