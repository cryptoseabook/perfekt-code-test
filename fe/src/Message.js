import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deleteMessage } from './actions/index';

import axios from 'axios';
const apiUrl = 'http://localhost:3000/messages';

class Message extends Component {
  handleDelete = () => {
    console.log('handleDelete')
    let id = this.props.message.id
    this.props.deleteAMessage(id)
  }
  handleEdit = () => {
    console.log('handleEdit')
    let id = this.props.message.id
    this.props.handleEdit(id)
  }
  render() {
  return (
    <div>
      <p>{this.props.message.message}</p>
      <button onClick={this.handleEdit}>Edit</button> &nbsp;
      <button onClick={this.handleDelete}>
      Delete</button>
    </div>
  );
 }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAMessage: async (id) => {
      await axios.delete(`${apiUrl}/${id}`)
      dispatch(deleteMessage(id))
    },
    handleEdit: (id) => {
      dispatch({type:'EDIT_MESSAGE', id: id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
