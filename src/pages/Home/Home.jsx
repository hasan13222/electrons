import Brand from "../../components/Brand";
import Hero from "../../components/Hero";
import { useContext, useEffect, useState } from "react";
import "./Home.css";
import Services from "../../components/Services";
import Newsletter from "../../components/Newsletter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { ModeContext } from "../../contexts/ModeProvider";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const {darkMode, setDarkMode} = useContext(ModeContext)

  useEffect(() => {
    fetch("/brands.json")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  },[darkMode])
  return (
    <>
      <button className="lt_dark_mode d-flex aic">
        <input
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          type="checkbox"
          className="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <FontAwesomeIcon className="fa-moon" icon={faMoon} />
          <FontAwesomeIcon className="fa-sun" icon={faSun} />
          <span className="ball"></span>
        </label>
      </button>
      <Hero />
      {/* brands */}
      <div className="full_container brands_full">
        <div className="fix_container brands">
          <div className="heading">
            <p>Choose Brand Where you want to buy</p>
            <h2>Explore Your Desired Brands</h2>
          </div>
          <div className="brands__items">
            {brands?.map((item) => (
              <>
                <Brand key={item.id} brand={item} />
              </>
            ))}
          </div>
        </div>
      </div>
      <Services />
      <Newsletter />
    </>
  );
};

export default Home;
