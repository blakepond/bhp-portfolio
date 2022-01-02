import React from "react";
import "./intro.css";
import Profile from '../../img/IMG_0437.png'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I'm </h2>
          <h3 className="i-name">blake pond</h3>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">mountain man</div>
              <div className="i-title-item">web developer</div>
              <div className="i-title-item">ui/ux designer</div>
              <div className="i-title-item">entrepreneur</div>
              <div className="i-title-item">musician</div>
            </div>
          </div>
          {/* <p className="i-desc">This is my personal brand.</p> */}
          {/* <p className="i-desc">Collaboration starts here.</p> */}
          <p className="i-q">innovate or collaborate</p>
   
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
        </div>
          <img className="i-image" src={Profile} alt="" />
      </div>
    </div>
  );
};

export default Intro;
