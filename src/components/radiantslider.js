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
      <div className="radbg">
        <Slider
          {...settings}
          style={{ margin: '0 auto', padding: '20px' }}
        >
          <div>
            <div
              className="raditems"
              style={{ margin: '0 auto', padding: '20px' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <p
                  style={{
                    maxWidth: '600px',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Our self developed monitoring system Epic Hive
                  has matured to become an all-in-one software for
                  miner deployment, maintenance and administration. It
                  is a state of the art tool that enables automation
                  to the point where the only human interaction needed
                  inside our data centers is replacement of damaged or
                  otherwise faulty hardware.
                </p>
              </div>
              <img
                src={require('../static/rad1.jpg')}
                alt=""
                className="radimg"
              />
            </div>
          </div>
          <div>
            <div
              className="raditems"
              style={{ margin: '0 auto', padding: '20px' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <p
                  style={{
                    maxWidth: '600px',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  A perfect monitoring system would not bring much to
                  the table without a high-density built out data
                  center. Every detail is aligned between building and
                  software. Besides perfect matching, our team has
                  carefully planned and built every single inch of the
                  facility to allow for maximum capacity.
                </p>
              </div>
              <img
                src={require('../static/rad2.jpg')}
                alt=""
                className="radimg"
              />
            </div>
          </div>
          <div>
            <div
              className="raditems"
              style={{ margin: '0 auto', padding: '20px' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <p
                  style={{
                    maxWidth: '600px',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Both our data centers in Iceland and Sweden are
                  powered by geothermal and hydro-electric energy. In
                  addition to the cold climate in which we build our
                  data centers, they employ temperature control
                  systems and efficient airflow management cuts down
                  power costs significantly. We design our data
                  centers layout in a way so that thermodynamics does
                  its job and we have as little cost as possible with
                  cooling.
                </p>
              </div>
              <img
                src={require('../static/rad3.jpg')}
                alt=""
                className="radimg"
              />
            </div>
          </div>
          <div>
            <div
              className="raditems"
              style={{ margin: '0 auto', padding: '20px' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <p
                  style={{
                    maxWidth: '600px',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  All new mining hardware that runs with our Radiant
                  Tech was designed and produced for maximum
                  efficiency. It specifically fits our need for easy
                  handling, fast deployment, and effective
                  maintenance.
                </p>
              </div>

              <img
                src={require('../static/rad4.jpg')}
                alt=""
                className="radimg"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
