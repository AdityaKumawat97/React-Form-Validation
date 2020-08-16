import React, { Component } from "react";
import formValid from '../../Validation/validateForm'
import { emailRegex, passwordRegex } from '../../Validation/regexStore'
import './Userform.styles.css'


class UseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            FinalError: '',
            success: false,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            },
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        const isValid = await formValid(this.state)
        if (isValid) {
            this.setState({ FinalError: false })
            this.setState({ success: true }, () => console.log(this.state.success))
        } else {
            this.setState({ FinalError: true })
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password = passwordRegex.test(value)
                    ? ""
                    : `The password should have atleast: 
                       6 characters & 
                       contain at least one numeric digit and one uppercase and one lowercase letter`
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value });
    };

    render() {
        const { formErrors, FinalError, success } = this.state;

        return (
            <div>
                <div className={FinalError ? 'hide' : success ? "alert alert-success" : "hide"}>
                    <h4 className="alert-heading">Well done!</h4>
                    <hr />
                </div>
                <div className="form-wrapper">
                    <div className={FinalError ? "alert alert-danger" : "hidealert"}>
                        ENTER VALID DETAILS
                    </div>
                    <h1 className="formHeading">Form Validation</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className={formErrors.lastName.length > 0 ? "error" : null}
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default UseForm;
