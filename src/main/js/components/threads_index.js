import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchThreads} from "../actions";

class ThreadsIndex extends Component {
  componentDidMount() {
    this.props.fetchThreads();
  }

  renderThreads() {
    return _.map(this.props.threads, thread => {
      return (
          <li className="list-group-item" key={thread.id}>
            <Link to={`/threads/${thread.id}`}>
              {thread.title}
            </Link>
          </li>
      );
    });
  }

  render() {
    return (
        <div>
          <div className="text-xs-right">
            <Link className="btn btn-primary" to="/threads/new">
              Add a Discussion
            </Link>
          </div>
          <h3>Discussions</h3>
          <ul className="list-group">
            {this.renderThreads()}
          </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {threads: state.threads};
}

export default connect(mapStateToProps, {fetchThreads})(ThreadsIndex);