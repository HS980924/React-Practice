import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/SampleSlider.scss';

const SimpleSlider = () => {
    const settings = {
      //className: "center",
      //centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div className="SampleSlider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="SliderItem">
            <h3>1</h3>
          </div>
          <div className="SliderItem">
            <h3>2</h3>
          </div>
          <div className="SliderItem">
            <h3>3</h3>
          </div>
          <div className="SliderItem">
            <h3>4</h3>
          </div>
          <div className="SliderItem">
            <h3>5</h3>
          </div>
          <div className="SliderItem">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
}
export default SimpleSlider