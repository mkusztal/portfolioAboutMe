import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.input_container}>
          <input type="text" id="name" placeholder="Full name" />
        </div>
        <div className={styles.input_container}>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className={styles.input_container}>
          <input type="test" id="subject" placeholder="Subject" />
        </div>
        <div className={styles.input_container}>
          <textarea
            id="message"
            placeholder="Message..."
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
