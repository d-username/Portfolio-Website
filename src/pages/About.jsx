import { Skills } from '../components/Skills';

export function About() {
  return (
    <div id='about'>
      <section id='about-top'>
        <div className='wrapper'>
          <div className='grid-col-two'>
            <div className='text-div'>
              <h1>about.</h1>
              <h2>
                I'm a Junior Software Developer with a background in optics and
                retail.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                possimus quae optio inventore debitis? Sequi quidem id aut
                doloribus omnis earum voluptates voluptate esse, vero velit. Id
                ea veniam quod.
              </p>
            </div>
            <div className='img-div'>
              <img
                src='https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='skills'
              />
            </div>
          </div>
        </div>
      </section>
      <section id='about-skills'>
        <div className='wrapper'>
          <Skills />
        </div>
      </section>
    </div>
  );
}
