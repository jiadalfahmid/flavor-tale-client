import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const testimonials = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqkncdA_sIJONdgp5fzgatwQEZf94NaFpzQ&s",
    name: "John Doe",
    feedback:
      "The best dining experience I've ever had! The food was delicious, and the ambiance was amazing.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw2X5Uat_eUMklceB6LDjCBWP2IRcSKOG2w&s",
    name: "Jane Smith",
    feedback:
      "Flavor Tales exceeded my expectations. The dishes are unique and full of flavor. Highly recommend it!",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUNlaXAncPXePW_XUmIFhQa6t7Os6LWPuCw&s",
    name: "Michael Brown",
    feedback:
      "From the service to the food, everything was perfect. Can't wait to come back again!",
  },
  {
    image: "https://thelightcommittee.com/wp-content/uploads/elementor/thumbs/square-crop-headshot-example-qaolsub3jkx9oc9t4b1dya6nzy8ghnu4dx0zwmq62o.jpg",
    name: "Emily Davis",
    feedback:
      "The attention to detail in every dish is impressive. A true gem for food lovers.",
  },
  {
    image: "https://b1688923.smushcdn.com/1688923/wp-content/uploads/2019/12/Jayden-1-Melbourne-Acting-Headshots-Julia-Nance-Portraits-480x600.jpg?lossy=2&strip=1&webp=1",
    name: "Chris Wilson",
    feedback:
      "An unforgettable culinary journey. Everything was crafted with care and passion. 10/10!",
  },
];

const Testimony = () => {
  return (
    <div className="p-8 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
         delay: 3000,
         disableOnInteraction: false,
       }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex flex-col text-center items-center">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s feedback`}
              className="w-32 h-32 mt-12 mx-auto rounded-full object-cover mb-4 shadow-md"
            />
            <p className="text-lg lg:w-1/3 mx-auto italic text-base-content text-center mb-3">
              "{testimonial.feedback}"
            </p>
            <h3 className="text-xl font-semibold text-base-content mb-12">
              - {testimonial.name}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimony;
