import React, { useState, useEffect, useCallback } from "react";

import HS__Data from "./HigherStudiesData";
import Stack from "@mui/material/Stack";
import "./HigherStudiesCarousel.css";
import LeftArrow from "./images/leftr.svg";
import RightArrow from "./images/rightrr.svg";
import HigherStudiesCarousel__bg from "./images/Ellipse.png";
import testimonialbg from "./images/testimonialbg.svg";
import { ResponsiveContainer } from "react-stacked-center-carousel";

const HigherStudiesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = HS__Data.length;

  //Functions to change slides
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [current, nextSlide]);

  //to check passed variable is an array and is not empty
  if (!Array.isArray(HS__Data) || HS__Data.length <= 0) {
    return null;
  }

  return (
    <div className="main_container">
      <div id="tfeatured">
        <img id="tbg" src={testimonialbg} alt="tbg"></img>
        <div id="txt">
          <h1 id="thd">Testimonials</h1>
        </div>
      </div>
      <div className="HigherStudies__Carousel">
        <img
          src={LeftArrow}
          alt="left naviagtion"
          className="LU__Navigation"
          onClick={prevSlide}
        />
        <div className="HS__CarouselSpace">
          <div className="HS__CarouselImg">
            {/* <img
              className="HS__CarouselBg"
              src={HigherStudiesCarousel__bg}
              alt="Bg envelop"
            /> */}
            <Stack spacing={20}>
              <div>
                <img
                  className="HS__CarouselPic"
                  src={HS__Data[current].image}
                  alt="Author"
                />
              </div>
              <div id="desig">
                <h3>{HS__Data[current].name}</h3>
                <h4>{HS__Data[current].designation}</h4>
              </div>
            </Stack>
          </div>
          <div className="HS__CarouselData">
            <p>{HS__Data[current].description}</p>
            {/* <a href={HS__Data[current].link}>Read More</a> */}
          </div>
        </div>
        <img
          src={RightArrow}
          className="RU__Navigation"
          alt="right naviagtion"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default HigherStudiesCarousel;
