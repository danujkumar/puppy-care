import React from 'react';
// import Button from 'material-ui/Button';
export default function M6Container() {
    return (
        <div className="m6Container">
        <div className="help" id="help1">
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
            <h3 id="helper5">Latest Blog Post</h3>
          </div>
        </div>
        <div className="blogpost afterPaw">
          <div className="blog">
            <div id="backimage1" className="backimage"></div>
            <div>
              <h5>
                <i className="fa-solid fa-clock" /*style="padding-right:4px;"*/ ></i>
                AUG 1, 2021
              </h5>

              <div className="bloginfo">
                <h2 className="h1">
                  Domestic animals can save you from
                  loneliness
                </h2>
                <div>
                  <a href="www.facebook.com" className="readMore">
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                  <a href="www.facebook.com" className="readMore">
                    <i className="fa-regular fa-comment"></i> 3 Comments
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div className="blog">
            <div id="backimage2" className="backimage"></div>
            <div>
              <h5>
                <i className="fa-solid fa-clock" /*style="padding-right:4px;"  */></i>
                AUG 2, 2021
              </h5>

              <div className="bloginfo">
                <h2 className="h22">
                  How to bond with your new rescue pet?
                </h2>
                <div>
                  <a href="www.google.com" className="readMore">
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                  <a href="www.google.com" className="readMore">
                    <i className="fa-regular fa-comment"></i> 3 Comments
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div className="blog">
            <div id="backimage3" className="backimage"></div>
            <div>
              <h5>
                <i className="fa-solid fa-clock" /*style="padding-right:4px;"*/></i>
                AUG 3, 2021
              </h5>

              <div className="bloginfo">
                <h2 className="h222">
                  What happens if a dog does not get adopted?
                </h2>
                <div>
                  <a href="www.google.com" className="readMore">
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                  <a href="www.google.com" className="readMore">
                    <i className="fa-regular fa-comment"></i> 3 Comments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}