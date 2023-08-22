import React from "react";
import css from "./testominal.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testominal = () => {
  return (
    <div className={css.testominal}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Seedily say has suitable disposal and boy. Exersice joy man children
            rejoice
          </span>
        </div>

        <img src={Hero} alt="" />
        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customers With Us</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
          breakpoints={{
            856:{
              slidesPerView:3
            },
            640:{
              slidesPerView:2
            },
            0:{
              slidesPerView:1
            }
          }}  
        >
          {TestimonialsData.map((testiominal, i) => (
            <SwiperSlide>
              <div className={css.testiominal}>
                <img src={testiominal.image} alt="" />
                <span>{testiominal.comment}</span>
                <hr />
                <span>{testiominal.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testominal;
