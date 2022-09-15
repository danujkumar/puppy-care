import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const timer1 = ReactDOM.createRoot(document.getElementById('h1card1'));
// const timer2 = ReactDOM.createRoot(document.getElementById('h1card2'));
// const timer3 = ReactDOM.createRoot(document.getElementById('h1card3'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// timer1.
// var count1 = 500;
// var counterr1 = setInterval(() => {
//   count1++;
//   document.getElementById("h1card1").innerText = count1 + " +";
//   if (count1 === 630) {
//     clearInterval(counterr1);
//   }
// }, 10);

// var count2 = 0;
// var counterr2 = setInterval(() => {
//   count2++;
//   document.getElementById("h1card2").innerText = count2 + " +";
//   if (count2 === 90) {
//     clearInterval(counterr2);
//   }
// }, 10);

// var count3 = 0;
// var counterr3 = setInterval(() => {
//   count3++;
//   document.getElementById("h1card3").innerText = count3 + " +";
//   if (count3 === 80) {
//     clearInterval(counterr3);
//   }
// }, 10);

// var count4 = 700;
// var counterr4 = setInterval(() => {
//   count4++;
//   document.getElementById("h1card4").innerText = count4 + " +";
//   if (count4 === 820) {
//     clearInterval(counterr4);
//   }
// }, 10);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
