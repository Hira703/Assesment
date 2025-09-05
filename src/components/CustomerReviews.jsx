import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
  return (
    <section className="bg-white dark:bg-gray-800 flex flex-col mt-12">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center gap-4 px-4">
        <span className="inline-block bg-[#DFEDE3] text-[#0F4E23] text-sm px-4 py-1 rounded-full">
          Reviews
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Hear What Customers Say <br /> About CASA!
        </h2>
        <p className="text-base md:text-lg text-[#686868] max-w-2xl">
          Trusted by Thousands of Business Owners. See what our satisfied
          customers have to say about CASA.
        </p>
      </div>

      {/* Review Cards */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-[#F8F8F8] shadow-lg rounded-lg p-6 relative hover:shadow-xl transition-shadow duration-300 flex flex-col">
          {/* Top row: Stars & Company */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4 w-full space-y-2 sm:space-y-0 sm:space-x-2">
            {/* Rating */}
            <div className="flex items-center space-x-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Company Name SVG + Logo */}
            <div className="flex items-center space-x-2 flex-wrap justify-center">
              {/* Company Name SVG */}
              <svg
                className="w-full max-w-[100px] sm:max-w-[119px] hover:scale-105 transition-transform cursor-pointer"
                viewBox="0 0 119 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8782 9.52272C19.1996 9.52272 21.0815 11.4046 21.0815 13.726V30.4784H4.32876C2.00735 30.4784 0.125488 28.5966 0.125488 26.2752V21.5843C0.125488 19.2629 2.00735 17.381 4.32876 17.381H8.85719V24.0387C8.85719 24.7019 9.39491 25.2397 10.0581 25.2397H12.3498V15.9624C12.3498 15.2992 11.8121 14.7618 11.1489 14.7615H0.425722V9.52272H16.8782ZM36.7979 25.2397L36.7982 0.791016H45.5299V30.4784H28.7774C26.456 30.4784 24.5741 28.5966 24.5741 26.2752V13.726C24.5741 11.4046 26.456 9.52272 28.7774 9.52272H33.3052V24.0387C33.3052 24.7019 33.843 25.2397 34.5062 25.2397H36.7979ZM61.2465 25.2397V9.52272H69.9785V35.0057C69.9785 37.3271 68.0966 39.2089 65.7752 39.2089H49.3227V33.098H61.2468V30.4784H53.2257C50.9043 30.4784 49.0225 28.5966 49.0225 26.2752V9.52272H57.7539V24.0387C57.7539 24.7019 58.2916 25.2397 58.9548 25.2397H61.2465ZM90.2236 9.52272C92.545 9.52272 94.4268 11.4046 94.4268 13.726V18.4168C94.4268 20.7383 92.545 22.6201 90.2236 22.6201H85.6951V15.9627C85.6951 15.2995 85.1577 14.7618 84.4942 14.7618H82.2025V24.0387C82.2025 24.7019 82.7402 25.2397 83.4035 25.2397H94.1266V30.4784H77.6744C75.353 30.4784 73.4711 28.5966 73.4711 26.2752V9.52272H90.2236ZM114.672 9.52272C116.994 9.52272 118.875 11.4046 118.875 13.726V30.4784H110.144V15.9624C110.144 15.3019 109.603 14.7615 108.943 14.7615H106.651V30.4784H97.9195V9.52272H114.672Z"
                  fill="#32AA52"
                />
              </svg>

             
            </div>
          </div>

          {/* Heading & Quote */}
          <h3 className="text-lg font-semibold mb-2 text-center">
            Game-Changer for My Business!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
            CASA has completely transformed my cash flow. As a restaurant owner,
            waiting for credit card payments used to be a struggle. Now, I get
            my funds within 24 hours, allowing me to pay suppliers and staff on
            time. The process is seamless, and the transparency in pricing is a
            huge plus!
          </p>

          {/* User Info */}
          <div className="flex items-center space-x-3 justify-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://i.pravatar.cc/100?img=1"
                  alt="profile1"
                />
              </div>
            </div>
            <div>
              <p className="font-medium">Alice Johnson</p>
              <p className="text-sm text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F8F8F8] shadow-lg rounded-lg p-6 relative hover:shadow-xl transition-shadow duration-300 flex flex-col">
          {/* Top row: Stars & Company */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4 w-full space-y-2 sm:space-y-0 sm:space-x-2">
            {/* Rating */}
            <div className="flex items-center space-x-1 text-yellow-400">
              {Array.from({ length: 4 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Company Name SVG + Logo */}
            <div className="flex items-center space-x-2 flex-wrap justify-center">
              {/* Company Name SVG */}
              <svg
                className="w-full max-w-[100px] sm:max-w-[111px] hover:scale-105 transition-transform cursor-pointer"
                viewBox="0 0 111 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.05111 10.0098L10.892 9.203C12.1022 9.00129 12.3039 8.39619 12.3039 7.79107C12.3039 6.37915 11.2954 5.16893 8.87496 5.16893C6.45452 5.16893 5.2443 6.58085 5.04259 8.39618L0.201704 7.38767C0.605111 4.16041 3.42896 0.731445 8.87496 0.731445C15.1278 0.731445 17.5482 4.36211 17.5482 8.39618V18.2797C17.5482 18.812 17.6044 19.4568 17.6575 20.0656C17.705 20.6102 17.7499 21.126 17.7499 21.5069H12.909C12.7073 20.9018 12.7073 19.8933 12.7073 19.0865C11.6988 20.7001 9.68178 22.112 6.85793 22.112C2.62215 22.112 0 19.2882 0 16.0609C0 12.4303 2.62215 10.4132 6.05111 10.0098ZM12.5056 13.4388V12.632L8.06815 13.2371C6.65622 13.4388 5.6477 14.2456 5.6477 15.8592C5.6477 17.0694 6.45452 18.2797 8.26985 18.2797C10.2869 18.078 12.5056 16.8677 12.5056 13.4388Z"
                  fill="#141414"
                />
                <path
                  d="M25.6165 11.4217L18.5569 1.33656H25.0114C25.4466 2.06189 26.9251 4.24792 28.0213 5.86858L28.0218 5.86937L28.0231 5.87126C28.4503 6.50285 28.8192 7.04833 29.0455 7.38767L33.0795 1.33656H43.9716L47.804 14.2456L52.0398 1.33656H57.6875L62.1249 14.2456L65.7556 1.33656H71.2016L64.9488 21.5069H59.5028L54.8636 7.79108L50.2244 21.5069H44.7784L38.5735 2.11654L32.071 11.22L39.3323 21.5069H33.0795L28.8438 15.2541C28.0369 16.2626 25.4148 20.2967 24.8097 21.5069H18.7586L25.6165 11.4217Z"
                  fill="#141414"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M76.6477 10.0098L81.4885 9.203C82.6988 9.00129 82.9005 8.39619 82.9005 7.79107C82.9005 6.37915 81.892 5.16893 79.4715 5.16893C77.0511 5.16893 75.8408 6.58085 75.6391 8.39618L70.7982 7.38767C71.2017 4.16041 74.0255 0.731445 79.4715 0.731445C85.7243 0.731445 88.1448 4.36211 88.1448 8.39618V18.2797C88.1448 18.8119 88.201 19.4566 88.254 20.0653C88.3015 20.6099 88.3465 21.126 88.3465 21.5069H83.3039C83.1022 20.9018 83.1022 19.8933 83.1022 19.0865C82.0937 20.7001 80.0766 22.112 77.2528 22.112C73.017 22.112 70.3949 19.2882 70.3949 16.0609C70.5965 12.4303 73.2187 10.4132 76.6477 10.0098ZM83.1022 13.4388V12.632L78.6647 13.2371C77.2528 13.4388 76.2442 14.2456 76.2442 15.8592C76.2442 17.0694 77.0511 18.2797 78.8664 18.2797C80.8834 18.078 83.1022 16.8677 83.1022 13.4388Z"
                  fill="#141414"
                />
                <path
                  d="M96.4146 18.8848L91.7754 29.3734H97.4231L110.13 1.33656H104.281L99.4402 13.2371L93.9942 1.33656H87.943L96.4146 18.8848Z"
                  fill="#141414"
                />
              </svg>

              {/* Company Logo SVG */}
              <svg
                className="w-full max-w-[50px] sm:max-w-[51px] hover:scale-105 transition-transform cursor-pointer"
                viewBox="0 0 51 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.4004 20.9985V14.1406L40.1135 9.09802V19.3849L0.78125 0.626465V7.48439L45.7612 28.865V18.7798L50.4004 20.9985Z"
                  fill="#D22630"
                />
                <path
                  d="M10.8458 25.9161V32.774L18.1071 36.203L6.40833 48.5069H14.0731L27.7889 33.9842L10.8458 25.9161Z"
                  fill="#D22630"
                />
                <path
                  d="M6.20681 13.4104L45.7407 32.3706L37.6726 35.3961L6.20681 20.2684V13.4104Z"
                  fill="#D22630"
                />
              </svg>
            </div>
          </div>

          {/* Heading & Quote */}
          <h3 className="text-lg font-semibold mb-2 text-center">
            Fast, Reliable, and Stress-Free!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
            CASA has completely transformed my cash flow. As a restaurant owner,
            waiting for credit card payments used to be a struggle. Now, I get
            my funds within 24 hours, allowing me to pay suppliers and staff on
            time. The process is seamless, and the transparency in pricing is a
            huge plus!
          </p>

          {/* User Info */}
          <div className="flex items-center space-x-3 justify-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pravatar.cc/100?img=2" alt="profile2" />
              </div>
            </div>
            <div>
              <p className="font-medium">John Smith</p>
              <p className="text-sm text-gray-500">CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-3 h-3 bg-[#DFEDE3] rounded-full"></span>
        <span className="w-3 h-3 bg-[#0F4E23] rounded-full"></span>
        <span className="w-3 h-3 bg-[#DFEDE3] rounded-full"></span>
      </div>
    </section>
  );
};

export default CustomerReviews;
