import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="container-footer">
            <div className="footer-coll">
                <h4>About</h4>
                <ul className="ull">
                    <li>Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</li>
                </ul>
                <div className="social-links">
                    <a href='www.google.com'><i className="fab fa-facebook-f"></i></a>
                    <a href='www.google.com'><i className="fab fa-twitter"></i></a>
                    <a href='www.google.com'><i className="fab fa-instagram"></i></a>
                    <a href='www.google.com'><i className="fab fa-google-plus"></i></a>
                    <a href='www.google.com'><i className="fab fa-linkedin-in"></i></a>
                    <a href='www.google.com'><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className="footer-coll fcol-2">
                <h4>Quick Link</h4>
                <ul className="ull">
                    <li><a href='www.google.com'>About Us</a></li>
                    <li><a href='www.google.com'>Our Clients</a></li>
                    <li><a href='www.google.com'>Services</a></li>
                    <li><a href='www.google.com'>Blog Posts</a></li>
                    <li><a href='www.google.com'>Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-coll fcol-3">
                <h4>Contact Info</h4>
                <ul className="ull">
                    <li><a href='www.google.com'>10001, 5th Avenue, #32841 block, USA</a></li>
                    <li><a href='www.google.com'>+1223 456 790</a></li>
                    <li><a href='www.google.com'>info@example.com</a></li>
                    <li><a href='www.google.com'>www.example.com</a></li>
                </ul>
            </div>
            <div className="footer-coll">
                <h4>Newsletter</h4>
                    <input type="text" className="searchTerm" placeholder="Enter Keyword..."/>
                <ul className="ull">
                    <div className="searches">
                         <button type="submit" className="searchButton">
                             <span className="fa fa-paper-plane" aria-hidden="true"></span>
                        </button>
                    </div>
                    <li id='news'>Subscribe to our mailing list
                        and get updates to your email inbox.</li>
                </ul>
            </div>
        </div>
    <ul id="copyright">
        <li>© 2021 Puppy Care. All rights reserved. Design by DAKS Technologies</li>
    </ul>
</footer>
  )
}
