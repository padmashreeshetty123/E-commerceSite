import { useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import Image30 from "../../assets/image-30.svg";
import Image31 from "../../assets/image-31.svg";
import { products } from "../../Static/products.js";
import Image32 from "../../assets/image-32.svg";
import Image33 from "../../assets/image-33.svg";
import { hide_show_filters, hide_show_filters_1 } from "./ProductPage.js";
import "./ProductPage.css";
import { collapse_filter, cts } from "./ProductPage.js";
import ProductCard from "../../Components/Product Card/ProductCard.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
export default function ProductPage() {
  const container = useRef(null);
  const sort = (a, b) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  };
  const handleFilterSelect = () => {
    let price = [];
    let type = [];
    let collection = [];
    let color = [];
    let available = [];
    let v = document.querySelectorAll("input[type=checkbox]:checked");
    setData(products);
    if (v.length == 0) {
      return;
    }

    for (let s of v) {
      if (s.name == "price") {
        console.log(
          data.filter(
            (e) => e[s.name] >= cts(s.value) && e[s.name] < cts(s.value + 50)
          )
        );
        price = [
          ...price,
          ...new Set([
            ...products.filter(
              (e) => e[s.name] >= cts(s.value) && e[s.name] < cts(s.value) + 50
            ),
          ]),
        ];
        //  setData(data=>[...new Set([...data.filter((e)=>(e[s.name]>=cts(s.value) && e[s.name]<cts(s.value)+50)

        //  )])]);
        console.log(price);
        //  console.log(product_price_range);
      } else if (s.name == "type") {
        type = [
          ...type,
          ...new Set([...products.filter((e) => e[s.name] == s.value)]),
        ];
        console.log(type);
      } else if (s.name == "collection") {
        collection = [
          ...collection,
          ...new Set([...products.filter((e) => e[s.name] == s.value)]),
        ];
        console.log(collection);
      } else if (s.name == "color") {
        color = [
          ...color,
          ...new Set([
            ...products.filter((e) => e[s.name].map((e1) => e1 == s.value)),
          ]),
        ];
        console.log(color);
      } else if (s.name == "available") {
        available = [
          ...available,
          ...new Set([...products.filter((e) => e[s.name] == s.value)]),
        ];
        console.log(available);
      }
    }
 let temp=[]
    if (price.length != 0) {
     temp=price
    }
    if (type.length != 0) {
      if (type.length < temp.length)
        temp=[...temp.filter((value) => type.includes(value))];
      else temp=[...type.filter((value) => temp.includes(value))];

  
    }
    if (collection.length != 0) {
      if (collection.length < temp.length)
       temp=[...temp.filter((value) => collection.includes(value))];
      else temp=[...collection.filter((value) => temp.includes(value))];
    }
    if (available.length != 0) {
      if (available.length < temp.length)
       temp=[...temp.filter((value) => available.includes(value))];
      else temp=[...available.filter((value) => temp.includes(value))];
    }
    setData(temp);
    //  const index = product_color.indexOf("NA");
    //  product_color.splice(index, 1);
  };

  const [sort_var, setConstVar] = useState("Price Low - High");
  const [dropdown, setDropDown] = useState(false);
  const [data, setData] = useState(products);
  const [product_type, setProductType] = useState([
    ...new Set(data.map((e) => e.type)),
  ]);
  const [product_collection, setCollection] = useState([
    ...new Set(data.map((e) => e.collection)),
  ]);
  const [product_price_range, setPriceRange] = useState([
    ...new Set(data.map((e) => Math.floor(e.price / 50))),
  ]);
  const [product_availability, setAvailability] = useState([
    ...new Set(data.map((e) => e.available)),
  ]);
  let temp = data.map((ele) => ele.available_colors).flat();
  console.log(data);
  return (
    <>
      <Header />
      <NavBar />
      <p className="product-page__Heading">Water Filteration</p>
      <p className="product-page__Desc">
        Sophisticated systems crafted to give you pure, clean water.
      </p>
      <div className="product-page__results">
        <p className="result__count">{data.length} Results</p>
        <div className="result__filters">
          <a className="hide-filter" onClick={() => hide_show_filters()}>
            Hide Filters{" "}
          </a>
          <a className="show-filter" onClick={() => hide_show_filters_1()}>
            Show Filters{" "}
          </a>

          <i id="hide-show-icon" className="fa fa-sliders" alt="" />

          <label id="dropdown_label" for="sort by">
            Sort By:
          </label>

          <a
            className="options"
            onClick={() => {
              setDropDown(dropdown ? false : true);
            }}
          >
            {sort_var}&nbsp;&nbsp;
            <i
              id="arrow-icon"
              className={dropdown ? "fa fa-angle-up" : "fa fa-angle-down"}
            />
          </a>
          {dropdown && (
            <div className="dropdown_filter">
              <ul>
                <li
                  onClick={() => {
                    setConstVar("Featured");
                    setDropDown(false);
                  }}
                >
                  Featured
                </li>
                <li
                  onClick={() => {
                    setConstVar("Price High - Low");
                    setDropDown(false);
                    setData(data.sort((a, b) => b.price - a.price));
                  }}
                >
                  Price High - Low
                </li>
                <li
                  onClick={() => {
                    setConstVar("Price Low - High");
                    setDropDown(false);
                    setData(data.sort((a, b) => a.price - b.price));
                  }}
                >
                  Price Low - High
                </li>
                <li
                  onClick={() => {
                    setConstVar("A - Z");
                    setDropDown(false);
                    setData(data.sort((a, b) => sort(a, b)));
                  }}
                >
                  A - Z
                </li>
                <li
                  onClick={() => {
                    setConstVar("Z - A");
                    setDropDown(false);
                    setData(
                      data.sort(function (a, b) {
                        if (a.type < b.type) {
                          return 1;
                        }
                        if (a.type > b.type) {
                          return -1;
                        }
                        return 0;
                      })
                    );
                  }}
                >
                  Z - A
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="result__filters_mobile">
          {dropdown && (
            <div className="dropdown_filter">
              <ul>
                <li
                  onClick={() => {
                    setConstVar("Featured");
                    setDropDown(false);
                  }}
                >
                  Featured
                </li>
                <li
                  onClick={() => {
                    setConstVar("Price High - Low");
                    setDropDown(false);
                    setData(data.sort((a, b) => b.price - a.price));
                  }}
                >
                  Price High - Low
                </li>
                <li
                  onClick={() => {
                    setConstVar("Price Low - High");
                    setDropDown(false);
                    setData(data.sort((a, b) => a.price - b.price));
                  }}
                >
                  Price Low - High
                </li>
                <li
                  onClick={() => {
                    setConstVar("A - Z");
                    setDropDown(false);
                    setData(data.sort((a, b) => sort(a, b)));
                  }}
                >
                  A - Z
                </li>
                <li
                  onClick={() => {
                    setConstVar("Z - A");
                    setDropDown(false);
                    setData(
                      data.sort(function (a, b) {
                        if (a.type < b.type) {
                          return 1;
                        }
                        if (a.type > b.type) {
                          return -1;
                        }
                        return 0;
                      })
                    );
                  }}
                >
                  Z - A
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="product__list">
        <div className="product__list__filters">
          <button
            type="button"
            className="collapsible"
            onClick={() => {
              collapse_filter(0);
            }}
          >
            Price Range <div className="plus-icon">+</div>
          </button>
          <div className="button_content">
            <ul>
              {product_price_range
                .sort((a, b) => a - b)
                .map((ele, i) => (
                  <li>
                    <input
                      type="checkbox"
                      name="price"
                      value={50 * ele}
                      id={i}
                      onChange={handleFilterSelect}
                    />
                    ${50 * ele} - ${50 * ele + 50}
                  </li>
                ))}
            </ul>
          </div>
          <button
            type="button"
            className="collapsible"
            onClick={() => {
              collapse_filter(1);
            }}
          >
            Product Type <div className="plus-icon">+</div>
          </button>
          <div className="button_content">
            <ul>
              {product_type.map((e, i) => (
                <li>
                  <input
                    type="checkbox"
                    name="type"
                    value={e}
                    onChange={handleFilterSelect}
                    id={i}
                  />
                  {e}{" "}
                  <span>
                    &#40;{data.filter((ele) => ele.type == e).length}&#41;
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            className="collapsible"
            onClick={() => {
              collapse_filter(2);
            }}
          >
            Collections <div className="plus-icon">+</div>
          </button>
          <div className="button_content">
            <ul>
              {product_collection.map((e, i) => (
                <li>
                  <input
                    type="checkbox"
                    name="collection"
                    value={e}
                    id={i}
                    onChange={handleFilterSelect}
                  />
                  {e}{" "}
                  <span>
                    &#40;{data.filter((ele) => ele.collection == e).length}&#41;
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* <button
            type="button"
            onClick={() => {
              collapse_filter(3);
            }}
            className="collapsible"
          >
            Color Finish <div className="plus-icon">+</div>
          </button>
          <div className="button_content">
            <ul>
                {product_color.map((e,i)=>e!='NA'?
              <li>
                <input type="checkbox" name="color" value={e} id={i} onChange={handleFilterSelect}/>
                <span className="collapsible__color">{e}</span>
                <span> &#40;{temp.filter((ele)=>ele==e).length}&#41;</span>
              </li>:''
)}
            </ul>
          </div> */}
          <button
            type="button"
            onClick={() => {
              collapse_filter(4);
            }}
            className="collapsible"
          >
            Available Now <div className="plus-icon">+</div>
          </button>
          <div className="button_content">
            <ul>
              {product_availability.map((e, i) => (
                <li>
                  <input
                    type="checkbox"
                    name="available"
                    id={i}
                    value={e}
                    onChange={() => {
                      handleFilterSelect();
                    }}
                  />
                  {e}{" "}
                  <span>
                    &#40;{data.filter((ele) => ele.available == e).length}&#41;
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="filter__icons">
            <p>
              <i className="fa fa-print" style={{ fontSize: 22 }}></i>
              &nbsp;Print
            </p>
            <p>
              <i className="fa fa-share-square-o" style={{ fontSize: 22 }}></i>
              &nbsp;Share
            </p>
          </div>
        </div>
        <div className="product__cards" ref={container}>
          {data.map((e, i) => (
            <ProductCard
              id={e.id}
              name={e.name}
              ref_={container}
              type={e.type}
              code={e.code}
              image={e.image_name}
              price={e.price}
            />
          ))}
        </div>
      </div>
      <ul className="card_count">
        <li id="view"> View</li>
        <li>30</li>
        <li>60</li>
        <li>90</li>
        <li>All</li>
      </ul>
      <a
        href="#"
        id="back-to-top"
        onClick={() => (document.body.scrollTop = 0)}
      >
        Back to Top <span style={{ fontSize: "20px" }}>&uarr;</span>
      </a>
      <p className="related__products__head">Explore Related Products</p>
      <div className="related__products">
        <div>
          <img src={Image30} alt="" />
          <p>Kitchen Faucets</p>
        </div>
        <div>
          <img src={Image31} alt="" />
          <p>Kitchen Accessories</p>
        </div>
        <div>
          <img src={Image32} alt="" />
          <p>Garbage Disposals</p>
        </div>
        <div>
          <img src={Image33} alt="" />
          <p>Kitchen Lighting</p>
        </div>
      </div>
      <div className="content-5">
        <div className="content-5__image"></div>
        <div className="content-5__content">
          <p className="content-5__heading">Water Filtration Systems</p>
          <p className="content-5__desc">
            Get great-tasting, contaminant-free water without the use of
            bottles. Learn more about our water filtration systems.
          </p>
          <form action="">
            <input
              class="content-5__button"
              type="submit"
              value="Read Article"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
