import Form from "./Form";
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <section className={styles.section}>
      <h2>Contact me.</h2>
      <div className={styles.formContainer}>
        <p> I would love to build amazing projects together, let&apos;s get in touch.</p>
       <Form />
      </div>
    </section>
  )
}

export default Contact;