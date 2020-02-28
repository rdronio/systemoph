import React, { Component } from "react";
import { Segment, Image } from "semantic-ui-react";

// import LogoMaintenance from './images/logo.png';
import facebookImg from "./images/facebook.png";
import linkedinImg from "./images/linkedin.png";
import blueBG from "./images/bluebg.jpg";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "//systemoph.us4.list-manage.com/subscribe/post?u=83e019efd7d7d0a82d55147a0&amp;id=d23019694a";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

export default class MailChimp extends Component {
  render() {
    return (
      <Segment
        id="contactus_"
        className="mailchimp"
        vertical
        textAlign="center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.46), rgba(255, 255, 255, 0)), url(${blueBG})`
        }}
      >
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div className="mailchimp-content">
              <div className="mailchimp-title">
                {" "}
                Subscribe to our newsletter and stay updated.{" "}
              </div>
              <SimpleForm onSubmitted={formData => subscribe(formData)} />
              {status === "sending" && (
                <div style={{ color: "blue" }}>sending...</div>
              )}
              {status === "error" && (
                <div
                  style={{ color: "red" }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === "success" && (
                <div style={{ color: "green" }}>Subscribed !</div>
              )}
              <div className="mailchimp-social">
                <Image
                  src={facebookImg}
                  className="mailchimp-facebook"
                  href="http://facebook.com/systemoph"
                />
                <Image
                  src={linkedinImg}
                  className="mailchimp-linkedin"
                  href="http://linkedin.com"
                />
              </div>
            </div>
          )}
        />
      </Segment>
    );
  }
}
