"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const images = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const images2 = {
  hidden: {
    opacity: 0,
    x: 1600,
  },
  show: {
    opacity: 1,
    x: 100,
    transition: {
      duration: 3,
    },
  },
};

const FramerHk = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="w-full">
        <motion.img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
          alt="img"
          className="rounded-lg bg-gray-100 h-96"
          variants={images2}
          initial="hidden"
          animate="show"
        />
      </div>
      <div className="w-full">
        <motion.img
          initial={{ x: -500, y: 0, opacity: 0 }}
          animate={{ x: 1000, y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, type: "tween" }}
          className="object-cover object-center rounded absolute top-20 inset-0 h-96"
          alt="hero"
          src="https://images.unsplash.com/photo-1666085596925-c40a62661f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
        />
      </div>
      <div className="flex-center flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hiện lên sau 1 khoảng thời gian
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1 }}
        >
          Phóng lớn lên sau 1 khoảng thời gian rồi trở về
        </motion.div>

        <motion.div variants={variants} initial="hidden" animate="show">
          Hiện lên sau 1 khoảng thời gian
        </motion.div>
      </div>

      {/* initial:ban đầu
          animate:sinh động
          transition:chuyển tiếp
          duration:khoảng thời gian
          type: "tween" ---- type: "12" */}
    </div>
  );
};

export default FramerHk;
