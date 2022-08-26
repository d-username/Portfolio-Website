import { EmailForm } from "../components/EmailForm";

export function Contact() {
  return (
    <section id='contact'>
      <div className='wrapper'>
        <div className='grid-col-two'>
          <div className='text-div'>
            <h1>contact.</h1>
            <h2>Find me on these online spaces, or drop me and email.</h2>

            <ul id='contact-follow'>
              <li>
                <a
                  href='https://github.com/d-username'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/icons/github-black.png'
                    alt='GitHub icon'
                    className='contact-icon'
                  />
                  <p className='colour-github'>GitHub</p>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/david-czuczor-06748423b/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/icons/linkedin-colour.png'
                    alt='LinkedIn icon'
                    className='contact-icon'
                  />
                  <p className='colour-linkedin'>LinkedIn</p>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/czdavid93/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/icons/instagram-colour.png'
                    alt='Instagram icon'
                    className='contact-icon'
                  />
                  <p className='colour-instagram'>Instagram</p>
                </a>
              </li>
            </ul>
          </div>

          <EmailForm />
        </div>
      </div>
    </section>
  );
}
