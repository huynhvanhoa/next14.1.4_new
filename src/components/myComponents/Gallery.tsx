import React from "react";
// import LazyLoad from "react-lazy-load-image-component";

const Gallery = () => {
  return (
    <main>
      <div className="w-4/5 flex flex-wrap mx-auto gap-1">
        {new Array(200).fill(1).map((value, index) => {
          return (
            <img
              loading="lazy"
              src={`https://picsum.photos/200/300?random=${index}`}
              width="200"
              height="300"
            />
          );
        })}
      </div>
    </main>
  );
};

export default Gallery;
