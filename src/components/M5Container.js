import React from 'react';
import about1 from '../images/about1.jpg';
// import Button from 'material-ui/Button';
export default function M5Container() {
    return (
        <div className="mContainer m5Container">
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
            <h3 id="helper4">Our activities and experience</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, architecto beatae mollitia iusto
              quaerat numquam.</p>
            <div id="propss">
              <div className="cards" id="card1">
                <h1 id="h1card1">
                  630 +
                </h1>
                <h2>
                  HAPPY CLIENTS
                </h2>
              </div>
              <div className="cards" id="card2">
                <h1 id='h1card2'>
                  80 +
                </h1>
                <h2>
                  PROFESSIONALS
                </h2>
              </div>
              <div className="cards" id="card3">
                <h1 id="h1card3">
                  820 +
                </h1>
                <h2>
                  ADOPTED PETS
                </h2>
              </div>
              <div className="cards" id="card4">
                <h1 id="h1card4">
                  90 +
                </h1>
                <h2>
                  AWARDS
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus">
          <img src={about1} alt="" />
        </div>
      </div>
    )
}