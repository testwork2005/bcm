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
        <h2 style={{ textAlign: 'center' }}> External Links </h2>
        <Slider {...settings}>
          <div className="item">
            <a
              href="https://www.karatbars.com/en/"
              target="_blank"
              className="a"
            >
              <img
                src="img/partners/karatbars.png"
                className="img ims"
                alt=""
              />
            </a>
          </div>

          <div className="item">
            <a
              href="https://www.hyperledger.org/"
              target="_blank"
              className="a"
            >
              <img
                src="img/partners/hl.png"
                className="img ims"
                alt=""
              />
            </a>
          </div>

          <div className="item">
            <a
              href="https://blockfi.com/"
              target="_blank"
              className="a"
            >
              <img
                src="img/partners/bfi.jpg"
                className="img ims"
                alt=""
              />
            </a>
          </div>

          <div className="item">
            <a
              href="https://www.enovos.lu/en/individuals/home"
              target="_blank"
              className="a"
            >
              <img
                src="img/partners/enovos.png"
                className="img ims"
                alt=""
              />
            </a>
          </div>

          <div className="item">
            <a
              href="https://bitpay.com/"
              target="_blank"
              className="a"
            >
              <img
                src="img/partners/bitpay.png"
                className="img ims"
                alt=""
              />
            </a>
          </div>

          <div className="item">
            <a
              href="https://blockchain.com/"
              target="_blank"
              className="a"
            >
              <img
                src="img/partners/block.png"
                className="img ims"
                alt=""
              />
            </a>
          </div>

          <div className="item">
            <a href="https://blockchain.com/" target="_blank">
              <img
                src="img/partners/coinbase.png"
                className="img ims"
                alt=""
              />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
