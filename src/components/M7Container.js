import React from 'react';
// import Button from 'material-ui/Button';
import about2 from '../images/about2.jpg';
import testi1 from '../images/testi1.jpg';
export default function M7Container() {
    return (
        <div className="mContainer m7Container">
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
            <h3 id="helper6">What our clients think about us</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, voluptates expedita! Autem fugit vel
              delectus est quos eligendi asperiores amet a sit voluptatibus! Ratione at repellat magni, architecto
              debitis tempora iure error fugit quos aut?
            </p>
            <div id="name">
              <img src={testi1} alt="" id="testers" />
              <div id="testname">
                <h2>
                  John Wilson
                </h2>
                <p>Subtitles goes here</p>
              </div>
            </div>

            <div id="dotbut">
              <i className="fa-solid fa-circle"></i>
              <i className="fa-regular fa-circle"></i>
              <i className="fa-regular fa-circle"></i>
              <i className="fa-regular fa-circle"></i>
            </div>
          </div>
        </div>
        <div className="aboutus2">
          <img src={about2} alt="" />
        </div>
      </div>
    )
}