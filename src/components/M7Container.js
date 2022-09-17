import React from 'react';
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Officiis quia ad saepe id repudiandae eius veritatis obcaecati esse similique 
            consequatur magni dolor reiciendis sapiente, numquam, 
            laborum ipsum pariatur fuga optio recusandae quasi error. 
            Quo veniam porro est, illo distinctio non!hbfdhfdgidfg
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
            <i className="fa-solid fa-circle" onClick=""></i>
            <i className="fa-regular fa-circle" onClick=""></i>
            <i className="fa-regular fa-circle" onClick=""></i>
            <i className="fa-regular fa-circle" onClick=""></i>
          </div>
        </div>
      </div>
      <div className="aboutus2">
        <img src={about2} alt="" />
      </div>
    </div>
  )
}