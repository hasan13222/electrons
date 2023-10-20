import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../assets";
import "./Products.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Products = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  const [productAds, setProductAds] = useState([]);
  const { brand } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        const brandName = brand.toLowerCase();
        const products = data.filter(
          (product) => product.brand_name.toLowerCase() === brandName
        );
        setBrandProducts(products);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/productAds")
      .then((response) => response.json())
      .then((data) => {
        const brandName = brand.toLowerCase();
        const ads = data.filter(
          (product) => product.brand.toLowerCase() === brandName
        );
        setProductAds(ads);
      });
  }, []);
  return (
    <>
      <div className="full_container products_full">
        <div className="fix_container products">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {brandProducts?.length === 0 && (
              <div className="products__item products__empty">
                <h2>Products Coming Soon</h2>
                <p>
                  No Products are available yet. Please Keep in touch with Us.
                </p>
              </div>
            )}

            {brandProducts?.length > 0 &&
              brandProducts?.map((product) => (
                <>
                  <SwiperSlide>
                    <div className="products__item">
                      <img
                        src={product.product_image}
                        alt={product.product_name}
                      />
                      <div className="specs">
                        <ul>
                          <li>Name: {product.product_name}</li>
                          <li>Brand: {product.brand_name}</li>
                          <li>Type: {product.product_type}</li>
                          <li>Price: ${product.product_price}</li>
                          <li>Rating: {product.rating}</li>
                        </ul>
                        <div className="btns">
                          <button className="details">Details</button>
                          <button className="update">Update</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            {productAds?.length > 0 &&
              productAds?.map((productAd) => (
                <>
                  <SwiperSlide>
                    <div className="products__item products__ad">
                      <img src={productAd.ad_image} alt={productAd.brand} />
                    </div>
                  </SwiperSlide>
                </>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Products;
