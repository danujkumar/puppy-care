import React from 'react';
// import Button from 'material-ui/Button';
export default function M3Container() {
    return (
        <div className="mContainer m3Container">
        <div className="faqs">
          <div className="question">
            <div className="dropdown">
              <h5 id="one">
                01. Why pet is a part of our life?
              </h5>
              {/* <i class="fa-thin fa-circle-chevron-down"></i> */}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem illum in aliquid eos non,
              et labore maiores porro. At totam dolor laborum perferendis voluptatem inventore ea eius fuga rerum
              hic nisi, nobis maiores, distinctio eos sequi pariatur. Pariatur earum, consequuntur vero et
              possimus ducimus optio sit nisi blanditiis dolores hic quaerat quia quam cumque provident voluptas
              at fugit aliquam numquam omnis ad eveniet deserunt!
            </p>
            <div className="dropdown">
              <h5 id="two">
                02. How we take care about our pet?
              </h5>
              {/* <i class="fa-thin fa-circle-chevron-down"></i> */}
            </div>
            <div className="dropdown">
              <h5 id="three">
                03. Which pet you choose and Why?
              </h5>
              {/* <i class="fa-thin fa-circle-chevron-down"></i> */}
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
            <h3 id="helper3">We are working for the community</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, architecto beatae mollitia iusto
              quaerat numquam.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio officiis repellat
              nihil laudantium error!
            </p>
            <div id="phone">
              <i className="fa-solid fa-phone-volume"> </i>
              +(91) 9424255189
            </div>
          </div>
        </div>
      </div>
    )
}