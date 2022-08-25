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
              <li>
                <a
                  href='https://www.w3schools.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='project-card'
                >
                  <div>
                    <img
                      src='https://images.pexels.com/photos/1935370/pexels-photo-1935370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt='Florence and The Machine album cover - Lungs'
                      className='project-card-image'
                    />
                  </div>
                  <div>
                    <h3>project title</h3>
                    <p>very short descritpion of the project</p>
                  </div>
                  <div>icons come here</div>
                  <a
                    href='https://github.com/d-username'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src='/icons/github-black.png'
                      alt='GitHub icon'
                      className='navbar-icon'
                    />
                  </a>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}

