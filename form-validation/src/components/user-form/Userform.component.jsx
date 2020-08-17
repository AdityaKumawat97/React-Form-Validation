import React, { Component } from "react";
import formValid from '../../Validation/validateForm'
import { candidateIDRegex, projectIDRegex, verifyLocation, shoreRegex } from '../../Validation/regexStore'
import './Userform.styles.css'


class UseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            candidateID: null,
            projectID: null,
            siteLocation: null,
            location: null,
            FinalError: '',
            success: '',
            skills: [],
            formErrors: {
                firstName: "",
                lastName: "",
                candidateID: "",
                projectID: "",
                siteLocation: "",
                location: ""
            },
        };
    }
    checbox = (e) => {
        let newSkill = e.target.value
        // console.log(newSkill)

        if (this.state.skills.includes(newSkill)) {
            let skillArrayCopy = this.state.skills
            var index = skillArrayCopy.indexOf(newSkill)
            if (index > -1) {
                skillArrayCopy.splice(index, 1)
                this.setState({ skills: skillArrayCopy }, () => console.log(this.state.skills))
            }
        } else {
            this.setState({ skills: [...this.state.skills, newSkill] }, () => console.log(this.state.skills))
        }

        // if (!this.state.skills.length > 0) {
        //     this.setState({ skills: [newSkill] })
        // } else {
        //     this.state.skills.forEach(skill => {
        //         if (skill === newSkill) {
        //             this.setState({ skills: [...this.state.skills] }, () => console.log('skill already exits'))
        //         } else {
        //             this.setState({ skills: [...this.state.skills, newSkill] }, () => console.log(this.state.skills))
        //         }
        //     })
        // }

        // console.log(this.state.skills)

    }
    handleSubmit = async e => {
        e.preventDefault();
        console.log("runs")
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
                    value.length > 4 && value.length < 30 ? "" : "minimum 3 characaters required";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length > 3 && value.length < 30 ? "" : "minimum 3 characaters required";
                break;
            case "candidateID":
                formErrors.candidateID = candidateIDRegex.test(value)
                    ? ""
                    : "Invalid Candidate ID"
                break;
            case "projectID":
                formErrors.projectID = projectIDRegex.test(value)
                    ? ""
                    : "Invalid Project ID"
                break;
            case "siteLocation":
                formErrors.siteLocation = shoreRegex.test(value)
                    ? ""
                    : "Please select one option"
                break;
            case "location":
                formErrors.location = verifyLocation.test(value)
                    ? "Please select one option"
                    : ""
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

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
                        <div className="firstName">
                            <label htmlFor="candidateID">Candidate ID</label>
                            <input
                                className={formErrors.candidateID.length > 0 ? "error" : null}
                                placeholder="Candidate ID"
                                type="text"
                                name="candidateID"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.candidateID.length > 0 && (
                                <span className="errorMessage">{formErrors.candidateID}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="projectID">Project ID</label>
                            <input
                                className={formErrors.projectID.length > 0 ? "error" : null}
                                placeholder="Project ID"
                                type="text"
                                name="projectID"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.projectID.length > 0 && (
                                <span className="errorMessage">{formErrors.projectID}</span>
                            )}
                        </div>
                        <div className="Radio">
                            <input
                                className={formErrors.siteLocation.length > 0 ? "error" : null}
                                type="radio"
                                name="siteLocation"
                                value="Offshore"
                                id="site1"
                                onChange={this.handleChange}
                                required
                            />
                            <label htmlFor="site1">Offshore</label>
                            <input
                                className={formErrors.siteLocation.length > 0 ? "error" : null}
                                type="radio"
                                name="siteLocation"
                                value="Onshore"
                                id="site2"
                                onChange={this.handleChange}
                                required
                            />
                            <label htmlFor="site2">Onshore</label>
                            {formErrors.siteLocation.length > 0 && (
                                <span className="errorMessage">{formErrors.siteLocation}</span>
                            )}
                        </div>
                        <div className="password">
                            <select name="location" onChange={this.handleChange} required >
                                <option defaultValue="SELECT A LOCATION">SELECT A LOCATION</option>
                                <option className={this.state.siteLocation === "Offshore" ? "showOpt" : "hidealert"} value="Chennai">Chennai</option>
                                <option className={this.state.siteLocation === "Offshore" ? "showOpt" : "hidealert"} value="Bangalore">Bangalore</option>
                                <option className={this.state.siteLocation === "Onshore" ? "showOpt" : "hidealert"} value="US">US</option>
                                <option className={this.state.siteLocation === "Onshore" ? "showOpt" : "hidealert"} value="non US">non US</option>

                            </select>
                            {formErrors.location.length > 0 && (
                                <span className="errorMessage">{formErrors.location}</span>
                            )}
                        </div>

                        <div className="" onChange={this.checbox}>
                            <div className="item">
                                <input type="checkbox" name="skills" id="1" value="HTML,CSS,JS" />
                                <label htmlFor="1">HTML,CSS,JS</label>
                            </div>
                            <div className="item">
                                <input type="checkbox" name="skills" id="2" value="ES5,ES6,ES7" />
                                <label htmlFor="1">ES5,ES6,ES7</label>
                            </div>
                        </div>
                        <div className="createAccount">
                            <button type="submit" >Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default UseForm;
