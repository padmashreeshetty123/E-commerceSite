import { collapse_filter } from "./Footer.js";
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className='footer-top'>
        <div id="images">
          <p id='follow'>Follow Us</p>
          <i className="fa fa-facebook" style={{fontSize:22}}></i>
          <i className="fa fa-twitter" style={{fontSize:22}}></i>
          <i className="fa fa-instagram" style={{fontSize:22}}></i>
          <i className="fa fa-pinterest" style={{fontSize:22}}></i>
          <i className="fa fa-youtube-play" style={{fontSize:22}}></i>
          <i className="fa fa-linkedin" style={{fontSize:22}}></i>
        </div>
        <div id="form">
          <p>
            Enter your email to receive news, promotions, and information about
            Kohler.
          </p>
          <form action="#">
            <input type="email" name="" placeholder="Email Address" id="" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>Stores</p>
            <ul>
              <li>About KOHLER Stores</li>
              <li>Find a Store</li>
              <li>KOHLER Store Careers</li>
              <li>KOHLER Collection</li>
            </ul>
          
        </div>
        <div>
          <p>Resources</p>
            <ul>
              <li>Suppliers</li>
              <li>Careers</li>
              <li>Press Room</li>
              <li>Literature</li>
              <li>Samples</li>
              <li>Kohler Partner Network</li>
            </ul>
       
        </div>
        <div>
          <p>Help</p>
            <ul>
              <li>Help & FAQ</li>
              <li>Track Your Order</li>
              <li>Shipping & Deliveries</li>
              <li>Returns</li>
              <li>Product Registration</li>
              <li>Contact Us</li>
              <li>Warranty</li>
              <li>Terms & Conditions</li>
              <li>Care & Cleaning</li>            
              </ul>
         
        </div>
        <div>
          <p>About Us</p>
            <ul>
              <li>150th Anniversary</li>
              <li>Who We Are</li>
              <li>Our Brands/Businesses</li>
              <li>Heritage</li>
              <li>Social Impact</li>
              <li>Sustainability</li>
              <li>Diversity & Inclusion</li>
            </ul>
         
        </div>
      </div>
      <div className="footer-bottom-buttons">
        <button
            type="button"
            className="footer_collapsible"
            onClick={() => {
              collapse_filter(0);
            }}
          >
            Stores <div className="plus-icon">+</div>
          </button>
          <div className="footer_button_content">
          <ul>
              <li>About KOHLER Stores</li>
              <li>Find a Store</li>
              <li>KOHLER Store Careers</li>
              <li>KOHLER Collection</li>
            </ul>
          </div>
          <button
            type="button"
            className=" footer_collapsible"
            onClick={() => {
              collapse_filter(1);
            }}
          >
         Resources <div className="plus-icon">+</div>
          </button>
          <div className="footer_button_content">
          <ul>
              <li>Suppliers</li>
              <li>Careers</li>
              <li>Press Room</li>
              <li>Literature</li>
              <li>Samples</li>
              <li>Kohler Partner Network</li>
            </ul>
          </div>
          <button
            type="button"
            className=" footer_collapsible"
            onClick={() => {
              collapse_filter(2);
            }}
          >
           Help <div className="plus-icon">+</div>
          </button>
          <div className="footer_button_content">
          <ul>
              <li>Help & FAQ</li>
              <li>Track Your Order</li>
              <li>Shipping & Deliveries</li>
              <li>Returns</li>
              <li>Product Registration</li>
              <li>Contact Us</li>
              <li>Warranty</li>
              <li>Terms & Conditions</li>
              <li>Care & Cleaning</li>            
              </ul>
          </div>
          <button
            type="button"
            onClick={() => {
              collapse_filter(3);
            }}
            className=" footer_collapsible"
          >
           About Us <div className="plus-icon">+</div>
          </button>
          <div className="footer_button_content">
          <ul>
              <li>150th Anniversary</li>
              <li>Who We Are</li>
              <li>Our Brands/Businesses</li>
              <li>Heritage</li>
              <li>Social Impact</li>
              <li>Sustainability</li>
              <li>Diversity & Inclusion</li>
            </ul>
          </div>
          
      </div>
      <div className="links">
 <ul className="services">
  <li>Subject Access Request</li>
  <li>Privacy</li>
  <li>Cookies Settings</li>
  <li>Legal</li>
  <li>Site Map</li>
  <li>Terms</li>
  <li>Accessibility</li>
 </ul>
 <span className="copyright">&copy;Kohler Co. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
