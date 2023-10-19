import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../assets";
import "./Products.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Products = () => {
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
            
            <SwiperSlide>
              <div className="products__item">
                <img src={images.logo} alt="product thumb" />
                <div className="specs">
                  <ul>
                    <li>Name: ddd</li>
                    <li>Brand: ddd</li>
                    <li>Type: ddd</li>
                    <li>Price: ddd</li>
                    <li>Rating: ddd</li>
                  </ul>
                  <div className="btns">
                    <button className="details">Details</button>
                    <button className="update">Update</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="products__item">
                <img src={images.logo} alt="product thumb" />
                <div className="specs">
                  <ul>
                    <li>Name: ddd</li>
                    <li>Brand: ddd</li>
                    <li>Type: ddd</li>
                    <li>Price: ddd</li>
                    <li>Rating: ddd</li>
                  </ul>
                  <div className="btns">
                    <button className="details">Details</button>
                    <button className="update">Update</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="products__item">
                <img src={images.logo} alt="product thumb" />
                <div className="specs">
                  <ul>
                    <li>Name: ddd</li>
                    <li>Brand: ddd</li>
                    <li>Type: ddd</li>
                    <li>Price: ddd</li>
                    <li>Rating: ddd</li>
                  </ul>
                  <div className="btns">
                    <button className="details">Details</button>
                    <button className="update">Update</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="products__item">
                <img src={images.logo} alt="product thumb" />
                <div className="specs">
                  <ul>
                    <li>Name: ddd</li>
                    <li>Brand: ddd</li>
                    <li>Type: ddd</li>
                    <li>Price: ddd</li>
                    <li>Rating: ddd</li>
                  </ul>
                  <div className="btns">
                    <button className="details">Details</button>
                    <button className="update">Update</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="products__item">
                <img src={images.logo} alt="product thumb" />
                <div className="specs">
                  <ul>
                    <li>Name: ddd</li>
                    <li>Brand: ddd</li>
                    <li>Type: ddd</li>
                    <li>Price: ddd</li>
                    <li>Rating: ddd</li>
                  </ul>
                  <div className="btns">
                    <button className="details">Details</button>
                    <button className="update">Update</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Products;
