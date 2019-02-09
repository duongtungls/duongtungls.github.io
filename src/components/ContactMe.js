import React, { Component } from 'react'

class ContactMe extends Component {
  constructor(props) {
    super(props)

    this.state = {loaded: false}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      })
    }, 1000)
  }

  render() {
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
                    <form action="/" method="post" className="contact_form" id="contact_form">
                      <div className="returnmessage"
                           data-success="Your message has been received, We will contact you soon."></div>
                      <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                      <div className="wrap">
                        <input id="name" type="text" placeholder="Your Name" />
                      </div>
                      <div className="wrap">
                        <input id="email" type="text" placeholder="Your Email" />
                      </div>
                      <div className="wrap">
                        <textarea id="message" placeholder="Your Message"></textarea>
                      </div>
                      <div className="dct_tm_button">
                        <a id="send_message" href="#"><span>Send Message</span></a>
                      </div>
                    </form>
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

export default ContactMe;