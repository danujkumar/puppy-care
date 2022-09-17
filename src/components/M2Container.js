import React from 'react';
export default function M2Container() {
    return (
        <div className="mContainer m2Container">
        <div id="videos">
          <div id="image">
            <div id="playBut">
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
        <div className="help">
          <div className="paws">
            <div className="oneP">
              <i className="fa-solid fa-paw"></i>
            </div>
            <div className="twoP">
              <i className="fa-solid fa-paw"></i>
            </div>
            <div className="threeP">
              <i className="fa-solid fa-paw"></i>
            </div>
          </div>
          <div className="afterPaw">
            <h3 id="helper2">We will make them truly happy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, architecto beatae mollitia iusto
              quaerat numquam.</p>
            <ul>
              <li>
                <a href="www.youtube.com" className="features"><i className="fa-solid fa-circle-check"></i>certified groomer</a>
              </li>
              <li>
                <a href="www.youtube.com" className="features"><i className="fa-solid fa-circle-check"></i>20 years of experience</a>
              </li>
              <li>
                <a href="www.youtube.com" className="features"><i className="fa-solid fa-circle-check"></i>Animal Lover</a>
              </li>
            </ul>
            <a href="www.youtube.com" className="but" id="discover">
              Learn More
            </a>
          </div>
        </div>
      </div>
    )
}