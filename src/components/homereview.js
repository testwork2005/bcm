import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <h2 className='test'> TESTIMONIALS</h2>
        <Slider {...settings}>
          <div className="review">
            <blockquote className="review__blockquote">
            Epic-Mining is one of the leading cloudmining
              companies and a trustworthy partner of ours. It’s good
              to see that they are an honest cloudmining service which
              shows their farms openly to the public.
            </blockquote>
            <span className="review__autor">
              Guy Corem, CEO Spondoolies-Tech
              <span>Leading Bitcoin Asic Manufacturing Company</span>
            </span>
          </div>
          <div>
            <div className="review">
              <blockquote className="review__blockquote">
                MinerEU is very happy to have Epic Mining as our
                trustworthy partner. We have already recommended
                Epic-Mining to thousands of our existing customers
                who are happy and satisfied with their excellent
                services and products.
              </blockquote>
              <span className="review__autor">
                Alex,
                <span>
                  VP of business development from Innosilicon
                </span>
              </span>
            </div>
          </div>
          <div>
            <div className="review">
              <blockquote className="review__blockquote">
              Epic-Mining is one of our biggest clients
                and proven to be a reliable and trustworthy business
                partner. Their transparent mining sites and high
                quality software infrastructure together with our high
                end mining hardware result in a great and unique
                product and experience for everybody interested in
                mining!
              </blockquote>
              <span className="review__autor">
                Alex,
                <span>
                  VP of business development from Innosilicon
                </span>
              </span>
            </div>
          </div>
          <div>
            <div className="review">
              <blockquote className="review__blockquote">
              Epic-Mining is one of our biggest clients
                and proven to be a reliable and trustworthy business
                partner. Their transparent mining sites and high
                quality software infrastructure together with our high
                end mining hardware result in a great and unique
                product and experience for everybody interested in
                mining!
              </blockquote>
              <span className="review__autor">
                Jing Wei, CEO of MinerEU
                <span>Leading Scrypt Asic Manufacturing Company</span>
              </span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
