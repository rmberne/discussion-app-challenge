import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchThread, deleteThread, updateThread} from "../actions";
import Comments from "./comments";

class ThreadsShow extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchThread(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;

    this.props.deleteThread(id, () => {
      this.props.history.push("/");
    });
  }

  renderEntries(entries) {
    if (_.isEmpty(entries)) {
      return null;
    } else {
      return _.map(entries, entry => {
        return (
            <li className="list-group-item" key={entry.id}>
              {entry.content}
            </li>
        );
      });
    }
  }

  onCommentSubmit(values) {
    const thread = {...this.props.thread};
    thread.entries.push({content: values.comment});

    this.props.updateThread(thread, () => {
      // this.props.history.push("/");
    });
  }

  render() {
    const {thread} = this.props;

    if (!thread) {
      return <div>Loading...</div>;
    }

    return (
        <div>
          <Link to="/">Back To Index</Link>
          <button
              className="btn btn-danger pull-xs-right"
              onClick={this.onDeleteClick.bind(this)}
          >
            Delete Discussion
          </button>
          <h3>{thread.title}</h3>
          <p>{thread.content}</p>
          <ul>
            {this.renderEntries(thread.entries)}
          </ul>

          <Comments onSubmit={this.onCommentSubmit.bind(this)}></Comments>
        </div>
    );
  }
}

function mapStateToProps({threads}, ownProps) {
  return {thread: threads[ownProps.match.params.id]};
}

export default connect(mapStateToProps,
    {fetchThread, deleteThread, updateThread})(
    ThreadsShow);