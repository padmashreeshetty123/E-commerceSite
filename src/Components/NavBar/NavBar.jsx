import { useState } from "react";
import LogoWhite from "../../assets/logo-white.png";
import Logo from "../../assets/logo.svg";
import { IoMdClose } from "react-icons/io";
import Image21 from "../../assets/image-21.svg";
import Image22 from "../../assets/image-22.svg";
import Image23 from "../../assets/image-23.png";
import Image24 from "../../assets/image-24.svg";
import Image25 from "../../assets/image-25.svg";
import Image26 from "../../assets/image-26.svg";
import Image27 from "../../assets/image-27.svg";
import Image28 from "../../assets/image-28.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const [over, setOver] = useState(false);
  const [filter, setFilter] = useState("");
  const [id, setId] = useState(0);
  const [sidebar_select, setSS] = useState("");
  return (
    <>
      <div
        className="Nav-bottom max"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <img id="logo" src={over ? Logo : LogoWhite} alt="" />
        <ul>
          <li id="products" onClick={() => setId(id == 6 ? 0 : 6)}>
            <a href="#">Products</a>
          </li>
          <li onClick={() => setId(id == 1 ? 0 : 1)}>
            <a href="#">Inspiration</a>
          </li>
          <li onClick={() => setId(id == 2 ? 0 : 2)}>
            <a href="#">Services</a>
          </li>
          <li onClick={() => setId(id == 3 ? 0 : 3)}>
            <a href="#">Parts&nbsp;&&nbsp;Support</a>
          </li>
          <li onClick={() => setId(id == 4 ? 0 : 4)}>
            <a href="#">For Professionals</a>
          </li>
          <li onClick={() => setId(id == 5 ? 0 : 5)}>
            <a href="#">About Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="" id="searchtext">Search</a>
          </li>
          <li>
           <i className="fa fa-search" style={{fontSize:21}}></i>
          </li>
        </ul>
      </div>
      {id == 6 && (
        <div className="sidebar">
          <div className="sidebar__content">
            <ul className="sidebar__options">
              <li
                onClick={() =>
                  filter == "Collections"
                    ? setFilter("")
                    : setFilter("Collections")
                }
              >
                <a href="#">Collections</a>
              </li>
              <li
                onClick={() =>
                  filter == "Bathroom" ? setFilter("") : setFilter("Bathroom")
                }
              >
                <a href="#">Bathroom</a>
              </li>
              <li
                onClick={() =>
                  filter == "Kitchen" ? setFilter("") : setFilter("Kitchen")
                }
              >
                <a href="#">Kitchen</a>
              </li>
              <li
                onClick={() =>
                  filter == "Lighting" ? setFilter("") : setFilter("Lighting")
                }
              >
                <a href="#">Lighting</a>
              </li>
              <li
                onClick={() =>
                  filter == "Smart Home"
                    ? setFilter("")
                    : setFilter("Smart Home")
                }
              >
                <a href="#">Smart Home</a>
              </li>
              <li
                onClick={() =>
                  filter == "Shop the Room"
                    ? setFilter("")
                    : setFilter("Shop the Room")
                }
              >
                <a href="#">Shop the Room</a>
              </li>
              <li
                onClick={() =>
                  filter == "Home Energy"
                    ? setFilter("")
                    : setFilter("Home Energy")
                }
              >
                <a href="#">Home Energy</a>
              </li>
              <li
                onClick={() =>
                  filter == "Commercial"
                    ? setFilter("")
                    : setFilter("Commercial")
                }
              >
                <a href="#">Commercial</a>
              </li>
              <li
                onClick={() =>
                  filter == "Service Parts"
                    ? setFilter("")
                    : setFilter("Service Parts")
                }
              >
                <a href="#">Service Parts</a>
              </li>
            </ul>
          </div>

          {filter == "Collections" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Featured</li>
                  <li>Kohler x Studio McGee</li>
                  <li>Artifacts</li>
                  <li>Memoirs</li>
                  <li>Veil</li>
                  <li>Brazn</li>
                  <li>Components</li>
                  <li>Occasion</li>
                  <li>Purist</li>
                  <li>Crue</li>
                  <li>Graze</li>
                  <li>Tone</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image22} alt="" />
              </div>
            </>
          )}
          {filter == "Bathroom" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Faucets</li>
                  <li>Toilets</li>
                  <li>Toilet Seats</li>
                  <li>Showers</li>
                  <li>Baths</li>
                  <li>Vanities</li>
                  <li>Sinks</li>
                  <li>Artist Editions</li>
                  <li>Mirrors & Medicine Cabinets</li>
                  <li>Exhaust Fans</li>
                  <li>Accessories</li>
                  <li>Wellness</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image21} alt="" />
              </div>
            </>
          )}
          {filter == "Kitchen" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Faucets</li>
                  <li>Sinks</li>
                  <li>
                    {" "}
                    <Link to="/home">Water Filtration</Link>
                  </li>
                  <li>Accessories</li>
                  <li>Garbage Disposals</li>
                  <li>Trash Cans</li>
                  <li>Cleaners</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image23} alt="" />
              </div>
            </>
          )}
          {filter == "Lighting" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>All Lighting</li>
                  <li>Pendants</li>
                  <li>Chandeliers</li>
                  <li>Sconces</li>
                  <li>Flush-Mounts</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image24} alt="" />
              </div>
            </>
          )}
          {filter == "Smart Home" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>All Smart Home</li>
                  <li>Showers</li>
                  <li>Smart Toilets</li>
                  <li>Bidet Seats</li>
                  <li>Smart Bathing</li>
                  <li>Kitchen Faucets</li>
                  <li>Water Management</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image25} alt="" />
              </div>
            </>
          )}
          {filter == "Shop the Room" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Shop All Rooms</li>
                  <li>Shop Bathroom Designs</li>
                  <li>Shop Kitchen Designs</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image26} alt="" />
              </div>
            </>
          )}
          {filter == "Home Energy" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Home Generators</li>
                  <li>Exclusive Colors Generators</li>
                  <li>Mossy Oak Generators</li>
                  <li>Automatic Transfer Switches</li>
                  <li>All Home Generators</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image27} alt="" />
              </div>
            </>
          )}
          {filter == "Commercial" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>All Commercial Products</li>
                  <li>Coordinated Solutions</li>
                  <li>Flushometers</li>
                  <li>Toilets</li>
                  <li>Toilet Seats</li>
                  <li>Urinals</li>
                  <li>Commercial Faucets</li>
                  <li>Lavatories & Sinks</li>
                  <li>Soap Dispensers</li>
                  <li>Industrial Showers</li>
                  <li>Fittings</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image28} alt="" />
              </div>
            </>
          )}
          {filter == "Service Parts" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Find a Service Part</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image23} alt="" />
              </div>
            </>
          )}

          <div
            className="sidebar_close"
            onClick={() => {
              setId(0);
              setFilter("");
            }}
          >
            <span>
              {" "}
              <IoMdClose />
            </span>
          </div>
        </div>
      )}
      {id > 0 && (
        <div className="menu">
          {id == 1 && (
            <div className="menu-1__content">
              <p className="menu__heading">
                Inspiration to spark your imagination.
              </p>
              <ul className="menu__options">
                <li>Shop the Room</li>
                <li>Heritage Colors</li>
                <li>Planning & Design</li>
                <li>Project Gallery</li>
                <li>Design Trends</li>
                <li>Collaborations</li>
                <li>Explore Color, Material, Finish</li>
                <li>How It's Made</li>
                <li>#Kohler</li>
              </ul>

              <div className="menu-1__image"></div>
            </div>
          )}
          {id == 2 && (
            <div className="menu-2__content">
              <p className="menu__heading">Let’s bring your project to life.</p>
              <ul className="menu__options">
                <li>All Services</li>
                <li>Kohler Bathroom Design</li>
                <li>Install Services</li>
                <li>LuxStone Showers</li>
                <li>Walk-In Baths</li>
                <li>Find a Local Professional</li>
              </ul>
              <div className="menu-2__image"></div>
            </div>
          )}
          {id == 3 && (
            <div className="menu-3__content">
              <p className="menu__heading">We’ve got you covered.</p>
              <ul className="menu__options">
                <li>Find Service Parts</li>
                <li>Product Support</li>
                <li>Care & Cleaning</li>
                <li>Product Registration</li>
                <li>Order Tracking</li>
                <li>Product Warranty</li>
                <li>Product Buying Guides</li>
              </ul>
              <div className="menu-3__image"></div>
            </div>
          )}
          {id == 4 && (
            <div className="menu-4__content">
              <p className="menu__heading">Resources for the Industry pro.</p>
              <ul className="menu__options">
                <li>KBIS 2024</li>
                <li>A Solution for Every Pro</li>
                <li>Technical Specifications</li>
                <li>Product Sustainability</li>
                <li>Project Case Studies</li>
                <li>Commercial Products</li>
                <li>Training</li>
                <li>Literature</li>
                <li>Samples</li>
              </ul>
              <div className="menu-4__image"></div>
            </div>
          )}
          {id == 5 && (
            <div className="menu-5__content">
              <p className="menu__heading">Gracious Living Since 1873.</p>
              <ul className="menu__options">
                <li>150th Anniversary</li>
                <li>Who We Are</li>
                <li>Our Brands/Businesses</li>
                <li>Heritage</li>
                <li>Social Impact</li>
                <li>Sustainability</li>
                <li>Diversity & Inclusion</li>
              </ul>
              <div className="menu-5__image"></div>
            </div>
          )}
          {/* <button onClick={setId(0)}>x</button> */}
        </div>
      )}
      <div className="min">
        <i
          id="burger"
         className="fa fa-bars"
          alt=""
          onClick={() => {setSS("I");(id == 8 ? setId(0) :(setId(8)))}}
        ></i>
        <img id="brand-logo" src={Logo} alt="" />
        <div id="burger-icons">
        <i className="fa fa-search" style={{fontSize:22}}></i>
          <span id="s-icon">Search</span>
          <i className="fa fa-heart-o" style={{fontSize:22}}></i>
          <i className="fa fa-shopping-cart" style={{fontSize:22}}></i>
        </div>
      </div>
      {id == 8 && (
        <div className="sidebar">
          <div className="sidebar__content">
            {sidebar_select=="I"&&<ul className="sidebar__options">
              <li
                onClick={() => {
                 
                  setSS("product");
                }}
              >
                <a href="#"> Product</a>
              </li>
              <li
                onClick={() => {
              
                  setSS("insp");
                }}
              >
                <a href="#">Inspiration</a>
              </li>
              <li
                onClick={() => {
              
                  setSS("services");
                }}
              >
                <a href="#">Services</a>
              </li>
              <li
                onClick={() => {
          
                  setSS("ps");
                }}
              >
                <a href="#">Parts & Support</a>
              </li>
              <li
                onClick={() => {
     
                  setSS("fp");
                }}
              >
                <a href="#">For Proffesionals</a>
              </li>
              <li
                onClick={() => {
             
                  setSS("au");
                }}
              >
                <a href="#">About Us</a>
              </li>
            </ul>}
            {sidebar_select=="product"&&
              <ul className="sidebar__options">
                 <a className="menu-icon" onClick={()=>setSS("I")}>&lt; MENU</a>
              <li
                onClick={() =>
                  setSS("Collections")
                }
              >
                <a href="#">Collections</a>
              </li>
              <li
                onClick={() =>
                setSS("Bathroom")
                }
              >
                <a href="#">Bathroom</a>
              </li>
              <li
                onClick={() =>
                 setSS("Kitchen")
                }
              >
                <a href="#">Kitchen</a>
              </li>
              <li
                onClick={() =>
               setSS("Lighting")
                }
              >
                <a href="#">Lighting</a>
              </li>
              <li
                onClick={() =>
                  setSS("Smart Home")
                }
              >
                <a href="#">Smart Home</a>
              </li>
              <li
                onClick={() =>
                 setSS("Shop the Room")
                }
              >
                <a href="#">Shop the Room</a>
              </li>
              <li
                onClick={() =>
               setSS("Home Energy")
                }
              >
                <a href="#">Home Energy</a>
              </li>
              <li
                onClick={() =>
                  setSS("Commercial")
                }
              >
                <a href="#">Commercial</a>
              </li>
              <li
                onClick={() =>
                 setSS("Service Parts")
                }
              >
                <a href="#">Service Parts</a>
              </li>
            </ul>
            }

            {sidebar_select == "insp" && (
              <ul className="sidebar__options">
                  <a className="menu-icon" onClick={()=>setSS("I")}>&lt; MENU</a>
                <li
                  onClick={() =>
                    filter == "Collections"
                      ? setFilter("")
                      : setFilter("Collections")
                  }
                >
                  <a href="#">Shop the Room</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Bathroom" ? setFilter("") : setFilter("Bathroom")
                  }
                >
                  <a href="#">Heritage Colors</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Kitchen" ? setFilter("") : setFilter("Kitchen")
                  }
                >
                  <a href="#">Planning & Design</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Lighting" ? setFilter("") : setFilter("Lighting")
                  }
                >
                  <a href="#">Lighting</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Smart Home"
                      ? setFilter("")
                      : setFilter("Smart Home")
                  }
                >
                  <a href="#">Smart Home</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Shop the Room"
                      ? setFilter("")
                      : setFilter("Shop the Room")
                  }
                >
                  <a href="#">Shop the Room</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Home Energy"
                      ? setFilter("")
                      : setFilter("Home Energy")
                  }
                >
                  <a href="#">Home Energy</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Commercial"
                      ? setFilter("")
                      : setFilter("Commercial")
                  }
                >
                  <a href="#">Commercial</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Service Parts"
                      ? setFilter("")
                      : setFilter("Service Parts")
                  }
                >
                  <a href="#">#Kohler</a>
                </li>
              </ul>
            )}
            {sidebar_select == "services" && (
              <ul className="sidebar__options">
                <a className="menu-icon" onClick={()=>setSS("I")}>&lt; MENU</a>
                <li
                  onClick={() =>
                    filter == "Collections"
                      ? setFilter("")
                      : setFilter("Collections")
                  }
                >
                  <a href="#">Service</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Bathroom" ? setFilter("") : setFilter("Bathroom")
                  }
                >
                  <a href="#">Kohler Bathroom Design</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Kitchen" ? setFilter("") : setFilter("Kitchen")
                  }
                >
                  <a href="#">Walk in Baths</a>
                </li>
              </ul>
            )}
            {sidebar_select == "ps" && (
              <ul className="sidebar__options">
                  <a className="menu-icon" onClick={()=>setSS("I")}>&lt; MENU</a>
                <li
                  onClick={() =>
                    filter == "Collections"
                      ? setFilter("")
                      : setFilter("Collections")
                  }
                >
                  <a href="#">Find Service Parts</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Bathroom" ? setFilter("") : setFilter("Bathroom")
                  }
                >
                  <a href="#">Product Support</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Kitchen" ? setFilter("") : setFilter("Kitchen")
                  }
                >
                  <a href="#">Care & Cleaning</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Lighting" ? setFilter("") : setFilter("Lighting")
                  }
                >
                  <a href="#">Product Registration</a>
                </li>

                <li
                  onClick={() =>
                    filter == "Service Parts"
                      ? setFilter("")
                      : setFilter("Service Parts")
                  }
                >
                  <a href="#">Service Parts</a>
                </li>
              </ul>
            )}
            {sidebar_select == "fp" && (
              <ul className="sidebar__options">
                 <a className="menu-icon" onClick={()=>setSS("I")}>&lt; MENU</a>
                <li
                  onClick={() =>
                    filter == "Collections"
                      ? setFilter("")
                      : setFilter("Collections")
                  }
                >
                  <a href="#">KBIS 2024</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Bathroom" ? setFilter("") : setFilter("Bathroom")
                  }
                >
                  <a href="#">KBIS 2019</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Kitchen" ? setFilter("") : setFilter("Kitchen")
                  }
                >
                  <a href="#">Project Case Studies</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Lighting" ? setFilter("") : setFilter("Lighting")
                  }
                >
                  <a href="#">Lighting</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Smart Home"
                      ? setFilter("")
                      : setFilter("Smart Home")
                  }
                >
                  <a href="#">Smart Home</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Shop the Room"
                      ? setFilter("")
                      : setFilter("Shop the Room")
                  }
                >
                  <a href="#">Shop the Room</a>
                </li>
              </ul>
            )}
            {sidebar_select == "au" && (
              <ul className="sidebar__options">
                 <a className="menu-icon" onClick={()=>setSS("I")}>&lt;&NBSP&NBSP;MENU</a>
                <li
                  onClick={() =>
                    filter == "Collections"
                      ? setFilter("")

                      : setFilter("Collections")
                  }
                >
                  <a href="#">150th Anniversary</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Bathroom" ? setFilter("") : setFilter("Bathroom")
                  }
                >
                  <a href="#">Who We Are</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Kitchen" ? setFilter("") : setFilter("Kitchen")
                  }
                >
                  <a href="#">Heritage</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Lighting" ? setFilter("") : setFilter("Lighting")
                  }
                >
                  <a href="#">Social Impact</a>
                </li>
                <li
                  onClick={() =>
                    filter == "Smart Home"
                      ? setFilter("")
                      : setFilter("Smart Home")
                  }
                >
                  <a href="#">Diversity and Inclusion</a>
                </li>
              </ul>
            )}
                    {sidebar_select == "Collections" && (
                   <ul className="sidebar__options">
                      <a className="menu-icon" onClick={()=>setSS("product")}>&lt; Products</a>
                  <li>Featured</li>
                  <li>Kohler x Studio McGee</li>
                  <li>Artifacts</li>
                  <li>Memoirs</li>
                  <li>Veil</li>
                  <li>Brazn</li>
                  <li>Components</li>
                  <li>Occasion</li>
                  <li>Purist</li>
                  <li>Crue</li>
                  <li>Graze</li>
                  <li>Tone</li>
                </ul>
             
          )}
          {sidebar_select == "Bathroom" && (
            
                    <ul className="sidebar__options">
                        <a className="menu-icon" onClick={()=>setSS("product")}>&lt; Products</a>
                  <li>Faucets</li>
                  <li>Toilets</li>
                  <li>Toilet Seats</li>
                  <li>Showers</li>
                  <li>Baths</li>
                  <li>Vanities</li>
                  <li>Sinks</li>
                  <li>Artist Editions</li>
                  <li>Mirrors & Medicine Cabinets</li>
                  <li>Exhaust Fans</li>
                  <li>Accessories</li>
                  <li>Wellness</li>
                </ul>
             
          )}
          {sidebar_select == "Kitchen" && (
            
                    <ul className="sidebar__options">
                        <a className="menu-icon" onClick={()=>setSS("product")}>&lt; Products</a>
                  <li>Faucets</li>
                  <li>Sinks</li>
                  <li>
                    {" "}
                    <Link to="/home">Water Filtration</Link>
                  </li>
                  <li>Accessories</li>
                  <li>Garbage Disposals</li>
                  <li>Trash Cans</li>
                  <li>Cleaners</li>
                </ul>
         
          )}
          {sidebar_select == "Lighting" && (
                <ul className="sidebar__options">
                    <a className="menu-icon" onClick={()=>setSS("product")}>&lt; Products</a>
                  <li>All Lighting</li>
                  <li>Pendants</li>
                  <li>Chandeliers</li>
                  <li>Sconces</li>
                  <li>Flush-Mounts</li>
                </ul>
         
          )}
          {sidebar_select == "Smart Home" && (
                  <ul className="sidebar__options">
                      <a className="menu-icon" onClick={()=>setSS("product")}>&lt; Products</a>
                  <li>All Smart Home</li>
                  <li>Showers</li>
                  <li>Smart Toilets</li>
                  <li>Bidet Seats</li>
                  <li>Smart Bathing</li>
                  <li>Kitchen Faucets</li>
                  <li>Water Management</li>
                </ul>
           
          )}
          {sidebar_select == "Shop the Room" && (
               <ul className="sidebar__options">
                  <a className="menu-icon" onClick={()=>setSS("product")}>&lt; Products</a>
                  <li>Shop All Rooms</li>
                  <li>Shop Bathroom Designs</li>
                  <li>Shop Kitchen Designs</li>
                </ul>
         
          )}
          {sidebar_select == "Home Energy" && (
           <ul className="sidebar__options">
              <a className="menu-icon" onClick={()=>setSS("product")}>&lt; Products</a>
                  <li>Home Generators</li>
                  <li>Exclusive Colors Generators</li>
                  <li>Mossy Oak Generators</li>
                  <li>Automatic Transfer Switches</li>
                  <li>All Home Generators</li>
                </ul>
         
          )}
          {sidebar_select == "Commercial" && (
                <ul className="sidebar__options">
                    <a className="menu-icon" onClick={()=>setSS("product")}>&lt; Products</a>
                  <li>All Commercial Products</li>
                  <li>Coordinated Solutions</li>
                  <li>Flushometers</li>
                  <li>Toilets</li>
                  <li>Toilet Seats</li>
                  <li>Urinals</li>
                  <li>Commercial Faucets</li>
                  <li>Lavatories & Sinks</li>
                  <li>Soap Dispensers</li>
                  <li>Industrial Showers</li>
                  <li>Fittings</li>
                </ul>
         
          )}
          {sidebar_select == "Service Parts" && (
            
                  <ul className="sidebar__options">
                      <a className="menu-icon" onClick={()=>setSS("product")}>&lt; Products</a>
                  <li>Find a Service Part</li>
                </ul>
           
          )}
          </div>

          {filter == "Collections" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Featured</li>
                  <li>Kohler x Studio McGee</li>
                  <li>Artifacts</li>
                  <li>Memoirs</li>
                  <li>Veil</li>
                  <li>Brazn</li>
                  <li>Components</li>
                  <li>Occasion</li>
                  <li>Purist</li>
                  <li>Crue</li>
                  <li>Graze</li>
                  <li>Tone</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image22} alt="" />
              </div>
            </>
          )}
          {filter == "Bathroom" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Faucets</li>
                  <li>Toilets</li>
                  <li>Toilet Seats</li>
                  <li>Showers</li>
                  <li>Baths</li>
                  <li>Vanities</li>
                  <li>Sinks</li>
                  <li>Artist Editions</li>
                  <li>Mirrors & Medicine Cabinets</li>
                  <li>Exhaust Fans</li>
                  <li>Accessories</li>
                  <li>Wellness</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image21} alt="" />
              </div>
            </>
          )}
          {filter == "Kitchen" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Faucets</li>
                  <li>Sinks</li>
                  <li>
                    {" "}
                    <Link to="/home">Water Filtration</Link>
                  </li>
                  <li>Accessories</li>
                  <li>Garbage Disposals</li>
                  <li>Trash Cans</li>
                  <li>Cleaners</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image23} alt="" />
              </div>
            </>
          )}
          {filter == "Lighting" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>All Lighting</li>
                  <li>Pendants</li>
                  <li>Chandeliers</li>
                  <li>Sconces</li>
                  <li>Flush-Mounts</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image24} alt="" />
              </div>
            </>
          )}
          {filter == "Smart Home" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>All Smart Home</li>
                  <li>Showers</li>
                  <li>Smart Toilets</li>
                  <li>Bidet Seats</li>
                  <li>Smart Bathing</li>
                  <li>Kitchen Faucets</li>
                  <li>Water Management</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image25} alt="" />
              </div>
            </>
          )}
          {filter == "Shop the Room" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Shop All Rooms</li>
                  <li>Shop Bathroom Designs</li>
                  <li>Shop Kitchen Designs</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image26} alt="" />
              </div>
            </>
          )}
          {filter == "Home Energy" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Home Generators</li>
                  <li>Exclusive Colors Generators</li>
                  <li>Mossy Oak Generators</li>
                  <li>Automatic Transfer Switches</li>
                  <li>All Home Generators</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image27} alt="" />
              </div>
            </>
          )}
          {filter == "Commercial" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>All Commercial Products</li>
                  <li>Coordinated Solutions</li>
                  <li>Flushometers</li>
                  <li>Toilets</li>
                  <li>Toilet Seats</li>
                  <li>Urinals</li>
                  <li>Commercial Faucets</li>
                  <li>Lavatories & Sinks</li>
                  <li>Soap Dispensers</li>
                  <li>Industrial Showers</li>
                  <li>Fittings</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image28} alt="" />
              </div>
            </>
          )}
          {filter == "Service Parts" && (
            <>
              <div className="sidebar_expand">
                <ul className="sidebar_expand__options">
                  <li>Find a Service Part</li>
                </ul>
              </div>
              <div className="sidebar__image">
                <img src={Image23} alt="" />
              </div>
            </>
          )}

          <div
            className="sidebar_close"
            onClick={() => {
              setId(0);
              setFilter("");
            }}
          >
            <span>
              {" "}
              <IoMdClose />
            </span>
          </div>
          
        </div>
      )}
    </>
  );
}

export default NavBar;
