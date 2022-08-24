export function About() {
    return (
      <section id='about'>
        <div className='wrapper'>
          <div className="grid-col-two">
            <div className='text-div'>
              <h1>about.</h1>
              <h2>
                I'm a Junior Software Developer with a background in optics and
                retail.
              </h2>
              <p>
                After I graduated from an intensive 6-months long academy focusing
                on Full-Stack Software Development, I am excited to start my
                career in tech at a company where I would have the opportunity to
                grow as a developer and as a person.
              </p>
            </div>
            <div className='img-div'>
              <img
                src='/images/IMG_20220811_203017.jpg'
                alt='David in Venice'
                id="about-image"
              />
            </div>
          </div>
        </div>
      </section>
    );
}