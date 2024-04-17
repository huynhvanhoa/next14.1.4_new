"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/myComponents/hk/motions";
import { Alumni_Sans_Inline_One } from "next/font/google";

const alumni_Sans_Inline_One = Alumni_Sans_Inline_One({
  subsets: ["latin"],
  weight: ["400"],
});

const HomePage = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="pb-20"
    >
      <h1 className={`${alumni_Sans_Inline_One.className} text-[50px] mt-28`}>
        Home Page - Tiếng Việt
      </h1>
    </motion.div>
  );
};

export default HomePage;
