import { BsPlayCircle } from 'react-icons/bs';

export function Projects() {
  return (
    <section id='projects'>
      <div className='wrapper'>
        <div className='grid-col-two'>
          <div className='text-div'>
            <h1>projects.</h1>
            <h2>A selection of stuff I have built.</h2>
          </div>
          <div className='img-div'></div>
        </div>

        <div>
          <ul id='projects-grid'>
            {/* <li className='project-card'>
              <div>
                <img
                  src='/images/quiz_app_main.png'
                  alt='quiz app demo'
                  className='project-card-image'
                />
              </div>
              <div>
                <h3>Quiz App</h3>
                <p>create quizes and test your knowledge</p>
              </div>
              <a
                href='https://github.com/d-username/Quiz-App'
                target='_blank'
                rel='noreferrer'
                className='project-card-gh'
              >
                <p>view here</p>
                <img
                  src='/icons/github-black.png'
                  alt='GitHub icon'
                  className='project-card-icon'
                />
              </a>
            </li> */}

            <li className='project-card'>
              <div>
                <img
                  src='/images/cocktail_app.png'
                  alt='coctail app demo'
                  className='project-card-image'
                />
              </div>
              <div>
                <h3>Cocktail App</h3>
                <p>browse and search for cocktails</p>
              </div>
              <div className='project-card-view'>
                <p>view live</p>
                <a
                  href='https://browse-the-cocktails.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsPlayCircle className='project-card-icon' />
                </a>
                <p>or</p>
                <a
                  href='https://github.com/d-username/Cocktail-App'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/icons/github-black.png'
                    alt='GitHub icon'
                    className='project-card-icon'
                  />
                </a>
              </div>
            </li>

            <li className='project-card'>
              <div>
                <img
                  src='/images/weather_app.png'
                  alt='weather app demo'
                  className='project-card-image'
                />
              </div>
              <div>
                <h3>Weather App</h3>
                <p>a mobile format weather app</p>
              </div>
              <div className='project-card-view'>
                <p>view live</p>
                <a
                  href='https://show-me-the-weather-there.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsPlayCircle className='project-card-icon' />
                </a>
                <p>or</p>
                <a
                  href='https://github.com/d-username/the-everyone-must-have-my-first-one-and-only-weather-app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/icons/github-black.png'
                    alt='GitHub icon'
                    className='project-card-icon'
                  />
                </a>
              </div>
            </li>

            <li className='project-card'>
              <div>
                <img
                  src='/images/spotify_clone.png'
                  alt='spotify clone demo'
                  className='project-card-image'
                />
              </div>
              <div>
                <h3>Spotify clone</h3>
                <p>a static Spotify clone using only HTML and CSS</p>
              </div>
              <div className='project-card-view'>
                <p>view live</p>
                <a
                  href='https://clone-spotify-project.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsPlayCircle className='project-card-icon' />
                </a>
                <p>or</p>
                <a
                  href='https://github.com/d-username/boolean-uk-html-spotify'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/icons/github-black.png'
                    alt='GitHub icon'
                    className='project-card-icon'
                  />
                </a>
              </div>
            </li>

            <li className='project-card'>
              <div>
                <img
                  src='/images/snake_game.png'
                  alt='snake game demo'
                  className='project-card-image'
                />
              </div>
              <div>
                <h3>Snake game</h3>
                <p>collect food and grow the snake</p>
              </div>
              <div className='project-card-view'>
                <p>view live</p>
                <a
                  href='https://feed-the-snake-and-grow.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsPlayCircle className='project-card-icon' />
                </a>
                <p>or</p>
                <a
                  href='https://github.com/d-username/snake-game-JS'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/icons/github-black.png'
                    alt='GitHub icon'
                    className='project-card-icon'
                  />
                </a>
              </div>
            </li>

            <li className='project-card'>
              <div>
                <img
                  src='/images/tic_tac_toe.png'
                  alt='tic tac toe demo'
                  className='project-card-image'
                />
              </div>
              <div>
                <h3>Tic-Tac-Toe</h3>
                <p>match 3 and win the game</p>
              </div>
              <div className='project-card-view'>
                <p>view live</p>
                <a
                  href='https://play-exes-and-os.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsPlayCircle className='project-card-icon' />
                </a>
                <p>or</p>
                <a
                  href='https://github.com/d-username/tic-tac-toe'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/icons/github-black.png'
                    alt='GitHub icon'
                    className='project-card-icon'
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
