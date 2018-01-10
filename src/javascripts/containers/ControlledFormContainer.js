import React, {Component} from 'react';
import ControlledForm from '../components/ControlledForm';
import {validateForm} from '../helpers';
import validate from 'validate.js';

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: '',
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    switch (e.target.name) {
      case 'exampleEmail':
        const formConstraints = {
          exampleEmail: {
            presence: true,
            email: true,
          },
        };
        const emailData = {
          exampleEmail: this.state.exampleEmail,
        };
        const errors = validate(emailData, formConstraints);
        if (errors) {
          this.setState({
            errors: {
              ...this.state.errors,
              exampleEmail: errors,
            },
          });
        }
        else {
          this.setState({
            errors: {
              ...this.state.errors,
              exampleEmail: []
            }
          })
        }
      default:
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      exampleEmail: this.state.exampleEmail,
      examplePassword: this.state.examplePassword,
      exampleURL: this.state.exampleURL,
    };
    const errors = validateForm(data);
    if (errors) {
      this.setState({errors});
    } else {
      console.log(this.state);
      this.formSuccess();
    }
  };

  formSuccess = () => {
    this.setState(
      {
        success: true,
        errors: {},
        exampleEmail: '',
        examplePassword: '',
        exampleURL: '',
      },
      () => console.log('Success!'),
    );
  };

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        {...this.state}
      />
    );
  }
}

export default ControlledFormContainer;
