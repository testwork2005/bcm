import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          color: '#0f4470',
          fontFamily: 'Anton',
          letterSpacing:'4px'
        }}
      >
        AS SEEN ON
      </h1>
        <Slider {...settings}>
         

          <div className="item">
         
              <img  className="img ims"
                src={require("../static/logo.svg")}
                className="img ims"
                alt=""
              />
            
          </div>

          <div className="item">
           
              <img className="img ims"
                src={require("../static/forbes.svg")}
              />
          
          </div>

          <div className="item">
            
              <img
               className="img ims"
              src={require("../static/cnbc.svg")}
              />
      
          </div>

          <div className="item">
          
              <img
               src={require("../static/tech.svg")}
                className="img ims"
                alt=""
              />
          
          </div>

          <div className="item">
        
              <img  className="img ims"
                src={require("../static/bloom.svg")}
              />
          
          </div>

          
        </Slider>
      </div>
    );
  }
}
