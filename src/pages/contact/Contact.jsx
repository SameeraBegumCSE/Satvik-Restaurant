import styles from "./Contact.module.css"
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import AOS from "aos"
import "aos/dist/aos.css"
import { useTheme } from "../../hooks/useTheme"

export default function Contact() {
  const { color } = useTheme()
  const [status, setStatus] = useState(false)
  const form = useRef()

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          e.target.reset()
          setStatus(true)
          setTimeout(() => setStatus(false), 3000)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className={styles.contactWrapper} data-aos="fade-up">
      <div className={styles.contactBox}>
        <h2 className={styles.contactHeading}>CONTACT US TODAY</h2>
        <p className={styles.contactDescription}>
          Ready to work with us? Contact us today to start planning. We're here to answer any questions you may have and help you exceed your expectations. We look forward to working with you!
        </p>

        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.inputRow}>
            <input type="text" name="first_name" placeholder="First Name" required />
            <input type="text" name="last_name" placeholder="Last Name" required />
          </div>
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className={styles.submitBtn}>
            {status ? "SENT SUCCESSFULLY" : "SUBMIT FORM"}
          </button>
        </form>
      </div>
    </div>
  )
}
