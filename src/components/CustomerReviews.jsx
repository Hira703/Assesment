import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import company1 from "../assets/images/Union.svg";
import company2 from "../assets/images/Union (1).svg";
import logo from "../assets/images/Other Company.svg";

const reviews = [
  {
    id: 1,
    rating: 5,
    companyLogos: [company1],
    title: "Game-Changer for My Business!",
    text: "CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus!",
    avatar: "https://i.pravatar.cc/100?img=1",
    name: "Alice Johnson",
    role: "Product Manager",
  },
  {
    id: 2,
    rating: 4,
    companyLogos: [company2, logo],
    title: "Fast, Reliable, and Stress-Free!",
    text: "CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus!",
    avatar: "https://i.pravatar.cc/100?img=2",
    name: "John Smith",
    role: "CEO",
  },
  {
    id: 3,
    rating: 5,
    companyLogos: [logo],
    title: "Smooth & Transparent!",
    text: "The simplicity of CASA is unmatched. Clear pricing, no hidden fees, and instant cash flow. I feel in control of my business finances for the first time!",
    avatar: "https://i.pravatar.cc/100?img=5",
    name: "Sophia Lee",
    role: "Startup Founder",
  },
  {
    id: 4,
    rating: 5,
    companyLogos: [ logo],
    title: "Exactly What We Needed!",
    text: "CASA gave us the flexibility to handle our day-to-day operations without worrying about delayed payments. Truly a lifesaver for small businesses.",
    avatar: "https://i.pravatar.cc/100?img=7",
    name: "Michael Carter",
    role: "Entrepreneur",
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8F8F8] dark:from-gray-900 dark:to-gray-800 py-16">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center gap-4 px-4">
        <span className="inline-block bg-[#DFEDE3] text-[#0F4E23] text-sm px-5 py-1 rounded-full font-medium tracking-wide">
          ★ Reviews
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Hear What Customers Say <br /> About{" "}
          <span className="text-[#0F4E23]">CASA!</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mt-2">
          Trusted by thousands of business owners worldwide. Discover how CASA
          is helping companies thrive.
        </p>
      </div>

      {/* Review Slider */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          pagination={{
            el: ".custom-pagination", // target custom div
            clickable: true,
            bulletClass:
              "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full inline-block mx-1 cursor-pointer transition-all duration-300",
            bulletActiveClass: "!bg-[#0F4E23] scale-110",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                {/* Stars & Company */}
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-6 w-full">
                  <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <div className="flex items-center space-x-3 justify-center mt-3 sm:mt-0">
                    {review.companyLogos.map((logo, idx) => (
                      <img
                        key={idx}
                        src={logo}
                        alt={`Company Logo ${idx + 1}`}
                        className="w-full max-w-[110px] hover:scale-105 transition-transform cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

                {/* Heading & Text */}
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">
                  {review.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed">
                  {review.text}
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4 justify-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#0F4E23]/40">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-8"></div>
      </div>
    </section>
  );
};

export default CustomerReviews;
