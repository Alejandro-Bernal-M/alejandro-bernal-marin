import styles from '../styles/Contact.module.css';

function Form() {
  return (
    <div>
      <form
        className={styles.form}
        action="https://formspree.io/f/mgebbggv"
        method="POST"
      >
        <label>
          Your name:
          <input type="text" name="name" required />
        </label>
        <label>
          Your email:
          <input type="email" name="email" required  />
        </label>
        <label>
          Your message:
          <textarea name="message" required ></textarea>
        </label>
        <button type="submit">Get in touch</button>
      </form>
    </div>
  )
}

export default Form;