import React, {Component} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import {FormGroup, Input} from 'reactstrap'

const url = "https://b2-experience.us3.list-manage.com/subscribe/post?u=815e1ef8762ca3060ae2d30f8&amp;id=e3f5f2340d";

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailAddress: '',
            postCode: '',
        };
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        // Update value in state
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        return {
            EMAIL: this.state.emailAddress,
            PCODE: this.state.postCode,
        };
    };

    formatMessage = (message) => {
        if (message.includes("0 - Please enter a value")) {
            return "Please enter your email address."
        }

        if (message.includes("0 - Please enter a value")) {
            return "Please enter your postcode."
        }

        if (message.includes("An email address must contain")) {
            return "Please enter a valid email address."
        }

        if (message.includes("The domain portion of the email address is invalid")) {
            return "Please enter a valid email address."
        }

        if (message.includes("This email cannot be added to this list")) {
            return "This email address is already registered. Please enter a different email address."
        }

        return message
    };

    render() {
        const SubmitButton = ({onValidated, submitBtnCopy}) => {
            const submit = () => {
                onValidated({
                    EMAIL: this.state.emailAddress,
                    PCODE: this.state.postCode,
                });

                console.log(this.state.emailAddress)
            };
            return (
                <Input
                    className={`btn btn--black ${this.props.className}__submit`}
                    type="submit"
                    value={submitBtnCopy}
                    onClick={submit}
                />
            )
        };

        const submitBtnCopy = this.props.submitBtnCopy ? this.props.submitBtnCopy : '';

        const color = "white";

        return (
            <MailchimpSubscribe
                url={this.props.url ? this.props.url : url}
                render={({subscribe, status, message}) => (
                    <>
                      
                      <FormGroup className="one-field">
                        <p className="form-title">Email*</p>
                            <Input
                                type="email"
                                name="emailAddress"
                                id="emailAddress"
                                className={`${this.props.className}__input email-field`}
                                value={this.state.emailAddress}
                                onChange={e => {
                                    this.handleChange(e)
                                }}
                            />
                        </FormGroup>
                        
                        <FormGroup className="one-field">
                         <p className="form-title">Postal Code*</p>
                            <Input
                                type="text"
                                name="postCode"
                                id="postCode"
                                className={`${this.props.className}__input width-50 name-field`}
                                value={this.state.postCode}
                                onChange={e => {
                                    this.handleChange(e)
                                }}
                            />
                        </FormGroup>


                        <FormGroup className="py-4">
                            <SubmitButton
                                onValidated={formData => subscribe(formData)}
                                submitBtnCopy={submitBtnCopy}
                                className="btn--black"
                            />
                        </FormGroup>
                     
                        {status === "sending" && <div style={{color: color}}>sending...</div>}
                        {status === "error" && (
                            <div
                                style={{
                                    color: "red",
                                    textAlign: "center",
                                    fontWeight: "700"
                                }}
                                dangerouslySetInnerHTML={{__html: this.formatMessage(message)}}
                            />
                        )}
                        {status === "success" && (
                                <div
                                    style={{
                                        color: "green",
                                        textAlign: "center",
                                        fontWeight: "700"
                                    }}
                                    dangerouslySetInnerHTML={{__html: 'Thank you for registering your interest in  Bat of out Hell, an imaginative and interactive immersion into the wondrous world of Dr. Seuss! As a registration benefit, you will receive priority notification and early access to tickets for the Toronto debut this fall. Stay tuned for further updates and we look forward to welcoming you to Bat of out Hell!'}}
                                />
                        )
                        }
                    </>
                )}
            />
        );
    }
}

export default SignUpForm;