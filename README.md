npx create-next-app@latest ./

## BOOSTSTRAP:

npm i bootstrap react-bootstrap

## ICON:

npm i react-icons

## ĐĂNG NHẬP:

npm i next-auth
npm i appwrite

## DARK - LIGHT:

npm i next-themes
darkMode: "class",

## API FIREBASE:

npm i firebase

## API PRISMA:

npm i prisma @prisma/client

## LOADING:

npm i react-loader-spinner

## PHÂN TRANG BOOTSTRAP:

npm i react-paginate

## TẠO BẢNG THÔNG BÁO:

npm i react-toastify
import { toast } from 'react-toastify';

toast.success("Create new blog succeed !");
toast.warning("Update blog succeed !");
toast.success("Delete blog succeed !");
toast.error("Not empty title !")

## QUẢN LÝ DATA TẢI VỀ:

npm i swr
import { mutate } from "swr";
import useSWR from "swr";

<!-- new nextjs -->

npx create-next-app@latest ./

<!-- Theme Dark-light -->

npm i next-themes

<!-- Đăng nhập -->

npm i next-auth

<!-- bootstrap -->

import 'bootstrap/dist/css/bootstrap.min.css';

npm install react-bootstrap bootstrap

npm i swr

<!-- Hiển thị thông báo đẹp -->

npm i react-toastify

<!-- Icon react -->

npm install react-icons

import { FaBeer } from 'react-icons/fa'; <FaBeer />

<!-- mặt trăng-mặt trời -->

import { BsBrightnessHigh, BsMoon } from 'react-icons/bs'
<BsBrightnessHigh size={25} className="text-hk-green" />
<BsMoon size={25} className="text-hk-green" />

<!-- Framer Motion là một thư viện đồ họa chuyển động cho React. Nó cho phép bạn tạo các hiệu ứng chuyển động và animation cho các thành phần React của bạn. Dưới đây là một số cách để sử dụng Framer Motion: -->

npm install framer-motion

import { motion } from "framer-motion";

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }} >
Hello World
</motion.div>

initial là trạng thái ban đầu của thành phần
animate là trạng thái cuối cùng của thành phần
transition là thời gian để hoàn thành animation

<motion.div
animate={{ scale: [1, 1.5, 1] }}
transition={{ duration: 1 }}

> Scaling Effect
> </motion.div>

hiệu ứng scale để làm cho thành phần phóng to và thu nhỏ theo một chuỗi giá trị được cung cấp

<!-- Slider -->

npm i react-responsive-carousel

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
return (
<Carousel
showThumbs={false}
// autoPlay
infiniteLoop
// interval={2000}
showArrows={false}
showStatus={false}

>

<div>
<img src="assets/1.jpeg" />
<p className="legend">Legend 1</p>
</div>
<div>
<img src="assets/2.jpeg" />
<p className="legend">Legend 2</p>
</div>
<div>
<img src="assets/3.jpeg" />
<p className="legend">Legend 3</p>
</div>
</Carousel>
);
}

npm i clsx tailwind-merge

<!-- Xoá -->

npm uninstall
