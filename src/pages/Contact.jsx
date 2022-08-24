export function Contact() {
return (
  <section id='contact'>
    <div className='wrapper'>
      <div className='grid-col-two'>
        <div className='text-div'>
          <h1>contact.</h1>
          <h2>some text may come here</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            aperiam, minima nobis nam sed ab distinctio blanditi
          </p>
          <ul>
            <li>github icon</li>
            <li>linkedin icon</li>
            <li>instagram icon</li>
          </ul>
        </div>
        <div id='contact-email'>
          <form action='https://formspree.io/f/{form_id}' method='post'>

            <div className='email-field'>
              <input
                type='text'
                name='name'
                id='name'
                required
                placeholder='nice to meet you...'
              />
              <label htmlFor='name'>
                Name
                <span className='required-asterisk'>*</span>
              </label>
            </div>

            <div className='email-field'>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='i am looking forward to chat to you..'
              />
              <label htmlFor='email'>
                Email
                <span className='required-asterisk'>*</span>
              </label>
            </div>

            <div className='email-field'>
              <input
                type='text'
                name='message'
                id='message'
                required
                placeholder='hmm...i like reading emails...'
              />
              <label htmlFor='message'>
                Message
                <span className='required-asterisk'>*</span>
              </label>
            </div>
            <button className='button-email-send' type='submit'>
              <span>Send email</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
}