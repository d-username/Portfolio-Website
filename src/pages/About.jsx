import { Skills } from '../components/Skills';

export function About() {
  return (
    <section id='about'>
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
                After I graduated from an intensive 6-months long academy
                focusing on Full-Stack Software Development, I am excited to
                start my career in tech at a company where I would have the
                opportunity to grow as a developer and as a person.
              </p>
              <p>
                My tech skills include{' '}
                <b>
                  HTML, CSS, JavaScript, React, Node.js, Express, Prisma ORM and
                  PostgreSQL
                </b>{' '}
                .
              </p>
            </div>
            <div className='img-div'>
              <img
                src='https://images.pexels.com/photos/5554751/pexels-photo-5554751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
    </section>
  );
}
