import React from "react";
import Card from "react-bootstrap/Card";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

import Marquee from "react-fast-marquee";
//images
import img1 from "../assets/companies/CRED.png";
import img2 from "../assets/companies/Dream11.jpg";
import img3 from "../assets/companies/Rapido.png";
import img4 from "../assets/companies/dailyhunt.png";
import img5 from "../assets/companies/flipkart.jpeg";
import img6 from "../assets/companies/gaana.jpg";
import img7 from "../assets/companies/mxplayer.jpg";
import img8 from "../assets/companies/phonepe.png";
import img9 from "../assets/companies/swiggy.png";
import img10 from "../assets/companies/toppr.png";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//testimonial imgs
import testi1 from "../assets/testimonials/img1.png";
import testi2 from "../assets/testimonials/img2.png";
import testi3 from "../assets/testimonials/img3.png";

//create profile image
import createProf from '../assets/C - Create Profile.png'

const ar = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const testimonial = [
  {
    name: "Winston DeRosario",
    desc: "Hiring at Clover",
    img: testi1,
  },
  {
    name: "Vaishali Shinde",
    desc: "Hiring at Rolling Arrays",
    img: testi2,
  },
  {
    name: "Muralidharan Venkatasubramanian",
    desc: "Hiring at Wingman",
    img: testi3,
  },
];

const Home = () => {
  return (
    <div>
      {/* <p classNameName='text-red-500'>hii</p> */}
      <div className="top h-[40vh] w-[100%] my-5  text-center flex justify-center py-[2rem]">
        <div className="content w-[50%] grid items-center">
          <div className="text">
            <h2 className="font-bold">
              Where techies realise their true potential
            </h2>
            <p>
              Look beyond the obvious. Use Cutshort to easily get discovered by
              awesome companies and get referred to job positions very few know
              about.
            </p>
          </div>
          <div className="btns">
            <button className="mx-3 bg-[#0dcaf0] py-2 text-black px-3 rounded-xl border-2 border-[#0dcaf0] hover:bg-white ">
              Find Jobs
            </button>

            <button className="mx-3 bg-none py-2 px-3 border-2 border-[#0dcaf0] rounded-xl">
              Hire Jobs
            </button>
          </div>
        </div>
      </div>

      {/* middle steps */}
      <h2 className="text-center  ">Some Quick Steps</h2>
      <div className="middle flex justify-center my-5">
        <Card
          style={{
            width: "20rem",
            outline: "none",
            margin: "0 20px",
            padding: "1rem",
          }}
        >
          <div className="flex justify-center my-2    ">
            <img src={icon1} alt="imf" width={100} />
          </div>
          <Card.Body>
            <Card.Title>STEP 1: COMPLETE PROFILE</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              Once you are approved, we showcase you to leading Indian
              technology startups
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20rem",
            outline: "none",
            margin: "0 20px",
            padding: "1rem",
          }}
        >
          <div className="flex justify-center my-2    ">
            <img src={icon2} alt="imf" width={100} />
          </div>
          <Card.Body>
            <Card.Title>STEP 2: RECEIVE JOB OFFERS</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              Companies start sending interview requests. Talk to only the ones
              you like.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20rem",
            outline: "none",
            margin: "0 20px",
            padding: "1rem",
          }}
        >
          <div className="flex justify-center my-2    ">
            <img src={icon3} alt="imf" width={100} />
          </div>
          <Card.Body>
            <Card.Title>STEP 3: ACCEPT DREAM JOB</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              Compare your offers and accept the best one. Hired!
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>

      <div className="marque  w-[70%] mx-auto my-[6rem] ">
        <h2 className="uppercase text-center m-[4rem]">
          Leading companies build teams on TopHire
        </h2>
        <Marquee className="" style={{ zIndex: 0 }} pauseOnHover>
          {ar.map((item) => (
            <div className="mx-4 flex items-center h-[100%]">
              <img src={item} alt="w" width={150} className="" />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="testi">
        <h1 className="text-center my-[3rem]">
          Our users love their successes
        </h1>
      </div>

      {/* TESTIMONIALS */}
      <Swiper
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="testi-swiper"
        slidesPerView={1}
        //   spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        style={{
          width: "50%",
          zIndex: 0,
          margin: "5rem auto",
          height: "20rem",
        }}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          972: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {testimonial?.map((item, idx) => (
          <SwiperSlide className="">
            <div className="bg-sky-200  rounded-lg w-[90%] m-auto h-[100%] flex items-center cursor-pointer">
              <div className="l w-[40%]">
                <img
                  src={item.img}
                  style={{ borderRadius: "20px" }}
                  className="px-4"
                  width={700}
                  alt=""
                />
              </div>
              <div className="r w-[60%]">
                <h1 className="text-3xl">{item.name}</h1>
                <p>{item.desc}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  corrupti repellendus minus repudiandae. Sit a, fugiat,
                  nesciunt dignissimos dicta eaque itaque eos illum quibusdam,
                  quam minus quas illo harum dolores?
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* HOW IT WORKS PART */}

      <div className="w-[100%] h-[100%] my-[6rem]">
        <h1 className="text-center">HOW IT WORKS</h1>
        <div className="wrapper flex justify-around w-[70%] mx-auto my-[3rem]">
          <div className="l">
            <p className="text-[25px] text-[#0dcaf0] font-bold italic">
              Create your free candidate profile
            </p>
            <p className="italic my-[2rem] ">
              Answer a few questions about yourself - it takes less than 5
              minutes.
            </p>
            <p className="italic">‍🏅What is your biggest achievement?</p>
            <p className="italic">
              ‍👑️ What does your ideal opportunity look like?
            </p>
          </div>
          <div className="r">
            <img src={createProf} alt="create-profile" />
          </div>
        </div>
      </div>

      {/*APPLY TO JOIN*/}

      <div className="text-center m-[5rem]">
        <h1 className="font-bold">Built by techies, for techies 👩‍💻👨‍💻</h1>
        <p className="text-[20px] my-[1rem]">It takes less than 5 minutes to sign up.</p>
        <button className="text-[20px] outline-none bg-[#0dcaf0] px-3 py-2 my-4 border-2 border-[#0dcaf0] rounded-lg hover:bg-white">
          APPLY TO JOIN
        </button>
      </div>
    </div>
  );
};

export default Home;
