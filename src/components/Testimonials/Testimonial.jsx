import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Man from "../../img/Man.png"
import fam from "../../img/fam.png";
import profilePic3 from "../../img/profilePic3.png";
import frau from "../../img/frau.png";

const Testimonial = () => {
  const clients = [
    {

      img: profilePic3,
      review:
        "Exceptional work! Katada Alrawi consistently exceeds expectations. Their dedication, attention to detail, and innovative solutions have been instrumental in the success of our projects. Highly recommended!",
    },
    {
      img: Man,
      review:
      "Outstanding! Katada Alrawiconsistently delivers exceptional results. Their expertise, commitment, and attention to detail make them an invaluable asset to any project. Highly satisfied with their work!"

      ,
    },
    {
      img: frau,
      review:
      "Exceptional service! Katada Alrawi goes above and beyond, providing top-notch results every time. Their creativity, professionalism, and reliability set a high standard. A pleasure to work with!",
    },
    {
      img: fam,
      review:
      "Impressive work! Katada Alrawi consistently delivers excellence. Their skill, dedication, and ability to understand our needs make them a standout professional. Highly recommend for quality and reliability!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
