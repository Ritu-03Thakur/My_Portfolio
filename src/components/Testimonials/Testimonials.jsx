import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../data/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials" id="testimonials">
        <h1 className="testimonials-heading">Testimonials</h1>
        <div className="testimonials-content">
          <Swiper

            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials.map((testimonials) => (
              <SwiperSlide className="swiper-box" key={testimonials.id}>
                <figure>
                  <img src={testimonials.img} alt=""  />
                  <div className="swiper-content">
                    <blockquote>
                      <p >{testimonials.text}</p>
                    </blockquote>

                    <figcaption>
                      <span >{testimonials.name}</span>
                    </figcaption>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
