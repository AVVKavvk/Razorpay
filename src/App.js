
import "./index.css";
// import '../1';
import logos from "./1/logo.svg";
import logox from "./1/razorpayX.svg";
import flag from "./1/india-flag.svg";
import hero from "./1/hero-illustration.jpg";
import hero1 from "./1/hero-shape.svg";
import dooted from "./1/feature-section1-dottedrows.png";
import dooted1 from "./1/payment-suite.png";
import i1 from "./1/payment-link-icon.svg";
import i3 from "./1/payment-buttons-icon.svg";

import i4 from "./1/subscriptions-icon.svg";
import i2 from "./1/payment-pages-icon.svg";
import i5 from "./1/route-icon.svg";
import i6 from "./1/smart-collect-icon.svg";
import wave1 from "./1/x-flame-1.png";
import wave2 from "./1/x-flame-2.png";
import wave from "./1/features-wave.svg";
import wave3 from "./1/features2-wave.svg";
import feature2 from "./1/feature-section-2BG.svg";
import busness from "./1/buisness-banking.png";
import c1 from "./1/current-icon.svg";
import c2 from "./1/payouts-icon.svg";

import is from "./1/instant-settlement-bg.svg";
import is1 from "./1/upi-autopay-bg.svg";
// import is2 from "./1/payment-buttons-icon.svg";

import rxicon from "./1/instant-settlement-icon.svg";
import payicon from "./1/payment-buttons-icon.svg";
import autoicon from "./1/autopay-icon.svg";

import bg2 from "./1/core-features-sectionBg.svg";
import fi1 from "./1/instant-activation-icon.svg";
import fi7 from "./1/dashboard-reporting-icon.svg";
import fi4 from "./1/payment-modes.svg";
import fi2 from "./1/easy-integration.svg";
import fi3 from "./1/api-driven-icon.svg";
import fi5 from "./1/simple-pricing.svg";
import fi8 from "./1/secure-icon.svg";
import fi6 from "./1/industry-support-icon.svg";
import companys from "./1/comanies.png";
import mani from "./1/testimonial.jpg";
import coma from "./1/coma.png";
import fabg from "./1/CTABg.svg";
import fabgr from "./1/ctaImg.svg";
import manicompany from "./1/fake-company-logo.png";
import footer1 from "./1/footer-certificate-1.png";
import footer2 from "./1/footer-certificate-2.jpg";
import facebook from "./1/facebook-icon.svg";
import twitter from "./1/twitter-icon.svg";
import instagram from "./1/instagram-icon.svg";
import linkedin from "./1/linkedin-icon.svg";
import github from "./1/github-icon.svg";

import { Check, ArrowRight, ArrowLeft, ChevronRight } from "react-feather";
import Convter from "./Convter";

