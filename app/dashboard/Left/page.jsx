"use client";
import React, { useState } from "react";
import {
  PiBookOpenTextLight,
  PiGoogleLogoThin,
  PiTwitterLogoLight,
  PiMagicWandThin,
  PiShapesThin,
  PiHouseLight,
} from "react-icons/pi";
import { SiAdobe } from "react-icons/si";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Leftpage() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const controls = useAnimation();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      setEmail("");
    } else {
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          velocity: "600",
          stiffness: "5000",
          damping: 15,
        },
      });
    }
  };

  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className=" hidden md:block bg-[#1C1C1C] w-full md:w-80  h-fit sticky top-5 "
      >
        <div className=" md:w-80 w-full p-3 border border-neutral-800   rounded-2xl h-full bg-[#1C1C1C]  ">
          <div className="flex">
            <div className="w-full relative">
              <Image
                width={1000}
                height={1000}
                className="w-28 h-28 rounded-full object-cover"
                src="/codifyph.png"
                alt=""
              />
              <div
                onClick={() => setOpen(!open)}
                className="bg-lime-400 w-3 h-3 cursor-pointer rounded-full absolute top-20 right-28 animate-pulse"
              />

              {open && (
                <div className="border border-lime-400 h-5 flex items-center justify-center rounded-2xl w-fit px-2 absolute top-[4.7rem] right-3 ">
                  <p className="text-[9px] font-RubikMedium text-lime-300">
                    Online
                  </p>
                </div>
              )}
              <h1 className="font-RubikExtraBold text-xl  text-neutral-300 mt-3">
                Codifyph
              </h1>
              <p className="text-xs font-RubikMedium text-neutral-300 mt-2">
              admin@codifyph.com
              </p>

              <div className="flex w-full   ">
                <div className="flex gap-x-1  text-xs my-4">
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    Laravel
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    CRM
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    NextJS
                  </p>
                  <p className=" bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold shrink-0 ">
                    PHP
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-x-1 w-full h-fit">
              <Link href={"/"}>
                <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                  <PiHouseLight className="text-neutral-100" />
                </div>
              </Link>

              <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                <PiBookOpenTextLight className="text-neutral-100" />
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#282828] p-1  rounded-md md:flex items-center  justify-between h-9 w-full hidden "
          >
            <input
              value={email}
              onChange={handleChange}
              className=" w-36 focus:outline-none bg-transparent text-neutral-400 text-xs placeholder:text-neutral-600 h-full pl-2 placeholder:text-xs placeholder:font-RubikMedium"
              placeholder="name@email.com"
              type="text"
            />
            <motion.button
              animate={controls}
              className="bg-[#696969] h-full p-1 rounded-md text-xs w-20 font-RubikMedium text-neutral-50"
            >
              Subscribe
            </motion.button>
          </form>

          <div className="w-full mt-5 text-neutral-300">
            <h2 className="font-RubikBold my-4">Bio</h2>
            <p className="text-[12px]  font-RubikRegular my-3">
            At Codifyph, we’re passionate about transforming ideas into stunning digital experiences. As a leading website development company, 
            we specialize in crafting bespoke websites that captivate audiences, drive engagement, and elevate brands to new heights.{" "}
            </p>

            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin />
                <span className="text-xs font-RubikRegular">
                  Web Developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <PiMagicWandThin />
                <span className="text-xs font-RubikRegular"> Projects</span>
              </div>
            </div>

            <div className="border border-[#282828] text-neutral-300 my-6" />

            <div className="my- ">
              <h1 className="font-RubikRegular">Team</h1>
              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <div className="text-xl" />
                  <Image
            width={50}
            height={50}
            className="rounded-full object-cover"
            src="/chris.jpg"
            alt=""
          />
                  <div className="mt-1">
                    <h3 className="text-md font-RubikMedium">
                      Chris Bautista
                    </h3>
                    <p className="text-[9px]">Debugger / QA Engineer</p>
                  </div>
                </div>
              </div>

              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <div className="text-xl" />
                  <Image
            width={50}
            height={50}
            className="rounded-full object-cover"
            src="/prins.jpg"
            alt=""
          />
                  <div className="mt-1">
                    <h3 className="text-md font-RubikMedium">
                      Prince Enriquez
                    </h3>
                    <p className="text-[9px]">UI/UX Designer & Full Stack Developer</p>
                  </div>
                </div>
              </div>
              
              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <div className="text-xl" />
                  <Image
            width={50}
            height={50}
            className="rounded-full object-cover"
            src="/aj.jpg"
            alt=""
          />
                  <div className="mt-1">
                    <h3 className="text-md font-RubikMedium">
                      Aj Aramsola
                    </h3>
                    <p className="text-[9px]">QA Engineer/Copywriter</p>
                  </div>
                </div>
              </div>

              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <div className="text-xl" />
                  <Image
            width={50}
            height={50}
            className="rounded-full object-cover"
            src="/lei.jpg"
            alt=""
          />
                  <div className="mt-1">
                    <h3 className="text-md font-RubikMedium">
                      Lei Molina
                    </h3>
                    <p className="text-[9px]">Project Manager/QA Engineer</p>
                  </div>
                </div>
              </div>

              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <div className="text-xl" />
                  <Image
            width={50}
            height={50}
            className="rounded-full object-cover"
            src="/jek.jpg"
            alt=""
          />
                  <div className="mt-1">
                    <h3 className="text-md font-RubikMedium">
                      Jek Paler
                    </h3>
                    <p className="text-[9px]">DevOps Engineer/ QA Engineer</p>
                  </div>
                </div>
              </div>

              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <div className="text-xl" />
                  <Image
            width={50}
            height={50}
            className="rounded-full object-cover"
            src="/razel.jpg"
            alt=""
          />
                  <div className="mt-1">
                    <h3 className="text-md font-RubikMedium">
                      Razel Artisan
                    </h3>
                    <p className="text-[9px]">DevOps Engineer</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Leftpage;
