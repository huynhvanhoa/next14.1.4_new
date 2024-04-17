import Image from "next/image";
import React from "react";

export default function Upload() {
  return (
    <div>
      <Image
        height={500}
        width={350}
        src="https://images.pexels.com/photos/14828736/pexels-photo-14828736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Flyer"
      />
    </div>
  );
}
