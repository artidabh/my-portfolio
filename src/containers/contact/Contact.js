import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <div>
                {/* Render Phone Title and Number */}
                {contactInfo.number && (
                  <p className="contact-direct-info">
                    <strong>{contactInfo.phoneTitle}:</strong> {contactInfo.number}
                  </p>
                )}
                
                {/* Render Email Title and Address */}
                {contactInfo.email_address && (
                  <p className="contact-direct-info">
                    <strong>{contactInfo.emailTitle}:</strong> {contactInfo.email_address}
                  </p>
                )}

                <br />
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
