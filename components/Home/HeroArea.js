"use client"; // Ensures Swiper only runs on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const HeroArea = () => {
  const sliderData = [
    {
      id: 1,
      title: "Empowering Students for a Brighter Future",
      img: "/assets/img/slider/slider-1.jpg",
    },
    {
      id: 2,
      title: (
        <>
          Dedicated to <br /> Excellence in Education
        </>
      ),
      img: "/assets/img/slider/slider-2.jpg",
    },
    {
      id: 3,
      title: "Nurturing Minds, Shaping Characters",
      img: "/assets/img/slider/slider-5.jpeg",
    },
    {
      id: 4,
      title: (
        <>
          Building a <br /> Community of Learners
        </>
      ),
      img: "/assets/img/slider/slider-4.jpg",
    },
  ];

  return (
    <section className="slider__area">
      <div className="slider__active">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          navigation={true} // ✅ Navigation enabled directly
          modules={[EffectFade, Autoplay, Navigation]} // ✅ Modules properly imported
          className="swiper-container"
        >
          {sliderData.map((slider) => (
            <SwiperSlide
              key={slider.id}
              className="slider__item swiper-slide p-relative slider__height d-flex align-items-center z-index-1"
            >
              {/* Background Image */}
              <div className="slider__bg slider__overlay include-bg">
                <Image
                  src={slider.img}
                  layout="fill"
                  objectFit="cover"
                  alt="Hero Slider"
                  priority
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-10 col-sm-10">
                    <div className="slider__content p-relative z-index-1">
                      <span>Your School Name</span>
                      <h2 className="slider__title">{slider.title}</h2>
                      <p>
                        We believe everyone should have the opportunity to create progress through technology.
                      </p>
                      <div className="slider__btn">
                        <Link href="/admission" passHref>
                          <a className="tp-btn">Book your Seat</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroArea;
