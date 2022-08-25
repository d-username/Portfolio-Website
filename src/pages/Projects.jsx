export function Projects() {
    return (
      <section id='projects'>
        <div className='wrapper'>
          <div className='grid-col-two'>
            <div className='text-div'>
              <h1>projects.</h1>
              <h2>A selection of stuff I have built.</h2>
              <p>Check out these projects I have worked on.</p>
            </div>
            <div className='img-div'></div>
          </div>

          <div>
            <ul id='projects-grid'>
              <li className='project-card'>
                <div>
                  <img
                    src='/images/quiz_app_main_demo.gif'
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
              </li>

              <li className='project-card'>
                <div>
                  <img
                    src='/images/cocktail_app_demo.gif'
                    alt='coctail app demo'
                    className='project-card-image'
                  />
                </div>
                <div>
                  <h3>Cocktail App</h3>
                  <p>browse and search for cocktails</p>
                </div>
                <a
                  href='https://github.com/d-username/Cocktail-App'
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
              </li>

              <li className='project-card'>
                <div>
                  <img
                    src='/images/weather_app_demo.gif'
                    alt='weather app demo'
                    className='project-card-image'
                  />
                </div>
                <div>
                  <h3>Weather App</h3>
                  <p>a mobile format weather app</p>
                </div>
                <a
                  href='https://github.com/d-username/the-everyone-must-have-my-first-one-and-only-weather-app'
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
              </li>

              <li className='project-card'>
                <div>
                  <img
                    src='/images/spotify_clone_demo.gif'
                    alt='spotify clone demo'
                    className='project-card-image'
                  />
                </div>
                <div>
                  <h3>Spotify clone</h3>
                  <p>a static Spotify clone using only HTML and CSS</p>
                </div>
                <a
                  href='https://github.com/d-username/boolean-uk-html-spotify'
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
              </li>

              <li className='project-card'>
                <div>
                  <img
                    src='/images/snake_game_demo.gif'
                    alt='snake game demo'
                    className='project-card-image'
                  />
                </div>
                <div>
                  <h3>Snake game</h3>
                  <p>collect food and grow the snake</p>
                </div>
                <a
                  href='https://github.com/d-username/snake-game-JS'
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
              </li>

              <li className='project-card'>
                <div>
                  <img
                    src='/images/tic_tac_toe_demo.gif'
                    alt='tic tac toe demo'
                    className='project-card-image'
                  />
                </div>
                <div>
                  <h3>Tic-Tac-Toe</h3>
                  <p>match 3 and win the game</p>
                </div>
                <a
                  href='https://github.com/d-username/snake-game-JS'
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
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}

