import React, {Component} from 'react'
import {Field, Form, reduxForm} from 'redux-form'
import { SubmissionError } from 'redux-form'
import {bindActionCreators} from "redux";
import {getGeneralInfo} from "../store/actions/generalInfoActions";
import {connect} from "react-redux";
import { submit } from 'redux-form'
import {submitSendEmail} from "../common/SubmitSendEmail";

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.message) {
    errors.message = 'Required'
  } else if (values.message.length < 50) {
    errors.message = 'Must be more than 50 characters'
  }
  return errors
}

class ContactMe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      name: null,
      message: null,
    }
  }

  componentDidMount() {

  }


  renderField =
    ({
       input,
       label,
       type,
       meta: {touched, error, warning}
     }) => (
      <div className="wrap">
        <input {...input} placeholder={label} type={type}/>
        {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-warning">{warning}</span>))}
      </div>
    )
  renderFieldTextArea =
    ({
       input,
       label,
       type,
       meta: {touched, error, warning}
     }) => (
      <div className="wrap">
        <textarea {...input} placeholder={label} type={type}></textarea>
        {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-warning">{warning}</span>))}
      </div>
    )

  submitForm = () => {
    console.log('submitForm')
    this.props.dispatch(submit('contact-me'))
  }

  render() {

    const { handleSubmit, pristine, reset, submitting, error } = this.props;

    return (
      <div className="dct_tm_section" id="contact">
        <div className="container">
          <div className="dct_tm_title_holder contact">
            <h3>Contact Me</h3>
            <span>Get in touch with me</span>
          </div>
        </div>
        <div className="dct_tm_footer_contact_wrapper_all">
          <div className="dct_tm_contact_wrap_all">
            <div className="container">
              <div className="leftbox">
                <div className="dct_tm_mini_title_holder contact">
                  <h4>Get in Touch</h4>
                </div>
                <div className="short_info_wrap">
                  <ul>
                    <li><p><label>Address:</label><span>123 Qwerty Avenue NYC, USA</span></p></li>
                    <li><p><label>Email:</label><span><a
                      href="mailto:example@gmail.com">example@gmail.com</a></span></p></li>
                    <li><p><label>Phone:</label><span>+77 022 177 05 05</span></p></li>
                    <li><p><label>Website:</label><span><a
                      href="mailto:example@gmail.com">www.yourdomain.com</a></span></p></li>
                  </ul>
                </div>
              </div>
              <div className="rightbox">
                <div className="dct_tm_contact_wrap">
                  <div className="main_input_wrap">
                    <Form onSubmit={handleSubmit} className="contact_form" id="contact-me">

                      <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                      <Field name="name" type="text" component={this.renderField} label="Your Name" />
                      <Field name="email" type="email" component={this.renderField} label="Your Email" />
                      <Field name="message" type="text" component={this.renderFieldTextArea} label="Your Message" />
                      {/*<div className="wrap">
                        <textarea id="message" placeholder="Your Message"></textarea>
                      </div>*/}
                      {error && <div className="returnmessage text-danger">{error}</div>}
                      <div className="dct_tm_button">
                        <a id="send_message" onClick={this.submitForm}><span>Send Message</span></a>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dct_tm_footer_wrap">
            <div className="container">
              <p>&copy; Copyright 2019. All Rights are Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ContactMe = reduxForm({
  form: 'contact-me', // a unique identifier for this form
  validate,
  onSubmit: submitSendEmail
})(ContactMe)

const mapStateToProps = (state) => ({
  jobTitles: state.general.jobTitles,
  firstName: state.general.firstName,
  lastName: state.general.lastName,
  definition: state.general.definition,
  detail: state.general.detail,
  abilities: state.abilities,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getGeneralInfo,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactMe)