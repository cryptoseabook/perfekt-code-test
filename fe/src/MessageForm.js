import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createMessage } from './actions/index';

import axios from 'axios';
const apiUrl = 'http://localhost:3000/messages';

class MessageForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const message =  this.getMessage.value;
        const data = {
            id: new Date().getTime().toString(),
            message,
            editing:false
        }
        this.props.createAMessage(data)
        this.getMessage.value = '';
    }
    render() {
        return (
            <div>
                <h1>Create A Message</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input)=>this.getMessage = input} placeholder="Enter Your Message" /><br /><br />
                    <button>Add</button>
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
    createAMessage: async (message) => {
      let response =  await axios.post(`${apiUrl}`, message)
      console.log(message, response.data)
      dispatch(createMessage(message))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageForm);
