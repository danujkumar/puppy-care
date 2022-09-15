import React from 'react';
// import Button from 'material-ui/Button';
const paw = "fa-solid fa-paw";

export default function MContainer() {
    return (
        <div className="mContainer">
        <div className="mmContainer">
          <div className="help">
            {/* Here the footsteps to be come */}
            <div className="paws">
              <div className="oneP">
                <i className={paw}></i>
              </div>
              <div className="twoP">
                <i className={paw}></i>
              </div>
              <div className="threeP">
                <i className={paw}></i>
              </div>
            </div>

            {/* Here the helper message is to come */}
            <div className="afterPaw">
              <h3 id="helper1">How we can help you properly</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, at unde nam maiores eius nisi
                praesentium, fugit quos, dolor ratione nobis nihil laboriosam veritatis natus velit dignissimos
                esse
                impedit hic dolores. Soluta deleniti laudantium omnis ipsa at quibusdam cum obcaecati?</p>
              <a href="www.google.com" className="but" id="discover">
                Discover More
              </a>
            </div>
          </div>
          <div className="properties">
            <div className="fourProp">
              <div className="smalldes" id="des1">
                <i className="fa-brands fa-medrt"></i>
              </div>
              <h4 className="props">Full diagnostics</h4>
              <p className="proppara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptas?
              </p>
            </div>

            <div className="fourProp">
              <div className="smalldes" id="des2">
                <i className="fa-solid fa-medal"></i>
              </div>
              <h4 className="props">Awarded service</h4>
              <p className="proppara">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, obcaecati?
              </p>
            </div>

            <div className="fourProp">
              <div className="smalldes" id="des3">
                <i className="fa-solid fa-bone"></i>
              </div>
              <h4 className="props">Dog Breeding</h4>
              <p className="proppara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tenetur!
              </p>
            </div>

            <div className="fourProp">
              <div className="smalldes" id="des4">
                <i className="fa-solid fa-paw"></i>
              </div>
              <h4 className="props">Dog Training</h4>
              <p className="proppara">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, corporis?
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}