function App() {
  return (
    <>
      <div class="relative overflow-hidden">
        <nav class="bg-deepBlue">
          <div class="relative w-11/12 max-w-[1080px] mx-auto flex pb-10 pt-6 flex-row sm:flex-row lg:flex-row lg:pb-0 lg:pt-0 items-center justify-between ">
            <a href="/" class="pr-7 px-7 cursor-pointer">
              <img src={logos} alt="" width="125px" height="30px" />
            </a>
            <ul class="flex space-x-6">
              <li class="text-white font-mullish py-7 hidden lg:block hover:text-lightBlue cursor-pointer transition-all duration-200 relative group ">
                <a href="#">Payments</a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>
              <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Banking </a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>
              <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">line of Credit</a>
              </li>
              <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Payroll</a>
              </li>
              <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Resources</a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>
              <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Support</a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>
              <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block">
                <a href="#">Pricing</a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              </li>
            </ul>

            <div class=" flex space-x-6 ">
              <img
                src={flag}
                alt=""
                width="28px"
                height="20px"
                class="hidden lg:block"
              />

              <button
                class="py-3 px-5 font-mullish text-white border-lightBlue border
        rounded-sm text-sm  font-bold"
              >
                Log in
              </button>
              <button
                class="py-3 px-4 font-mullish rounded-sm text-sm font-bold
        bg-white text-lightBlue300 border transition-all duration-200
        hover:text-lightBlue500 hidden lg:flex"
              >
                Sign Up <ArrowRight class=" px-1" />
              </button>
            </div>
          </div>
        </nav>
        <section class="bg-deepBlue relative ">
          {/* left */}

          <div class=" w-11/12 max-w-[1080px]  flex flex-col sm:flex-col lg:flex-row  mx-auto justify-between items-center ">
            <div class=" space-y-8">
              <h1 class=" font-mullish font-bold leading-[1.2] text-[40px] text-white">
                Power your finance, grow your business
              </h1>
              <div class=" w-6 h-1 bg-greenLight"></div>
              <p class=" font-mullish text-[18px] leading-7 text-white opacity-70 ">
                Accept payments from customers. Automate payouts to vendors &
                employees. Never run out of working capital.
              </p>
              <button class="bg-lightBlue text-white py-[14px] px-[18px] font-mullish font-bold rounded-md  hover:bg-lightBlue500 transition-all duration-200 ">
                Sign Up Now
              </button>
            </div>
            {/* right */}

            <img src={hero} alt="" class=" pt-5 sm:max-w-[680px] sm:pt-0 w-full " />
          </div>
          {/* shape */}

          <div class=" absolute left-0 right-0 w-[100.1%] ">
            <img src={hero1} alt="" class="w-full object-fill " />
          </div>
        </section>
        <section class=" relative mt-[190px]  overflow-hidden ">
          <img
            src={dooted}
            alt=""
            loading="lazy"
            {...{ width: 233, height: 167 }}
            class=" absolute -top-[8rem] left-[10rem] hidden sm:inline-block  "
          />
          <img
            src={dooted}
            alt=""
            loading="lazy"
            {...{ width: 233, height: 167 }}
            class="absolute top-[3rem] right-0 hidden sm:inline-block rotate-180 "
          /> 

          <div class=" relative w-11/12   max-w-[1080px] mx-auto  sm:pt-4   ">
            <h2 class=" font-mullish font-bold text-2xl leading-[1.2] text-center">
              Accept Payments with Razorpay Payment Suite
            </h2>
            <div class=" bg-greenLight w-6 h-1 mx-auto  mt-4 mb-6"></div>
            {/* main cotent */}

            <div class=" w-full   bg-white flex flex-col  rounded-md relative p-10 py-12 border min-h-[520px]">
              {/* left  */}
              <div class="flex flex-col justify-between  w-full relative ">
                <h3 class=" font-mullish font-bold max-w-[500px] sm:text-[28px] text-[18px] sm:leading-10 mb-7 sm:mb-0 opacity-82 ">
                  Supercharge your business with the all‑powerful{" "}
                  <span class=" text-lightBlue"> Payment Gateway </span>
                </h3>
                <ul class=" space-y-2 left=0 opacity-70 sm:opacity-100 sm:mt-3">
                  <li class="flex font-mullish space-x-2 items-center ">
                    <Check class=" text-greenLight " />
                    <span> 100+ Payment Methods</span>
                  </li>
                  <li class="flex font-mullish space-x-2 items-center ">
                    <Check class=" text-greenLight " />

                    <span> Industry Leading Success Rate</span>
                  </li>
                  <li class="flex font-mullish space-x-2 items-center ">
                    <Check class=" text-greenLight " />
                    <span> Superior Checkout Experience</span>
                  </li>
                  <li class="flex font-mullish space-x-2 items-center ">
                    <Check class=" text-greenLight " />
                    <span> Easy to Integrate</span>
                  </li>
                  <li class="flex font-mullish space-x-2 items-center ">
                    <Check class=" text-greenLight " />
                    <span> Instant Settlements from day 1</span>
                  </li>
                  <li class="flex font-mullish space-x-2 items-center ">
                    <Check class=" text-greenLight " />
                    <span> In-depth Reporting and Insights</span>
                  </li>
                </ul>
                <div class="flex flex-col  space-x-4 hide mt-4 ">
                  <div class="  flex items-center flex-row space-x-2 font-mullish font-bold text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      {" "}
                      Know More{" "}
                    </a>
                    <ChevronRight class=" px-1 mx-1  group-hover:text-grayBlue" />
                  </div>
                  <button class="bg-lightBlue text-white flex  flex-row  items-center justify-center mt-4 space-x-3 py-[14px] px-[18px] font-mullish font-bold rounded-md  hover:bg-lightBlue500 transition-all duration-200 ">
                   
                   <p> Sign Up Now</p>
                    <ArrowRight class=" px-1 mx-1" />
                  </button>
                </div>
                <div class="sm:flex flex-row items-center space-x-4 hidden mt-4  ">
                  <button class="bg-lightBlue text-white flex flex-row  space-x-3 py-[14px] px-[18px] font-mullish font-bold rounded-md  hover:bg-lightBlue500 transition-all duration-200 ">
                    Sign Up Now
                    <ArrowRight class=" px-1 mx-1" />
                  </button>
                  <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      {" "}
                      Know More{" "}
                    </a>
                    <ChevronRight class=" px-1 mx-1  group-hover:text-grayBlue" />
                  </div>
                </div>
              </div>
              {/* right  */}
              <img
                src={dooted1}
                alt=""
                class="lg:max-w-[600px] sm:max-w-[350px] absolute hidden sm:block bottom-0 right-0"
              />
            </div>
          </div>

          <div class=" w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 mt-9 max-w-[1080px] mx-auto  gap-4  ">
            {/* boxes */}
            <div class="w-full relative cursor-pointer  mt-3 min-h-[15rem]  group  hover:shadow-xl rounded-md">
              <img
                src={i1}
                alt=""
                class=" absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8]  group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
              />
              <div class=" z-[100] absolute w-full h-full flex flex-col justify-between  pl-5 py-6 pr-8   ">
                <div>
                  <h3 class=" font-mullish font-bold text-[1.375rem] leading-[1.2] text-deepBlueHead ">
                    Payment Links{" "}
                  </h3>
                  <p class="font-mullish  text-grayText mt-6">
                    Share payment link via an email, SMS, messenger, chatbot
                    etc. and get paid immediately
                  </p>

                  <img
                    src={wave}
                    alt=""
                    class=" hidden  absolute bottom-0 right-0 group-hover:block transition-all duration-200 "
                  />
                </div>
                <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                  <a href="" class=" group-hover:text-grayBlue">
                    Know More
                  </a>
                  <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                </div>
              </div>
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1 stroke-[#818597] h-full w-full absoulute z-[10] transition-all duration-200 "
                //  style="stroke-opacity:0.15"
                {...{ strokeOpacity: 0.15 }}
              >
                <path
                  d="
             m 0 6
             a 6 6 0 0 1 6 -6 
             h 250.32501220703125
             a 16 16 0 0 1 11 5 
             l 77 77 
             a 16 16 0 0 1 5 11 
             v 126
             a 6 6 0 0 1 -6 6 
             h -337.32501220703125
             a 6 6 0 0 1 -6 -6 
             z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div class="w-full relative cursor-pointer  mt-3 min-h-[15rem]  group hover:shadow-xl rounded-md">
              <img
                src={i2}
                alt=""
                class=" absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
              />
              <div class=" z-[100] absolute w-full h-full flex flex-col justify-between  pl-5 py-6 pr-8 ">
                <div>
                  <h3 class=" font-mullish font-bold text-[1.375rem] leading-[1.2] text-deepBlueHead ">
                    Payment Pages
                  </h3>
                  <p class="font-mullish  text-grayText mt-6">
                    Take your store online instantly with zero coding. Accept
                    international &amp; domestic payments
                  </p>
                  <img
                    src={wave}
                    alt=""
                    class=" hidden  absolute bottom-0 right-0 group-hover:block transition-all duration-200 "
                  />
                </div>
                <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                  <a href="" class=" group-hover:text-grayBlue">
                    Know More
                  </a>
                  <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                </div>
              </div>
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1 stroke-[#818597] h-full w-full absoulute z-[10] transition-all duration-200"
                //  style="stroke-opacity:0.15"
                {...{ strokeOpacity: 0.15 }}
              >
                <path
                  d="
             m 0 6
             a 6 6 0 0 1 6 -6 
             h 250.32501220703125
             a 16 16 0 0 1 11 5 
             l 77 77 
             a 16 16 0 0 1 5 11 
             v 126
             a 6 6 0 0 1 -6 6 
             h -337.32501220703125
             a 6 6 0 0 1 -6 -6 
             z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div class="w-full relative cursor-pointer  mt-3 min-h-[15rem] group  hover:shadow-xl rounded-md">
              <img
                src={i3}
                alt=""
                class=" absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
              />
              <div class=" z-[100] absolute w-full h-full flex flex-col justify-between  pl-5 py-6 pr-8 ">
                <div>
                  <h3 class=" font-mullish font-bold text-[1.375rem] leading-[1.2] text-deepBlueHead ">
                    Payment Button
                  </h3>
                  <p class="font-mullish  text-grayText mt-6">
                    Create, Copy &amp; Collect With Payment Button. Collect one
                    time or subscription payments &amp; more
                  </p>
                  <img
                    src={wave}
                    alt=""
                    class=" hidden  absolute bottom-0 right-0 group-hover:block transition-all duration-200 "
                  />
                </div>
                <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                  <a href="" class=" group-hover:text-grayBlue">
                    Know More
                  </a>
                  <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                </div>
              </div>
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1 stroke-[#818597] h-full w-full absoulute z-[10] transition-all duration-200"
                //  style="stroke-opacity:0.15"
                {...{ strokeOpacity: 0.15 }}
              >
                <path
                  d="
             m 0 6
             a 6 6 0 0 1 6 -6 
             h 250.32501220703125
             a 16 16 0 0 1 11 5 
             l 77 77 
             a 16 16 0 0 1 5 11 
             v 126
             a 6 6 0 0 1 -6 6 
             h -337.32501220703125
             a 6 6 0 0 1 -6 -6 
             z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div class="w-full relative cursor-pointer  mt-3 min-h-[15rem]  group hover:shadow-xl rounded-md">
              <img
                src={i4}
                alt=""
                class=" absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
              />
              <div class=" z-[100] absolute w-full h-full flex flex-col justify-between  pl-5 py-6 pr-8 ">
                <div>
                  <h3 class=" font-mullish font-bold text-[1.375rem] leading-[1.2] text-deepBlueHead ">
                    Subscriptions
                  </h3>
                  <p class="font-mullish  text-grayText mt-6">
                    Subscription plans with automated recurring transactions on
                    various payment modes.
                  </p>
                  <img
                    src={wave}
                    alt=""
                    class=" hidden  absolute bottom-0 right-0 group-hover:block transition-all duration-200 "
                  />
                </div>
                <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                  <a href="" class=" group-hover:text-grayBlue">
                    Know More
                  </a>
                  <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                </div>
              </div>
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1 stroke-[#818597] h-full w-full absoulute z-[10] transition-all duration-200"
                //  style="stroke-opacity:0.15"
                {...{ strokeOpacity: 0.15 }}
              >
                <path
                  d="
             m 0 6
             a 6 6 0 0 1 6 -6 
             h 250.32501220703125
             a 16 16 0 0 1 11 5 
             l 77 77 
             a 16 16 0 0 1 5 11 
             v 126
             a 6 6 0 0 1 -6 6 
             h -337.32501220703125
             a 6 6 0 0 1 -6 -6 
             z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div class="w-full relative cursor-pointer  mt-3 min-h-[15rem]  group hover:shadow-xl rounded-md">
              <img
                src={i5}
                alt=""
                class=" absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
              />
              <div class=" z-[100] absolute w-full h-full flex flex-col justify-between  pl-5 py-6 pr-8 ">
                <div>
                  <h3 class=" font-mullish font-bold text-[1.375rem] leading-[1.2] text-deepBlueHead ">
                    Route
                  </h3>
                  <p class="font-mullish  text-grayText mt-6">
                    Split incoming payments auto- matically to vendor’s
                    accounts, manage marketplace money flow...
                  </p>
                  <img
                    src={wave}
                    alt=""
                    class=" hidden  absolute bottom-0 right-0 group-hover:block transition-all duration-200 "
                  />
                </div>
                <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                  <a href="" class=" group-hover:text-grayBlue">
                    Know More
                  </a>
                  <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                </div>
              </div>
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1 stroke-[#818597] h-full w-full absoulute z-[10] transition-all duration-200"
                //  style="stroke-opacity:0.15"
                {...{ strokeOpacity: 0.15 }}
              >
                <path
                  d="
             m 0 6
             a 6 6 0 0 1 6 -6 
             h 250.32501220703125
             a 16 16 0 0 1 11 5 
             l 77 77 
             a 16 16 0 0 1 5 11 
             v 126
             a 6 6 0 0 1 -6 6 
             h -337.32501220703125
             a 6 6 0 0 1 -6 -6 
             z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div class="w-full relative cursor-pointer  mt-3 min-h-[15rem]  group hover:shadow-xl rounded-md">
              <img
                src={i6}
                alt=""
                class=" absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
              />
              <div class=" z-[100] absolute w-full h-full flex flex-col justify-between  pl-5 py-6 pr-8 ">
                <div>
                  <h3 class=" font-mullish font-bold text-[1.375rem] leading-[1.2] text-deepBlueHead ">
                    Smart Collect
                  </h3>
                  <p class="font-mullish  text-grayText mt-6">
                    Automatically reconcile incoming NEFT, RTGS, IMPS, UPI
                    payments using Customer Identifiers &amp; UPI-IDs
                  </p>
                  <img
                    src={wave}
                    alt=""
                    class=" hidden  absolute bottom-0 right-0 group-hover:block transition-all duration-200 "
                  />
                </div>
                <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                  <a href="" class=" group-hover:text-grayBlue">
                    Know More
                  </a>
                  <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                </div>
              </div>
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1 stroke-[#818597] h-full w-full absoulute z-[10] transition-all duration-200"
                //  style="stroke-opacity:0.15"
                {...{ strokeOpacity: 0.15 }}
              >
                <path
                  d="
             m 0 6
             a 6 6 0 0 1 6 -6 
             h 250.32501220703125
             a 16 16 0 0 1 11 5 
             l 77 77 
             a 16 16 0 0 1 5 11 
             v 126
             a 6 6 0 0 1 -6 6 
             h -337.32501220703125
             a 6 6 0 0 1 -6 -6 
             z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url(${feature2})`,
          }}
          class="bg-cover sm:pb-[250px] pb-[100px] lg:pb-[320px] mt-14 lg:pt-[8rem] sm:pt-[7.5rem] pt-[4.5rem]"
        >
          <div class=" relative w-11/12  max-w-[1080px] mx-auto pt-4 hide flex flex-row justify-around    ">
            <div class="flex left-0 flex-col flex-wrap">

            <h2 class=" font-mullish font-bold text-3xl text-white leading-[1.2] text-center  ">
              Explore <span> <img
                        src={logox}
                        alt=""
                        width="168px"
                        height="32px"
                        class="inline-block"
                        /></span> <span class="text-greenLight"> Business Banking</span>
                      
            </h2>
            <div class=" bg-greenLight w-6 h-1 mx-auto mt-4 mb-6"></div>
                        </div>
                        <img
                  src={wave2}
                  alt=""
                  loading="lazy"
                  class="  w-[200px] "
                />
            </div>
          <div class=" relative w-11/12  max-w-[1080px] mx-auto pt-4    ">
            <div class="hidden sm:block">

            <h2 class=" font-mullish font-bold text-2xl text-white leading-[1.2] text-center">
              Explore RazorpayX powered Business Banking
            </h2>
            <div class=" bg-greenLight w-6 h-1 mx-auto mt-4 mb-6"></div>
            </div>

            <div class=" w-full min-h[440px] flex flex-col relative   ">
              <div>
                <img
                  src={wave1}
                  alt=""
                  loading="lazy"
                  class="absolute -top-[142px] -left-[140px] w-[200px] "
                />
              </div>
              <img
                src={wave2}
                alt=""
                loading="lazy"
                class="absolute top-[150px] -right-[180px] w-[200px]"
              />

              <div>
                <div class="relative w-full bg-[#181c2e] p-10 py-12 border border-slate-700 z-20 rounded-md ">
                  {/* left  */}
                  <div class="flex flex-col justify-between items-start h-full w-full gap-12 z-20 ">
                    <h3 class=" font-mullish text-[28px] text-white font-bold leading-10 max-w-[500px] hidden sm:block">
                      Manage your company’s finances and supercharge your
                      business banking with
                      <img
                        src={logox}
                        alt=""
                        width="168px"
                        height="32px"
                        class="inline-block"
                      />
                    </h3>
                    <ul class=" space-y-2 ">
                      <li class="font-mullish text-white flex items-center space-x-2">
                        <Check class=" text-greenLight " />
                        <span> Open a fully digital current account</span>
                      </li>
                      <li class="font-mullish text-white flex items-center space-x-2">
                        <Check class=" text-greenLight " />

                        <span> Automate payables & compliment payments</span>
                      </li>
                      <li class="font-mullish text-white flex items-center space-x-2 ">
                        <Check class=" text-greenLight " />
                        <span>
                          Simplify and track spends with Corporate cards
                        </span>
                      </li>
                      <li class="font-mullish text-white flex items-center space-x-2 ">
                        <Check class=" text-greenLight " />
                        <span>View financial insights at a glance</span>
                      </li>
                    </ul>
                    <div class="  flex  flex-row space-x-2 font-mullish font-bold text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      {" "}
                      Know More{" "}
                    </a>
                    <ChevronRight class=" px-1 mx-1  group-hover:text-grayBlue" />
                  </div>
                    <div class="flex flex-col-reverse md:flex-row w-full items-center space-x-4 ">
                      <button
                        class="relative bg-lightBlue  items-center hidden sm:flex
                          place-content-center md:justify-start text-white py-[14px] px-[18px]  md:pr-[90px] rounded-md
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200
                           self-stretch md:w-fit"
                      >
                        Sign Up Now
                        <div
                          class="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] 
                              flex justify-center items-center"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="w-[20px] h-[20px] -skew-x-[20deg] "
                          >
                            <path
                              fill="currentColor"
                              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                            ></path>
                          </svg>
                        </div>
                      </button>
                      <button
                        class="relative bg-lightBlue flex items-center hide
                          place-content-center text-white py-[14px] px-[18px]  rounded-md
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200
                           self-stretch "
                      >
                        Sign Up Now
                        <div
                          class="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] 
                              flex justify-center items-center"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="w-[20px] h-[20px] -skew-x-[20deg] "
                          >
                            <path
                              fill="currentColor"
                              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                            ></path>
                          </svg>
                        </div>
                      </button>
                      {/* <div class="  items-center space-x-2 font-mullish hidden sm:flex font-bold text-lightBlue group ">
                        <a href="" class=" group-hover:text-grayBlue ">
                          {" "}
                          Know More{" "}
                        </a>
                        <ChevronRight class=" px-1 mx-1  group-hover:text-grayBlue" />
                      </div> */}

                    </div>
                     
                    <img
                      src={busness}
                      alt=""
                      class="max-w-[600px] absolute right-0 bottom-0 z-4 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class=" max-w-[1080px] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-14 gap-7">
              <div class=" w-full relative cursor-pointer  mt-3 min-h-[15rem]  group hover:shadow-xl rounded-md">
                <img
                  src={c1}
                  alt=""
                  class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[5] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500  transition-all duration-200"
                />
                <div class=" z-[9] absolute w-full h-full flex flex-col justify-between group  pl-5 py-6 pr-8 ">
                  <h3 class="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                    Current Account
                  </h3>
                  <p class=" font-mullish text-grayText mt-6">
                    Current accounts for fast-growing businesses, supported by
                    the best-in-class technology
                  </p>
                  <img
                    src={wave3}
                    alt=""
                    class=" hidden  absolute bottom-0 right-0 group-hover:block transition-all duration-200 "
                  />

                  <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      Know More
                    </a>
                    <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                  </div>
                </div>

                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-1 stroke-[#eeeff4] h-full w-full  relative z-[6]  transition-all duration-200"
                  //  style="stroke-opacity:0.15"
                  {...{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="
             m 0 6
             a 6 6 0 0 1 6 -6 
             h 250.32501220703125
             a 16 16 0 0 1 11 5 
             l 77 77 
             a 16 16 0 0 1 5 11 
             v 126
             a 6 6 0 0 1 -6 6 
             h -337.32501220703125
             a 6 6 0 0 1 -6 -6 
             z"
                    fill="#181C2E"
                  ></path>
                </svg>
              </div>
              <div class=" w-full relative cursor-pointer  mt-3 min-h-[15rem]  group hover:shadow-xl rounded-md">
                <img
                  src={c2}
                  alt=""
                  class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[5] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500  transition-all duration-200"
                />
                <div class=" z-[9] absolute w-full h-full flex flex-col justify-between group  pl-5 py-6 pr-8 ">
                  <h3 class="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                    Payouts
                  </h3>
                  <p class=" font-mullish text-grayText mt-6">
                    Make simple, reliable &amp; secure payouts to bank accounts,
                    UPI IDs or wallets
                  </p>
                  <img
                    src={wave3}
                    alt=""
                    class=" hidden  absolute bottom-0 right-0 group-hover:block transition-all duration-200 "
                  />

                  <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      Know More
                    </a>
                    <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                  </div>
                </div>

                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-1 stroke-[#eeeff4] h-full w-full  relative z-[6]  transition-all duration-200"
                  //  style="stroke-opacity:0.15"
                  {...{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="
             m 0 6
             a 6 6 0 0 1 6 -6 
             h 250.32501220703125
             a 16 16 0 0 1 11 5 
             l 77 77 
             a 16 16 0 0 1 5 11 
             v 126
             a 6 6 0 0 1 -6 6 
             h -337.32501220703125
             a 6 6 0 0 1 -6 -6 
             z"
                    fill="#181C2E"
                  ></path>
                </svg>
              </div>
              <div class=" w-full relative cursor-pointer  mt-3 min-h-[15rem]  group hover:shadow-xl rounded-md">
                <img
                  src={i1}
                  alt=""
                  class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[5] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500  transition-all duration-200"
                />
                <div class=" z-[9] absolute w-full h-full flex flex-col justify-between group  pl-5 py-6 pr-8 ">
                  <h3 class="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                    Payroll
                  </h3>
                  <p class=" font-mullish text-grayText mt-6">
                    Set your payroll and compliances like TDS, ESIC, PT, &amp;
                    PF on autopilot.
                  </p>
                  <img
                    src={wave3}
                    alt=""
                    class=" hidden  absolute bottom-0 right-0 group-hover:block transition-all duration-200 "
                  />

                  <div class="  flex items-center space-x-2 font-mullish font-bold text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      Know More
                    </a>
                    <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                  </div>
                </div>

                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-1 stroke-[#eeeff4] h-full w-full  relative z-[6]  transition-all duration-200"
                  //  style="stroke-opacity:0.15"
                  {...{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="
             m 0 6
             a 6 6 0 0 1 6 -6 
             h 250.32501220703125
             a 16 16 0 0 1 11 5 
             l 77 77 
             a 16 16 0 0 1 5 11 
             v 126
             a 6 6 0 0 1 -6 6 
             h -337.32501220703125
             a 6 6 0 0 1 -6 -6 
             z"
                    fill="#181C2E"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              class="w-full   items-center justify-evenly border border-slate-700
              mb-24 gap-y-6 hidden sm:flex relative rounded-md p-8"
            >
              <p class="font-mullish text-white text-xl">
                Check out the live demo to learn how RazorpayX works.
                <span class="font-bold"> No sign-up required!</span>
              </p>

              <button
                class="relative bg-lightBlue flex items-center 
                          justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200"
              >
                Check out the demo
                <div
                  class="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] 
                              flex justify-center items-center"
                ></div>
                <ArrowRight class=" skew-x-[0deg] absolute right-9" />
              </button>
            </div>
          </div>
        </section>

        <section class=" bg-white relative">
          <div class=" relative w-11/12  max-w-[1080px] mx-auto pt-4 ">
            <img
              src={dooted}
              alt=""
              loading="lazy"
              class="absolute w-[233px] left-[300px] -top-[6rem] hidden lg:block z-10"
            />
            <img
              src={dooted}
              alt=""
              loading="lazy"
              class="absolute w-[233px] -right-[3.5rem] -top-[6rem]  hidden sm:block z-10"
            />

            <div class="w-full relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 z-[10] ">
              <div class="relative flex items-center justify-center  mt-8 z-0">
                <h2 class="text-deepBlueHead font-mullish font-bold  text-4xl leading-[3.375rem]">
                  New in the
                  <br />
                  <span class="text-lightBlue500">Razorpay</span> <br />
                  Product Suite
                </h2>
              </div>

              {/* card1 */}

              <div
                style={{
                  backgroundImage: `url(${is}) no-repeat no-repeat`,
                  position: "relative",
                }}
                class="p-10 w-full max-h-[300px] cursor-pointer
        bg-no-repeat   transition-all duration-200 group "
                className="ho"
              >
                <div class="px-6 pt-3 mx-3">
                  <img
                    src={rxicon}
                    alt=""
                    class=" w-12 h-12 rounded-full bg-lightBlue"
                  />
                  <h2 class="font-mullish font-bold leading-[1.2] mt-3">
                    Instant Settlments
                  </h2>
                  <p class="font-mullish  text-grayText pt-6">
                    Settle your customer payments within 10 seconds as soon your
                    account is activated, even during holidays.
                  </p>
                  <div class="  flex items-center space-x-2 font-mullish font-bold  text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      Know More
                    </a>
                    <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div
                style={{
                  backgroundImage: `url(${is1}) no-repeat no-repeat `,
                  position: "relative",
                }}
                class="p-10 w-full max-h-[300px] cursor-pointer
        bg-no-repeat   transition-all duration-200 group "
                className="ho1 ho"
              >
                <div class="px-6 pt-3 mx-3">
                  <img
                    src={autoicon}
                    alt=""
                    class=" w-12 h-12 rounded-full bg-lightBlue"
                  />
                  <h2 class="font-mullish font-bold leading-[1.2] mt-3">
                    UPI AutoPay
                  </h2>
                  <p class="font-mullish  text-grayText pt-6">
                    Allow customers to set up recurring payments using UPI Apps.
                  </p>
                  <div class="  flex items-center space-x-2 font-mullish font-bold  text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      Know More
                    </a>
                    <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                  </div>
                </div>
              </div>
              {/* card3 */}

              <div
                style={{
                  backgroundImage: `url(${is1}) no-repeat no-repeat `,
                  position: "relative",
                }}
                class="p-10 w-full max-h-[300px] cursor-pointer
        bg-no-repeat   transition-all duration-200 group "
                className="ho ho2"
              >
                <div class="px-6 pt-3 mx-3">
                  <img
                    src={payicon}
                    alt=""
                    class=" w-12 h-12 rounded-full bg-lightBlue"
                  />
                  <h2 class="font-mullish font-bold leading-[1.2] mt-3">
                    Payment Button
                  </h2>
                  <p class="font-mullish  text-grayText pt-6">
                    Accept payments on your website, in less than 5 minutes. No
                    developer needed.
                  </p>
                  <div class="  flex items-center space-x-2 font-mullish font-bold  text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      Know More
                    </a>
                    <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                  </div>
                </div>
              </div>
              {/* card4 */}
              <div
                style={{
                  backgroundImage: `url(${is}) no-repeat no-repeat`,
                  position: "relative",
                }}
                class="p-10 w-full max-h-[300px] cursor-pointer
        bg-no-repeat   transition-all duration-200 group "
                className="ho"
              >
                <div class="px-6 pt-3 mx-3">
                  <img
                    src={i4}
                    alt=""
                    class=" w-12 h-12 rounded-full bg-lightBlue"
                  />
                  <h2 class="font-mullish font-bold leading-[1.2] mt-3">
                    QR Codes
                  </h2>
                  <p class="font-mullish  text-grayText pt-6">
                    Create unlimited QR codes with business branding and start
                    accepting payments for free*.
                  </p>
                  <div class="  flex items-center space-x-2 font-mullish font-bold  text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      Know More
                    </a>
                    <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                  </div>
                </div>
              </div>
              {/* card5 */}
              <div
                style={{
                  backgroundImage: `url(${is}) no-repeat no-repeat`,
                  position: "relative",
                }}
                class="p-10 w-full max-h-[300px] cursor-pointer
        bg-no-repeat   transition-all duration-200 group "
                className="ho"
              >
                <div class="px-6 pt-3 mx-3">
                  <img
                    src={i1}
                    alt=""
                    class=" w-12 h-12 rounded-full bg-lightBlue"
                  />
                  <h2 class="font-mullish font-bold leading-[1.2] mt-3">
                    Magic Chectout
                  </h2>
                  <p class="font-mullish  text-grayText pt-6">
                    Improve your order conversion rates &amp; reduce
                    return-to-origins. Boost your business by 20%!
                  </p>
                  <div class="  flex items-center space-x-2 font-mullish font-bold  text-lightBlue group ">
                    <a href="" class=" group-hover:text-grayBlue">
                      Know More
                    </a>
                    <ChevronRight class=" px-1 mx-1 mt-0 group-hover:text-grayBlue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url(${bg2})`,
          }}
          class="w-full 
bg-no-repeat bg-cover bg-center sm:mt-14 -mt-4 relative mb-16 rigth-0 corefeaturesection"
        >
          <div class="w-11/12 max-w-[1080px] relative mx-auto pt-[10rem] overflow-hidden sm:pt-0 my-14  ">
            <h2 class="font-mullish font-extrabold text-2xl text-center text-white pt-14 sm:pt-0 ">
              Features
            </h2>
            <div class="h-1 w-6 mx-auto bg-greenLight mt-3 mb-3 "></div>
            <p
              class="font-mullish text-white text-center mx-auto
           max-w-[450px]"
            >
              Empower your business with all the right tools to accept online
              payments and provide the best customer experience
            </p>
            <div class="w-full relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[8rem] sm:mt-14 text-white  font-mullish">
              <div class="w-full space-y-4 ">
                <img src={fi1} alt="" />
                <h2 class="font-bold  text-white">Instant Activation</h2>
                <p>
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with minimum documentation.
                </p>
              </div>
              <div class="w-full space-y-4 ">
                <img src={fi2} alt="" />
                <h2 class="font-bold  text-white">Easy Integration</h2>
                <p>
                  With plugins for all major platforms and languages, integrate
                  and go live with Razorpay in less than an hour.
                </p>
              </div>
              <div class="w-full space-y-4 ">
                <img src={fi3} alt="" />
                <h2 class="font-bold  text-white">API Driven</h2>
                <p>
                  Build your business for scale with our complete API-driven
                  automation that requires zero manual intervention.
                </p>
              </div>
              <div class="w-full space-y-4 ">
                <img src={fi4} alt="" />
                <h2 class="font-bold  text-white">100+ payment modes</h2>
                <p>
                  Offer your customers the luxury of all payment modes including
                  Credit/Debit cards, Netbanking, UPI, Wallets etc.
                </p>
              </div>
              <div class="w-full space-y-4 ">
                <img src={fi5} alt="" />
                <h2 class="font-bold  text-white">Simple Pricing</h2>
                <p>
                  Our innovative payment solutions with competitive pricing make
                  payments simpler.
                </p>
              </div>
              <div class="w-full space-y-4 ">
                <img src={fi6} alt="" />
                <h2 class="font-bold  text-white">Best in Industry Support</h2>
                <p>
                  Always available email, phone and chat based support to help
                  you in your every step.
                </p>
              </div>
              <div class="w-full space-y-4 ">
                <img src={fi7} alt="" />
                <h2 class="font-bold  text-white">Dashboard Reporting</h2>
                <p>
                  Real-time data and insights on your Razorpay Dashboard to make
                  informed business decisions.
                </p>
              </div>
              <div class="w-full space-y-4 ">
                <img src={fi8} alt="" />
                <h2 class="font-bold  text-white">Secure</h2>
                <p>
                  PCI DSS Level 1 compliant solution which removes your burden
                  of regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-[100]">
          <div class="W-11/12 max-w-[1080px] relative mx-auto mt-4 flex flex-col sm:flex-row font-mullish overflow-hidden">
            {/* left  */}
            <div class="flex flex-col justify-center mx-6 sm:mx-6 lg:mx-0 sm:w-[60%]">
              <h2 class="font-bold leading-[1.2] text-deepBlueHead text-2xl">
                Join the 50,00,000 businesses using Razorpay
              </h2>
              <div class="h-1 w-6 bg-greenLight mt-2"></div>
              <p class="mt-5 opacity-70 max-w-[600px]">
                We make it easier for you to focus on building great products
                while we work on simplifying your payments. Become one of us by
                joining thousands of our happy users and simplify the online
                payment experience for your customers.
              </p>
              <p class="mt-4 opacity-70 mb-5">
                {" "}
                Focus on your business while we handle the complexities of
                payments for you.
              </p>

              <button class="bg-lightBlue flex text-white file: py-[14px] px-[18px] max-w-[180px]  font-mullish font-bold rounded-md  hover:bg-lightBlue500 cursor-pointer transition-all duration-200 ">
                Get Started <ArrowRight class=" mx-2" />
              </button>
            </div>
            {/* right */}
            <div class="relative mt-14 sm:mt-0">

            <div
              style={{ background: `linear-gradient(180deg, #f4f8ff, #fff0)` }}
              class="absolute w-full h-[150px] top-0 z-50"
              ></div>
            <div class="h-[500px] sm:w-[400px] w-[350px] mx-auto relative overflow-hidden ">
              <img
                src={companys}
                alt=""
                class="h-auto w-full absolute moverovers"
                />
            </div>
            <div
              style={{ background: `linear-gradient(0deg, #f4f8ff, #fff0)` }}
              class="absolute w-full h-[150px] bottom-0 z-50"
            ></div>
            </div>
          </div>
        </section>

        <section class="relative ">
          <div class="w-11/12 max-w-[1300px] mx-auto sm:max-h-[550px] relative py-20">
            <img
              src={dooted}
              alt=""
              class="absolute w-[200px] top-[8rem] left-[2rem] -z-10 hidden sm:block "
            />
            <h2
              class=" font-mullish font-bold text-2xl leading-[1.2] mx-auto text-center
           "
            >
              An Experience
              <br />
              People Love to Talk About
            </h2>
            <div class="h-1 w-6 mx-auto bg-greenLight relative  mt-4  "></div>
            {/* main content */}
            {/* leftbutton */}
            <div class="h-20 w-20 rounded-full bg-gray-100  items-center flex-col hidden lg:flex cursor-pointer justify-center absolute left-16 - bottom-[150px]">
              <div class="h-14 w-14 rounded-full bg-gray-300 flex items-center justify-center  ">
                <ArrowLeft />
              </div>
            </div>
            {/* rightbutton */}
            <div class="h-20 w-20 rounded-full bg-gray-100  items-center justify-center hidden lg:flex absolute right-10 cursor-pointer   - bottom-[150px]">
              <div class="h-14 w-14 rounded-full bg-gray-300 flex items-center justify-center ">
                <ArrowRight />
              </div>
            </div>
            <div class="flex ralative  ">
              {/* main */}
              <div class="flex flex-col sm:flex-row max-w-[960px] items-center sm:justify-center font mx-auto lg:my-20 sm:my-15 my-5 space-x-[10rem]">
               
                
                <div class="flex flex-col   hide items-center">
                <div class="hide">
                  <img
                    src={mani}
                    alt=""
                    width={"320px"}
                    height={"320px"}
                    class=" rounded-xl mb-6 imge"
                  />
                </div>
                  <img src={coma} alt=""class="mt-6" />
                  <h2 class="font-mullish font-bold text-2xl  leading-[1.2] mt-1 mb-1">
                    Subham Kumar
                  </h2>
                  <p class="font-mullish">Product Manager</p>
                  <a href="" class="font-extralight underline ">
                    learn more
                  </a>
                  <p class="font-mullish font-extralight text-2xl text-center leading-[1.5] opacity-50 max-w-[500px]">
                    Acquire Customers From New Customer Segments
                  </p>
                  <img
                    src={manicompany}
                    alt=""
                    class="h-10 w-20 rounded-full"
                  />
                </div>
                <div class="hidden sm:block">
                  <img
                    src={mani}
                    alt=""
                    width={"320px"}
                    height={"320px"}
                    class=" rounded-xl"
                  />
                </div>
                <div class=" flex-col justify-center hidden sm:flex items-center">
                  <img src={coma} alt="" />
                  <p class="font-mullish font-extralight text-3xl leading-[1.5] opacity-50 max-w-[500px]">
                    Acquire Customers From New Customer Segments
                  </p>
                  <a href="" class="font-extralight underline ">
                    learn more
                  </a>
                  <h2 class="font-mullish font-bold text-2xl leading-[1.2] mt-1 mb-1">
                    Subham Kumar
                  </h2>
                  <p class="font-mullish">Product Manager</p>
                  <img
                    src={manicompany}
                    alt=""
                    class="h-10 w-20 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div class=" flex items-center justify-center sm:mt-2 lg:mt-7 space-x-2">
              <div class="w-3 h-3 rounded-full bg-gray-400"></div>
              <div class="w-3 h-3 rounded-full bg-lightBlue300"></div>
              <div class="w-3 h-3 rounded-full bg-gray-400"></div>
              <div class="w-3 h-3 rounded-full bg-gray-400"></div>
              <div class="w-3 h-3 rounded-full bg-gray-400"></div>
              <div class="w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: `url(${fabg})`,
          }}
          class="  w-full h-full bg-no-repeat bg-cover relative  ctaSection min-h-[510px]"
        >
          <div class=" w-11/12 max-w-[1080px] relative flex flex-row justify-center items-center font-mullish text-white mt-4 pt-10 ">
            {" "}
            <div>
              <div class="flex flex-col gap-5 mt-12 mx-5 sm:mx-0 max-w-[600px]">
                <h2 class=" font-bold text-white text-2xl mt-5 ">
                  Supercharge your business with Razorpay
                </h2>
                <div class=" h-1 w-6 bg-greenLight"></div>
                <p>
                  Sign up now to experience the future of payments and offer
                  your customers the best checkout experience.
                </p>
              </div>

              <ul class="grid grid-cols-2 sm:grid-cols-3 mx-3 sm:mx-0 gap-3 justify-center mt-6 ">
                <li class="flex font-mullish space-x-2 items-center ">
                  <Check class=" text-greenLight " />
                  <span> Quick Onboarding</span>
                </li>
                <li class="flex font-mullish space-x-2 items-center -px-8">
                  <Check class=" text-greenLight " />
                  <span>Access to entire product suite</span>
                </li>
                <li class="flex font-mullish space-x-2 items-center  ">
                  <Check class=" text-greenLight " />
                  <span>API access</span>
                </li>
                <li class="flex font-mullish space-x-2 items-center ">
                  <Check class=" text-greenLight " />
                  <span> 24x7 support</span>
                </li>
              </ul>
              <button
                class="py-3 px-4 font-mullish rounded-sm text-sm font-bold
              bg-white text-lightBlue300 border transition-all duration-200
              hover:text-lightBlue500 hidden lg:flex mt-3"
              >
                Sign Up <ArrowRight class=" px-1" />
              </button>
            </div>
          </div>

          <img src={fabgr} alt="" class=" absolute right-20 hidden lg:block bottom-16 " />
        </section>
        <section 
        style={{
          backgroundImage: `url(${feature2})`,
        }}
        class="bg-cover sm:pb-[300px] pb-[100px] lg:pb-[100px] mt-3 lg:pt-[8rem] sm:pt-[7.5rem]  pt-[4.5rem]">
          <div class="flex justify-center flex-col items-center max-w-[700px] mx-auto mb-7 ">
          <h2 class=" font-mullish font-bold text-2xl leading-[1.2] text-center text-white  ">
              Check Crypto Currency Exchange Rate
            </h2>
            <div class=" bg-greenLight w-6 h-1 mx-auto mt-4 mb-6"></div>
                       
          <Convter/>
          </div>
        </section>

        <footer class="footer">
          <div class=" w-11/12  max-w-[1080px] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between mx-auto space-y-6  font-mullish mt-4 ">
            {/* left-most */}
            <div class=" flex flex-col left-0 justify-center relative space-y-4 font-mullish text-gray-500 max-w-[250px] ">
              <img
                src={logos}
                alt=""
                width="125px"
                height={"30px"}
                class=" bg-deepBlue"
              />
              <p>
                Razorpay is the only payments solution in India that allows
                businesses to accept, process and disburse payments with its
                product suite. It gives you access to all payment modes
                including credit card, debit card, netbanking, UPI and popular
                wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge,
                Ola Money and PayZapp.
              </p>
              <p>
                RazorpayX supercharges your business banking experience,
                bringing effectiveness, efficiency, and excellence to all
                financial processes. With RazorpayX, businesses can get access
                to fully-functional current accounts, supercharge their payouts
                and automate payroll compliance.
              </p>
              <p>
                Manage your marketplace, automate bank transfers, collect
                recurring payments, share invoices with customers and avail
                working capital loans - all from a single platform. Fast forward
                your business with Razorpay.
              </p>
              <p class="text-[0.625rem]">
                Disclaimer: The RazorpayX powered Current Account and VISA
                corporate credit card are provided by RBI licensed banks. Your
                RazorpayX powered account is provided by our partner bank, in
                accordance with RBI regulations. RazorpayX itself is not a bank
                and doesn't hold or claim to hold a banking license
              </p>
              <div class=" flex flex-row gap-2">
                <img src={footer1} alt="" width={`40%`} />
                <img src={footer2} alt="" />
              </div>
            </div>
            {/* left */}
            <div class=" flex flex-col left-0  relative space-y-7 font-mullish  max-w-[250px] ">
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">BANKING PLUS</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500 space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">RazorpayX</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Current Accounts</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Payouts</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Payout Link</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Corporate Credit Card</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">
                      View Live Demo{" "}
                      <span class=" w-15 p-1 h-7 bg-green-400 rounded-md ">
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">LENDING</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500  space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Razorpay Capital</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Instant Settelments</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Line of Credit</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Working Capital Loans</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Marketplace Instants Settlements</a>
                  </li>
                </ul>
              </div>
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">BECAME A PARTNER</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500  space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Refer and Earn</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Onbording API</a>
                  </li>
                </ul>
              </div>
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">MORE</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500  space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Route</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Invoices</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Freelancers Payments</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">International</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Flash Checkout</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">UPI</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">ePOS</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Checkout Demo</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">RazorpayX Payroll</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* right */}
            <div class=" flex flex-col left-0  relative space-y-7 font-mullish  max-w-[250px] ">
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">ACCEPT PAYMETS </h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500 space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Payments Gateway</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Payment Pages</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Payment Links</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">QR Codes</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Subscriptions</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Smart Collect</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Optimizer</a>
                  </li>
                </ul>
              </div>
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">DEVELOPERS</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500  space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Docs</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Integrations</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">API References</a>
                  </li>
                </ul>
              </div>
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">RESOURCES</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500  space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Blog</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Customers Stories</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Events</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Chargeback Guide</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Settlements Guide</a>
                  </li>
                </ul>
              </div>
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">SOLUTIONS</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500  space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Education</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">E-Commerce</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">SaaS</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">BSFI</a>
                  </li>
                </ul>
              </div>
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">FREE TOOLS</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500  space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">HST calculator</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Online TDS Payment</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">
                      GST Number Search{" "}
                      <span class=" w-15 p-1 h-7 bg-green-400 rounded-md ">
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* right-most */}
            <div class=" flex flex-col left-0  relative space-y-7 font-mullish  max-w-[250px] ">
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">COMPANY</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500 space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">About Us</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Careers</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Terms of Use</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Privacy policy</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Grievance Radressal</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Partners</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">White Papers</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Corporate Information</a>
                  </li>
                </ul>
              </div>
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">HELP & SUPPORT</h2>
                <ul class=" flex flex-col font-mullish font-medium text-lightBlue500 space-y-2">
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Support</a>
                  </li>
                  <li class="  hover:text-grayBlue transition-all duration-200">
                    <a href="">Knowledge Base</a>
                  </li>
                </ul>
              </div>

              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">FIND US ONLINE</h2>
              </div>
              <div class=" flex flex-row gap-3">
                <a href="">
                  <img
                    src={facebook}
                    alt=""
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>{" "}
                <a href="">
                  <img
                    src={twitter}
                    alt=""
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    src={instagram}
                    alt=""
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>{" "}
                <a href="">
                  <img
                    src={github}
                    alt=""
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>{" "}
                <a href="">
                  <img
                    src={linkedin}
                    alt=""
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>{" "}
              </div>
              <div class=" flex flex-col  text-1xl">
                <h2 class="text-gray-600 ">REGD. OFFICE ADDRESS</h2>
                <p class=" mt-3 text-gray-500 mb-5">
                  Razorpay Software Private Limited, 1st Floor, SJR Cyber, 22
                  Laskar Hosur Road, Adugodi, Bengaluru, 560030, Karnataka,
                  India CIN: U72200KA2013PTC097389
                </p>
                <p class=" text-gray-500 ">© Razorpay 2023</p>
                <p class="text-gray-500 "> All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
