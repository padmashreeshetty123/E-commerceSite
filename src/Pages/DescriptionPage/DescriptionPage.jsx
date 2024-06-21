import { useState } from "react";

import { products } from "../../Static/products";
import { useParams } from "react-router";
import Header from "../../Components/Header/Header";
import "./DescriptionPage.css";
import Image15 from '../../assets/image-23.png'
import Image21 from '../../assets/image-13.png'
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer.jsx";
import { collapse_filter } from "../ProductPage/ProductPage.js";
function DescriptionPage() {
  const [item, setItem] = useState(1);
  const [open, setOpen] = useState(false);
  let { loc, id } = useParams();
  id = Number(id);
  {
    console.log(typeof id);
  }
  return (
    <>
      <Header />
      <NavBar />
      <div className="desc__page" id="hidden_content">
        <p className="location">
          <a href="">Home</a>&nbsp;/&nbsp;<a href="">{loc}</a>
        </p>
        <div className="product__Desc">
          <div className="product__image">
            <img
              src={"/products/" + products[id - 1].image_name + ".svg"}
              alt=""
            />
  <img
              src={Image15}
        
              alt=""
            />
              <img
              src={Image21}
              alt=""
            />
          </div>
          
          <div className="product__details">
            <p className="product__details__head">
              {products[id - 1].type}
              <small>
                <sup>&#174;</sup>
              </small>
            </p>
            <p className="product__details__desc">{products[id - 1].name}</p>
            <p className="product__details__code">{products[id - 1].code[0]}</p>
            <p className="product__details__price">${products[id - 1].price}</p>
            <p className="product__details__prevprice">
              $744.15 <a href="#">List</a>
            </p>
            <p className="affirm__class">
              As low as <span>$51</span>/mo with{" "}
              <img id="affirm-logo" src="/affirm-logo.png" alt="" />
              <a href="">Check your purchasing power</a>
            </p>
            <div className="product__details__buttons">
              <button className="qty">
                <a
                  href="#"
                  id="decrement"
                  onClick={() => (item > 1 ? setItem(item - 1) : "")}
                >
                  &#8722;
                </a>
                <span id="item_qty">{item}</span>
                <a id="increment" href="#" onClick={() => setItem(item + 1)}>
                  &#43;
                </a>
              </button>

              <button className="cart_button">Add to cart</button>
            </div>
            <p className="read_more">
              Feel confident with every sip that you are providing the best
              quality water for you and your family. The Aquifer® reverse
              osmosis (RO) water filtration system effectively reduces
              contaminants including arsenic, fluoride, TDS, bacteria, virus,
              lead, mercury, chlorine, and pharmaceuticals in your cold
              {open ? (
                ""
              ) : (
                <a
                  href="#hidden_content"
                  style={{ color: "inherit" }}
                  onClick={() => setOpen(true)}
                >
                  ...Read More
                </a>
              )}{" "}
              {open && (
                <span className="hidden_content">
                  water. Install your Aquifer® reverse osmosis filtration system
                  with a KOHLER® reverse osmosis-compatible Wellspring® beverage
                  faucet, available in five finishes and Traditional or
                  Contemporary styles.
                </span>
              )}
            </p>
            <div className="collapsible_details">
              <button
                type="button"
                className="collapsible"
                onClick={() => {
                  collapse_filter(0);
                }}
              >
                Features <div className="plus-icon">+</div>
              </button>
              <div className="button_content_1">
                <ul className="features">
                  <li>
                    Four-stage filtration system reduces contaminants such as
                    arsenic, fluoride, bacteria, virus, lead, mercury, chlorine,
                    chloramine, select pharmaceuticals, and more
                  </li>
                  <li>
                    Reduces over 95% of perfluorooctanoic acid PFOA and
                    perfluorooctane sulfonate PFOS in drinking water
                  </li>
                  <li>
                    1:1 ratio high-recovery reverse osmosis membrane creating
                    less waste water
                  </li>
                  <li>
                    Provides up to 27.5 gallons per day, or the equivalent of
                    over 200 16.9-oz. bottles of water (results may vary based
                    on water pressure, temperature and incoming water quality)
                  </li>
                  <li>
                    0.5 gpm (1.9 l/min) maximum flow rate at 60 psi (4.1 bar).
                  </li>
                </ul>
              </div>

              <button
                type="button"
                className="collapsible"
                onClick={() => {
                  collapse_filter(1);
                }}
              >
                Specs <div className="plus-icon">+</div>
              </button>
              <div className="button_content_1" id="specs">
                <span className="download">
                  <i id="d-icon" className="fa fa-download" alt="" />
                  <span id="ss">Specification Sheet</span>
                </span>
                <p className="content__head">Material</p>
                <ul>
                  <li>High-impact plastic construction</li>
                </ul>
                <p className="content__head">Installation</p>
                <ul>
                  <li>For cold water use only</li>
                  <li>Under-sink</li>
                  <li>
                    Quarter-turn twist cartridge for easy installation and
                    replacement
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="collapsible"
                onClick={() => {
                  collapse_filter(2);
                }}
              >
                Installation & Service Parts <div className="plus-icon">+</div>
              </button>
              <div className="button_content_1" id="install">
                <p className="content__head">Guides</p>
                <ul>
                  <li>Installation Guide</li>
                </ul>
                <p className="content__head"> Service Parts Diagram</p>
                <ul>
                  <li>Service Parts Diagram</li>
                </ul>
                <p className="content__head">Helpful Links</p>
                <ul>
                  <li>Care & Cleaning Tips</li>
                  <li>Product Warranty</li>
                  <li>Return Policy</li>
                  <li>Product Registration</li>
                  <li>Help & Faq</li>
                  <li>Product Support</li>
                </ul>
              </div>
              <p className="loc__head">Based on Your Current Location</p>
              <div className="zip">
                <p>Your ZIP Code: 201301</p>
                <p>
                  <a href="">Change ZIP Code</a>
                </p>
              </div>
              <div className="box">
                <div className="box_det">
                  <p>See Product on Display</p>
                  <div>
                    <a href=""> Display At a Store Near You</a>
                    <p>
                      Make a virtual appointment at a store or visit a store
                      near you to see products on display.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="box_det">
                    <p>Find a Local Pro</p>
                    <div>
                      <a href="">Get Connected to a Professional</a>
                      <p>
                        Find a Professional in our network that is local to you
                        to complete your product installation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DescriptionPage;
