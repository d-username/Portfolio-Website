import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
   const [state, handleSubmit] = useForm('xeqdokqg');

    if (state.succeeded) {
      return <p>Thanks for your email!</p>;
    }

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

          <form
            onSubmit={handleSubmit}
          >
            <div className='email-field'>
              <input
                type='text'
                name='name'
                id='name'
                required
                placeholder='name.'
              />
              <ValidationError
                prefix='Name'
                field='name'
                errors={state.errors}
              />
            </div>

            <div className='email-field'>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='your email address.'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </div>

            <div className='email-field'>
              <textarea
                id='message'
                name='message'
                rows='10'
                cols='40'
                placeholder='message.'
                required
              ></textarea>
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            <button
              id='button-email-send'
              type='submit'
              disabled={state.submitting}
            >
              <span>Send email</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
