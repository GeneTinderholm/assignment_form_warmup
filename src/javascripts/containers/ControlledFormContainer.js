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
    let formConstraints;
    let errors;
    let obj;
    switch (e.target.name) {
      case 'exampleEmail':
        formConstraints = {
          exampleEmail: {
            presence: true,
            email: true,
          },
        };
        const emailData = {
          exampleEmail: this.state.exampleEmail,
        };
        errors = validate(emailData, formConstraints);
        if (errors) {
          this.setState({
            errors: {
              ...this.state.errors,
              exampleEmail: errors.exampleEmail,
            },
          });
        } else {
          obj = this.state.errors;
          delete obj.exampleEmail
          this.setState({
            errors: obj
          })
        }
        break;
      case 'examplePassword':
        formConstraints = {
          examplePassword: {
            presence: true,
            length: {
              minimum: 12
            }
          },
        };
        const passwordData = {
          examplePassword: this.state.examplePassword,
        };
        errors = validate(passwordData, formConstraints);
        if (errors) {
          this.setState({
            errors: {
              ...this.state.errors,
              examplePassword: errors.examplePassword
            }
          });
        } else {
          obj = this.state.errors;
          delete obj.examplePassword
          this.setState({
            errors: obj
          })
        }
        break;
      case 'exampleURL':
        formConstraints = {
          exampleURL: {
            presence: true,
            length: {
              minimum: 12
            }
          },
        };
        const URLData = {
          exampleURL: this.state.exampleURL,
        };
        errors = validate(URLData, formConstraints);
        if (errors) {
          this.setState({
            errors: {
              ...this.state.errors,
              exampleURL: errors.exampleURL
            }
          });
        } else {
          obj = this.state.errors;
          delete obj.exampleURL
          this.setState({
            errors: obj
          })
        }
        break;
      default:
        console.log("e.target.name: ", e.target.name);
        
        break;
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
