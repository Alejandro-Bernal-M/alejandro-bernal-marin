import Form from "./Form";
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <section className={styles.section} id='contact-section'>
      <div>
        <h2>Contact me!</h2>
        <p> I would love to build amazing projects together, let&apos;s get in touch.</p>
      </div>
       <Form />
      
    </section>
  )
}

export default Contact;