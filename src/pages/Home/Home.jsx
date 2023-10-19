import Brand from "../../components/Brand";
import Hero from "../../components/Hero";
import { useEffect, useState } from "react";
import "./Home.css";
import Services from "../../components/Services";
import Newsletter from "../../components/Newsletter";

const Home = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <>
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
                <Brand brand={item} />
              </>
            ))}
          </div>
        </div>
      </div>
      <Services/>
      <Newsletter/>
    </>
  );
};

export default Home;
