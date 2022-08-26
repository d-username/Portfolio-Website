import { useForm, ValidationError } from '@formspree/react';
import './emailForm.css';

export function EmailForm() {
    const [state, handleSubmit] = useForm('xeqdokqg');

    if (state.succeeded) {
      return <p>Thanks for your email!</p>;
    }

  return (
    <form onSubmit={handleSubmit} id='email-form'>
      <div className='email-field' id='email-name'>
        <input type='text' name='name' id='name' required placeholder='name.' />
        <ValidationError prefix='Name' field='name' errors={state.errors} />
      </div>

      <div className='email-field' id='email-email'>
        <input
          type='email'
          name='email'
          id='email'
          required
          placeholder='your email address.'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>

      <div className='email-field' id='email-subject'>
        <input
          type='text'
          name='subject'
          id='subject'
          required
          placeholder='subject.'
        />
        <ValidationError prefix='Subject' field='subject' errors={state.errors} />
      </div>

      <div className='email-field' id='email-message'>
        <textarea
          id='message'
          name='message'
          rows='10'
          placeholder='message.'
          required
        ></textarea>
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
      </div>
      <button id='button-email-send' type='submit' disabled={state.submitting}>
        <span>Send email</span>
      </button>
    </form>
  );
}
