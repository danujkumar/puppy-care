import React, { useEffect, useState, useRef } from 'react';
import about1 from '../images/about1.jpg';
export default function M5Container() {

  const [counter1, setCounter1] = useState(300);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(400);
  const [counter4, setCounter4] = useState(0);

  const myRef = useRef();
  const [myElementIsVisible, setMyElementsIsVisible] = useState(false);
  console.log('myElementIsVisible', myElementIsVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementsIsVisible(entry.isIntersecting);
    })
    observer.observe(myRef.current);
  }, [myElementIsVisible]);

  useEffect(() => {
      const interval = setTimeout(() => {
        setCounter1((counter1) => counter1 + 1);
      }, (1 / 40) * 1000);
      if (myElementIsVisible === true)
      {
        if(counter1===630)
          clearTimeout(interval);
        else
          return ()=> clearTimeout(interval);
      }
      else
        clearTimeout(interval);
    
    console.log(myElementIsVisible, counter1);
  }, [myElementIsVisible,counter1]);

  useEffect(() => {
      const interval = setTimeout(() => {
        setCounter2((counter2) => counter2 + 1);
      }, (1 / 8) * 1000);
      if (myElementIsVisible === true)
      {
        if(counter2===80)
          clearTimeout(interval);
        else
          return ()=>clearTimeout(interval);
      }
    else
      clearTimeout(interval);

    console.log(myElementIsVisible, counter2);
  }, [myElementIsVisible,counter2]);

  useEffect(() => {
      const interval = setTimeout(() => {
        setCounter3((counter3) => counter3 + 1);
      }, (1 / 51) * 1000);
      if (myElementIsVisible === true) {
        if (counter3 === 820)
          clearTimeout(interval)
        else
          return () => clearTimeout(interval);
      }
    else
      clearTimeout(interval);

    console.log(myElementIsVisible, counter3);
  }, [myElementIsVisible, counter3]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCounter4((counter4) => counter4 + 1);
    }, (1 / 9) * 1000);
    if (myElementIsVisible === true) {
      if (counter4 === 90)
        clearTimeout(interval);
      else
        return () => clearTimeout(interval);
    }
    else
      clearTimeout(interval);

    console.log(myElementIsVisible, counter4);
  }, [myElementIsVisible, counter4]);

  return (
    <div className="mContainer m5Container" ref={myRef}>
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
                {counter1} +
              </h1>
              <h2>
                HAPPY CLIENTS
              </h2>
            </div>
            <div className="cards" id="card2">
              <h1 id='h1card2'>
                {counter2} +
              </h1>
              <h2>
                PROFESSIONALS
              </h2>
            </div>
            <div className="cards" id="card3">
              <h1 id="h1card3">
                {counter3} +
              </h1>
              <h2>
                ADOPTED PETS
              </h2>
            </div>
            <div className="cards" id="card4">
              <h1 id="h1card4">
                {counter4} +
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