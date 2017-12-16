import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createThread} from "../actions";

class ThreadsNew extends Component {
  renderField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
        <div className={className}>
          <label>{field.label}</label>
          {field.type === 'input' ?
              <input className="form-control" type="text" {...field.input} /> :
              <textarea className="form-control" {...field.input}></textarea>
          }

          <div className="text-help">
            {touched ? error : ""}
          </div>
        </div>
    );
  }

  onSubmit(values) {
    this.props.createThread(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const {handleSubmit} = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
              label="Title For Discussion"
              name="title"
              type="input"
              component={this.renderField}
          />
          <Field
              label="Content"
              name="content"
              type="textarea"
              component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "ThreadsNewForm"
})(connect(null, {createThread})(ThreadsNew));
