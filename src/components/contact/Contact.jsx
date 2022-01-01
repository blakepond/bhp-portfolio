import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import Email from "../../img/icons/email-icon.png";
import Phone from "../../img/icons/phone-icon.png";
import Twitter from "../../img/icons/twitter-icon.png";
import LinkedIn from "../../img/icons/linkedin-icon.png";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uqn1jwr",
        "template_i2gzcdi",
        formRef.current,
        "user_JWuDgl7QSffGpVT5PM5BK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"style={{ backgroundColor: darkMode && "white" }}></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Who to call?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              iweicollaborative@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              208 557-1164
            </div>
            <div className="c-info-item">
              <a
                style={{color: darkMode && "white"}} 
                href="https://twitter.com/blakepond33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="" className="c-icon" />
                @blakepond33
              </a>
            </div>
            <div className="c-info-item">
              <a
              style={{color: darkMode && "white"}} 
                href="https://www.linkedin.com/in/blake-pond-773098224/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="" className="c-icon" />
                @blake-pond
              </a>
            </div>
            <div className="c-info-item"></div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                cols="30"
                rows="10"
                placeholder="Message"
                name="message"
              />
              <button>Submit</button>
              {done && "Email submitted"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
