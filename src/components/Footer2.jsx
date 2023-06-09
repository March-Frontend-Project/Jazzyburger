import React from "react";
import vect from "../Assets/icons/Vector (10).png";
import vect1 from "../Assets/icons/Vector (12).png";
import vect2 from "../Assets/icons/Vector (13).png";
import vect4 from "../Assets/icons/Vector (14).png";
import vect5 from "../Assets/icons/image 10.png";
import icon1 from "../Assets/icons/Vector (3).png";
import icon2 from "../Assets/icons/Vector (4).png";
import icon3 from "../Assets/icons/Vector (15)ghhf.png";
import icon4 from "../Assets/icons/Vector (6).png";

const Footer2 = () => {
  return (
    <div className="main-cont">
      <footer>
        <div className="head col-md-12">
          <div className="first-container">
            <div className="padlock">
              <div className="vect1">
                <img src={vect} alt="" />
              </div>
              <div className="percent">
                <h1>100%</h1>
                <h3>Payment Secured</h3>
              </div>
            </div>

            <div className="TW-FS-support">
              <div className="vect">
                <img src={vect1} alt="" className="vect11" />
                <img src={vect2} alt="" className="vect2" />
              </div>

              <div className="twenty">
                <h1>24/7</h1>
                <h3>support</h3>
              </div>
            </div>
          </div>

          <div className="head2">
            <div className="download">
              <div className="download-img">
                <img src={vect4} alt="" className="img-fluid img1" />
              </div>
              <div className="dwnld-text">
                <a
                  href="http://https://apps.apple.com/ng/app/jazzys-burger/id1632442211"
                  target="_blank"
                >
                  <h1>Download on the</h1>
                  <h1>APP STORE</h1>
                </a>
              </div>
            </div>

            <div className="download">
              <div className="download-img">
                <img src={vect5} alt="" className="img-fluid img1" />
              </div>
              <div className="dwnld-text">
                <a
                  href="http://https://play.google.com/store/apps/details?id=co.awadigital.jazzyburger"
                  target="_blank"
                >
                  <h1>Get it on </h1>
                  <h1>GOOGLE PLAY</h1>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="general">
          <div className="help-link">
            <h1 className="">Need help</h1>
            <div className="link">
              <a href="tel:+234 466 6655">+234 466 6655 or</a>
            </div>
            <div className="link">
              <a href="http://help@jazzyburger.com">help@jazzyburger.com</a>
            </div>
          </div>

          <h1 className="follow-us">FOLLOW US</h1>

          <div className="Sm-icons">
            <div className="icons">
              <div>
                <a
                  href="https://web.facebook.com/112170038391085/posts/1588022294986034/?substory_index=1588022294986034&app=fbl&_rdc=1&_rdr"
                  target="_blank"
                >
                  <img className="icon1" src={icon1} alt="" />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/jazzysburger?t=Y1T3JvkqJbGDoK_sQaGyqw&s=08"
                  target="_blank"
                >
                  <img className="icon2" src={icon2} alt="" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/jazzysburger/?hl=en#"
                  target="_blank"
                >
                  <img className="icon3" src={icon3} alt="" />
                </a>
              </div>
              <div>
                <a href="https://www.jazzysburger.com/" target="_blank">
                  <img className="icon4" src={icon4} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <small> &copy; jjb concepts Developed by our digital LLC</small>
    </div>
  );
};

export default Footer2;
