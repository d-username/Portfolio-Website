import './skills.css';
import { SiPrisma } from 'react-icons/si';

export function Skills() {
  return (
    <section id='skills'>
      <h4>My Toolbox & Things I Can Do</h4>
      <ul>
        <li>
          <div>
            <img src='/icons/html_5_black.png' alt='html 5 icon' />
            <span>html</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/css_3_black.png' alt='css 3 icon' />
            <span>css</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/js_black.png' alt='js icon' />
            <span>js</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/react_black.png' alt='react icon' />
            <span>react</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/postgreSQL_black.png' alt='postgreSQL icon' />
            <span>postgresql</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/api_black.png' alt='api icon' />
            <span>api</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/command_line_black.png' alt='command line icon' />
            <span>command line</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/git_black.png' alt='git icon' />
            <span>git</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/node_js_black.png' alt='node icon' />
            <span>node</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/insomnia_black.png' alt='insomnia icon' />
            <span>insomnia</span>
          </div>
        </li>

        <li>
          <div>
            <img src='/icons/vsc_black.png' alt='visual studio code icon' />
            <span>vsc</span>
          </div>
        </li>

        <li>
          <div>
            <SiPrisma class='skills-icon'/>
            <span>prisma orm</span>
          </div>
        </li>
      </ul>
    </section>
  );

}
