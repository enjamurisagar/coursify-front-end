import React from "react";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

import codeChef from '../assets/codechef.png'

const Footer = () => {
  return (
    <div className="w-[100%] bg-[#000060] text-white p-[2rem] rounded-tl-lg rounded-tr-lg" >
      <div className="wrapper flex justify-around w-[80%] m-auto">
        <div className="about w-[40%] p-[1rem]">
          <div className="logo flex items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-buildings"
              viewBox="0 0 16 16"
            >
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
              <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
            </svg>
            <p className=" text-[20px] mx-1 my-0">HirePeople</p>
          </div>
          <p className="w-[80%] my-[1rem]">
            HirePeople is on a mission to make it dead simple for leading Indian
            startups to hire the top 2% of tech talent.{" "}
          </p>
          <div className="contact flex w-[30%] justify-between">
            <a
              href="https://www.instagram.com/sagar.enjamuri/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram color="white" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/enjamuri-sagar-5b0425222/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin color="white" size={20} />
            </a>

            <a
              href="https://twitter.com/enjamurisagar"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter color="white" size={20} />
            </a>
            <a
              href="https://www.facebook.com/sagar.enjamuri.3/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook color="white" size={20} />
            </a>
          </div>
        </div>
        <div className="candidates w-[15%]  grid p-[1rem]">
          <h1 className="text-[15px]">CANDIDATES</h1>
          <ul className="list-none p-0 text-[12px] my-4">
            <li className="my-2 cursor-pointer hover:text-grey">For Candidates</li>
            <li className="my-2 cursor-pointer hover:text-grey">Candidates Sign Up</li>
            <li className="my-2 cursor-pointer hover:text-grey">Invite & Earn 15k</li>
            <li className="my-2 cursor-pointer hover:text-grey">Candidate FAQ</li>
          </ul>
        </div>
        <div className="employers w-[15%] grid p-[1rem]">
          <h1 className="text-[15px]">EMPLOYERS</h1>
          <ul className="p-0 text-[12px] my-4">
            <li className="my-2 cursor-pointer hover:text-grey">For Employers</li>
            <li className="my-2 cursor-pointer hover:text-grey">Employer Sign Up</li>
            <li className="my-2 cursor-pointer hover:text-grey">Employer FAQ</li>
          </ul>
        </div>
        <div className="companies w-[15%] grid p-[1rem]">
          <h1 className="text-[15px]">COMPANIES</h1>
          <ul className="p-0 text-[12px] my-4">
            <li className="my-2 cursor-pointer hover:text-grey">Careers</li>
            <li className="my-2 cursor-pointer hover:text-grey">Privacy Policy</li>
          </ul>
        </div>
        <div className="partners w-[15%]  grid p-[1rem]">
          <h1 className="text-[15px]">PARTNERS</h1>
          <img src={codeChef} alt="code-chef" width={200} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
