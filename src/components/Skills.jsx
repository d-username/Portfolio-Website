import './skills.css';
import { SiPrisma } from 'react-icons/si';
import { DiNpm } from 'react-icons/di';


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Skills() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    accessibility: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <section id='skills'>
      <Slider {...settings} className='slider'>
        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/html_5_black.png' alt='html 5 icon' />
            <span>html</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/css_3_black.png' alt='css 3 icon' />
            <span>css</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/js_black.png' alt='js icon' />
            <span>js</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/react_black.png' alt='react icon' />
            <span>react</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/postgreSQL_black.png' alt='postgreSQL icon' />
            <span>postgresql</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/api_black.png' alt='api icon' />
            <span>api</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/command_line_black.png' alt='command line icon' />
            <span>command line</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/git_black.png' alt='git icon' />
            <span>git</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/node_js_black.png' alt='node icon' />
            <span>node</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/insomnia_black.png' alt='insomnia icon' />
            <span>insomnia</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/vsc_black.png' alt='visual studio code icon' />
            <span>vsc</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <SiPrisma className='skills-icon' />
            <span>prisma orm</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <DiNpm className='skills-icon' />
            <span>npm</span>
          </div>
        </div>
      </Slider>
    </section>
  );
}

