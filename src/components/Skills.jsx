import './skills.css';
import { SiPrisma } from 'react-icons/si';
import { DiNpm } from 'react-icons/di';
import { SiJsonwebtokens } from 'react-icons/si'
import { SiExpress } from 'react-icons/si';
import { BsFillKanbanFill } from 'react-icons/bs';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Skills() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    accessibility: false,
    draggable: true
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
      <h4>My Toolbox & Things I Can Do</h4>
      <h2>These are the technologies, skills and tools I have worked with.</h2>

      <Slider {...settings} className='slider'>
        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/html_5_black.png' alt='html 5 icon' />
            <span>HTML</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/css_3_black.png' alt='css 3 icon' />
            <span>CSS</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/js_black.png' alt='js icon' />
            <span>JavaScript</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/react_black.png' alt='react icon' />
            <span>React</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/postgreSQL_black.png' alt='postgreSQL icon' />
            <span>PostgreSQL</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/api_black.png' alt='api icon' />
            <span>APIs</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/command_line_black.png' alt='command line icon' />
            <span>Command line</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/git_black.png' alt='git icon' />
            <span>Git</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/node_js_black.png' alt='node icon' />
            <span>Node.js</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/insomnia_black.png' alt='insomnia icon' />
            <span>Insomnia</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <img src='/icons/vsc_black.png' alt='visual studio code icon' />
            <span>VSC</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <SiPrisma className='skills-icon' />
            <span>Prisma ORM</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <DiNpm className='skills-icon' />
            <span>NPM</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <SiJsonwebtokens className='skills-icon' />
            <span>JWT</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <SiExpress className='skills-icon' />
            <span>Express.js</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <BsFillKanbanFill className='skills-icon' />
            <span>Kanban board</span>
          </div>
        </div>
      </Slider>
    </section>
  );
}

