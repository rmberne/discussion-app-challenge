import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {updateThread} from "../actions";

class Comments extends Component {
  renderCommentArea(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
        <div className={className}>
          <textarea className="form-control" {...field.input}></textarea>
          <div className="text-help">
            {touched ? error : ""}
          </div>
        </div>
    );
  }

  onSubmit(values) {
    console.log(this.props);
    console.log(values);
    // this.props.updateThread(values, () => {
    //   this.props.history.push("/");
    // });
  }

  render() {
    const {handleSubmit} = this.props;

    return (
        <form className="comments-new"
              onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
              name="comment"
              type="textarea"
              component={this.renderCommentArea}
          />
          <button type="submit" className="btn btn-primary">Add Comment</button>
        </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.comment) {
    errors.comment = "Enter a comment";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "CommentsForm"
})(connect(null, {updateThread})(Comments));
