import React from "react";
import "./about.css";
import Build from "../../img/ratemybuild.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Build} alt="" className="a-image" />
        </div>
      </div>
      <div className="a-right">
      <div className="a-bg"></div>
          <h1 className="a-title">Who's the audience?</h1>
          <p className="a-desc">
            Tech.Development.Business.Law.Accounting.
            <br/>
            Media.Entertainment.Artists.Musicians.Designers.
            
          </p>
        <div className="a-bg">
        </div>
      </div>
    </div>
  );
};

export default About;
