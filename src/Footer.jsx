import React from "react";
import "./footer.css";
import logo from "./img/logo (2).png";
const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
        <img style={{
            "width":"40%",
            
          }} src={logo} alt="logo"/>
        </h3>

      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <a href="https://www.google.com/maps/place/The+Kitchen+Villa/@26.9110681,75.7405704,17z/data=!3m1!4b1!4m6!3m5!1s0x396db5488c3a97c9:0xe2f543451bb9afde!8m2!3d26.9110681!4d75.7431453!16s%2Fg%2F11kk6vz6p3?entry=ttu" target="_blank">
            <span>The Kitchen Villa, F-1, EVERSHINE TOWER, </span> Amrapali Circle, Vaishali Nagar, Jaipur, Rajasthan 302021
          </a></p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+91-8769724535</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a target="_blank" href="mailto:thekitchenvillarestro@gmail.com">
              thekitchenvillarestro@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
        <span>Copyright © The Kitchen Villa</span>
        thekitchenvilla.co.in | All rights reserved.
     
        </p>

        <div class="footer-icons">
          <a href="https://in.linkedin.com/in/the-kitchen-villa-738b7726a" target="blank">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
