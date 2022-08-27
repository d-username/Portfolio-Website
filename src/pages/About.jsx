import { Skills } from '../components/Skills';

export function About() {
  return (
    <section id='about'>
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
              doloribus omnis earum voluptates voluptate esse, vero velit. Id ea
              veniam quod.
            </p>
          </div>
          <div className='img-div'>image</div>
        </div>
        <Skills />
      </div>
    </section>
  );
}
