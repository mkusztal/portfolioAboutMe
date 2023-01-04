import styles from "./Contact.module.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8e9di2v",
        "template_urfjvrd",
        // form.current,
        e.target,
        "yyW9oARO5E6_DbcV3"
      )
      .then(
        () => {
          return alert(
            "Thank you for your message! I will contact to you as soon as possible!"
          );
        },
        () => {
          return alert("Complete the required fields!");
        }
      );
    e.target.reset();
  };

  return (
    <section className={styles.root}>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.container}>
          <h2 className={styles.title}>Contact</h2>

          <div className={styles.input_container}>
            <div className={styles.label}>
              <b>Full name</b>
            </div>
            <input type="text" id="name" placeholder="Full name" name="name" />
          </div>
          <div className={styles.input_container}>
            <div className={styles.label}>
              <b>Email</b>
            </div>
            <input type="email" id="email" placeholder="Email" name="email" />
          </div>
          <div className={styles.input_container}>
            <div className={styles.label}>
              <b>
                Subject <span>(optional)</span>
              </b>
            </div>
            <input
              type="test"
              id="subject"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className={styles.input_container}>
            <div className={styles.label}>
              <b>Message</b>
            </div>
            <textarea
              id="message"
              placeholder="Message..."
              name="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
