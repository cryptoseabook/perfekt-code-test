import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import EditComponent from './EditComponent';

import { fetchAllMessages } from './actions/index';

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages()
  }
  render() {
    return (
    <div>
      <h1>All Messages</h1>
      {this.props.messages.map((message) => (
            <div key={message.id}>
                {message.editing ? <EditComponent message={message} key={message.id} /> :
                    <Message key={message.id} message={message} />}
            </div>
        ))}
    </div>
    );
   }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => {
      dispatch(fetchAllMessages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
