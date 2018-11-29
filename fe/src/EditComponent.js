import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMessage } from './actions/index';

import axios from 'axios';
const apiUrl = 'http://localhost:3000/messages';


class EditComponent extends Component {
  handleUpdate = (e) => {
    e.preventDefault();
    const newMessage = this.getMessage.value;
    const id = this.props.message.id
    const data = {
      message: newMessage
    }
    this.props.updateAMessage(id, data)
  }
  render() {
    return (
    <div key={this.props.message.id}>
      <form onSubmit={this.handleUpdate}>
        <input required type="text" ref={(input) => this.getMessage = input}
        defaultValue={this.props.message.message} placeholder="Enter Message" /><br /><br />
        <button>Update</button>
      </form>
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
    updateAMessage: async (id, data) => {
      await axios.put(`${apiUrl}/${id}`, data)
      dispatch(updateMessage(id, data.message))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditComponent);
