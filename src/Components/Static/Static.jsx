import "./Static.css";
import Image1 from '../../assets/image-13.png';
import Image2 from '../../assets/image-14.svg';
import Image3 from '../../assets/image-15.svg';
import { LazyLoadImage } from "react-lazy-load-image-component";
function Static() {
  return (
    <div className="static">
      <div className="content-1">
        <div className="content-1__image"></div>
        <div className="content-1__content">
          <p className="content-1__heading">Nature-Inspired Design Trend</p>
          <p className="content-1__desc">
            Celebrate the natural world and embrace the powerful versatility of
            greens.
          </p>
          <form action="">
            <input
              class="content-1__button"
              type="submit"
              value="Explore the Trend"
            />
          </form>
        </div>
      </div>
      <p className="image-card__heading">Shop Featured Collections</p>
      <div className="image-card-1">
        <div className="image-card-1__image-1">
          <p className="image_head">
            Castia
            <small>
              <small>
                <small>
                  <sup>TM</sup>
                </small>
              </small>
            </small>
          </p>
          <a href="">Shop Castia Bathroom Faucets</a>
        </div>
        <div className="image-card-1__image-2">
          <p className="image_head">
            Components
            <small>
              <small>
                <small>
                  <sup>&#174;</sup>
                </small>
              </small>
            </small>
          </p>
          <a href="">Shop Castia Bathroom Faucets</a>
        </div>
        <div className="image-card-1__image-3">
          <p className="image_head">
            Artifacts
            <small>
              <small>
                <small>
                  <sup>&#174;</sup>
                </small>
              </small>
            </small>
          </p>
          <a href="">Shop Components Kitchen Faucets</a>
        </div>
        <div className="image-card-1__image-4">
          <p className="image_head">
            Statement
            <small>
              <small>
                <small>
                  <sup>&#174;</sup>
                </small>
              </small>
            </small>
          </p>
          <a href="">Shop Statement Showering Collection</a>
        </div>
      </div>
      <div className="content-2">
        <div className="content-2__content">
          <p className="content-2__heading">Planning & Design Hub</p>
          <p className="content-2__desc">
            Find inspiration and resources to bring your kitchen and bathroom
            design dreams to life.
          </p>
          <form action="">
            <input
              class="content-2__button"
              type="submit"
              value="Get Started"
            />
          </form>
        </div>
        <div className="content-2__image"></div>
      </div>
      <div className="content-3">
        <div className="content-3__image"></div>
        <div className="content-3__content">
          <p className="content-3__heading">KOHLER Bathroom Design</p>
          <p className="content-3__desc">
            Work one-on-one with our professional designers to visualize a quick
            update or a complete remodel.
          </p>
          <form action="">
            <input class="content-3__button" type="submit" value="Learn More" />
          </form>
        </div>
      </div>
      <div className="content-4">
        <div className="content-4__image"></div>
        <div className="content-4__content">
          <p className="content-4__heading">Create a Space for You</p>
          <p className="content-4__desc">
            A well-designed home feels like it was created just for you. Our
            KOHLER store associates can provide product selection and design
            assistance to help you create a space that feels like an extension
            of yourself.
          </p>
          <form action="">
            <input class="content-4__button" type="submit" value="Learn More" />
          </form>
        </div>
      </div>
      <div className="image-card-2">
        <div className="image-card-2__image-1">
          <p className="image_head">Bestsellers</p>
          <a href="">Shop Bestsellers</a>
        </div>
        <div className="image-card-2__image-2">
          <p className="image_head">Toilets</p>
          <a href="">Shop Toilets</a>
        </div>
        <div className="image-card-2__image-3">
          <p className="image_head">Bathroom Faucets</p>
          <a href="">Shop Bathroom Faucets</a>
        </div>
        <div className="image-card-2__image-4">
          <p className="image_head">Kitchen Faucets</p>
          <a href="">Shop Kitchen Faucets</a>
        </div>
      </div>
      <p className="image-card__heading-2">KOHLER Services</p>
      <div className="image-card-3">
        <div className="image-card-3__image-1">
          <LazyLoadImage src={Image3} alt="" />
          <p className="image_head-2">Install Services</p>
          <p className="image-desc">Let our trusted professionals make sure it’s installed right.

</p>
          <a href="">Learn More</a>
        </div>
        <div className="image-card-3__image-2">
          <LazyLoadImage src={Image2} alt="" />
          <p className="image_head-2">Walk-In Baths</p>
          <p className="image-desc">Stylish comfort and hygiene for a range of needs.</p>
          <a href="">Learn More</a>
        </div>
        <div className="image-card-3__image-3">
          <LazyLoadImage src={Image1} alt="" />
          <p className="image_head-2">LuxStone<small><small><sup>&#174;</sup></small></small> Showers</p>
          <p className="image-desc">Durable, design-forward shower walls with no grout to clean.</p>
          <a href="">Learn More</a>
        </div>
      
      </div>
    </div>
  );
}

export default Static;
