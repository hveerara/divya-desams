import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { songsData } from "../lib/songs-data";
import { getBackgroundImageUrl } from "../lib/util";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const AllSongs = () => {
  const songCategories = [...new Set(songsData.map((song) => song.category))];
  const filterByCategory = (category) => {
    return songsData.filter((song) => song.category === category);
  };

  return (
    <>
      <Navbar />
      {songCategories.map((category, index) => (
        <div className="categorySlider" key={index}>
          <h1 className="text-left sm:text-4xl text-3xl mt-10 mb-4 pl-5 font-medium title-font tracking-wide text-gray-300">
            {category}
          </h1>
          <div className="main">
            <div className="parent">
              <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-10-px"
              >
                {filterByCategory(category).map((song, index) => (
                  <NavLink to={`/song/${song.id}`} key={index}>
                    <div
                      className="sliderItemImage"
                      key={index}
                      style={{
                        backgroundImage: getBackgroundImageUrl(category),
                        height: "25vh",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="sliderItemText">
                      <div className="text-gray-300 text-2xl bold tracking-tight pl-1 break-words">
                        {song.sthalam}
                      </div>
                      <div className="text-gray-300 text-l bold tracking-wide pl-1 break-words">
                        &#x1F3B5;&nbsp;&nbsp;{song.songTitle}
                      </div>
                    </div>
                  </NavLink>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};
export default AllSongs;
