"use client";

import Link from "next/link";
import React from "react";
import { PiArrowLeftThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.div
      className="text-neutral-50 "
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      <div className="sticky top-5 ">
        <div className=" ">
          <div className="-mt-6   ">
            <div className="bg-neutral-700/25 backdrop-blur-md h-10  w-full rounded-xl flex items-center gap-x-7 ">
              <Link href={"/dashboard"}>
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>

              <Link href={"/"}>
                <button className="text-xs bg-neutral-700/25 p-1 w-16 h-6 rounded-md">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  mt-9 w-full p-5 border border-neutral-700   rounded-2xl h-full bg-[#1C1C1C] ">
        <motion.h1
          initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
            },
          }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-RubikExtraBold text-center "
        >
          Welcome to AyKuya
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            Aykuya
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">2023</span>
        </div>

        <div className="my-11 font-RubikMedium">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-56 w-full object-cover"
            src="/aykuya.png"
            alt=""
          />

          <p className="my-7">
          AyKuya was founded in 2023 by a group of passionate entrepreneurs who envisioned a more convenient and enjoyable way to shop online. 
          We wanted to redefine the online shopping experience, making it easier, more secure, and accessible to everyone.
          </p>

          <p className="my-7">
          AyKuya isn't just a place to shop; it's a community of like-minded individuals who share a passion for discovering great products. 
          Join us on social media, subscribe to our newsletter, and be the first to hear about exclusive deals and promotions.
          </p>

          <p className="my-7">
          Our mission at AyKuya is to connect people with products they love. We're dedicated to providing a seamless shopping experience, helping customers discover, select, and receive their favorite items at competitive prices. 
          We aim to be your one-stop shop for everything you need, from electronics and fashion to home decor and beyond.
          </p>

        </div>
      </div>
    </motion.div>
  );
}

export default page;
