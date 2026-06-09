import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useContext } from "react";
import { apiContext } from "../../context/ApiContext";
import { cartContext } from "../../context/CartContext";

function Slider() {
  const {products} = useContext(apiContext)
  const {addToCart} = useContext(cartContext)
  
  return (
    <div className="Slider py">
      <div className="container">
        <div className="h1">Top Products</div>
        <div className="swiper-box">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {products.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <div className="card">
                    <img src={product.image} alt={product.title} />
                    <div className="card-body">
                      <b className="title">{product.title}</b>
                      <p className="price">${product.price}</p>
                      <button className="btn-primary" onClick={()=>addToCart(product)}>Add To Cart</button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <button className="btn-view"> View More</button>
      </div>
    </div>
  );
}

export default Slider;
