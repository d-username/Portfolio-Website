import './skills.css';
import {
  SiPrisma,
  SiJsonwebtokens,
  SiExpress,
  SiInsomnia,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostgresql,
} from 'react-icons/si';
import { DiNpm } from 'react-icons/di';
import { BsFillKanbanFill } from 'react-icons/bs';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { ImGit } from 'react-icons/im';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Skills() {
  const settings = {
    arrows: true,
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
  };

  return (
    <section id='skills'>
      <h4>My Toolbox & Things I Can Do</h4>
      <h2>These are the technologies, skills and tools I have worked with.</h2>

      <Slider {...settings} className='slider'>
        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <SiHtml5 className='skills-icon' />
            <span>HTML</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <SiCss3 className='skills-icon' />
            <span>CSS</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <SiJavascript className='skills-icon' />
            <span>JavaScript</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <FaReact className='skills-icon' />
            <span>React</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <SiPostgresql className='skills-icon' />
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
            <img src='/icons/command_line_black.png' alt='visual studio code icon' />
            <span>Command line</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <ImGit className='skills-icon' />
            <span>Git</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <FaNodeJs className='skills-icon' />
            <span>Node.js</span>
          </div>
        </div>

        <div className='slider-outer-div'>
          <div className='skills-tile'>
            <SiInsomnia className='skills-icon' />
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

