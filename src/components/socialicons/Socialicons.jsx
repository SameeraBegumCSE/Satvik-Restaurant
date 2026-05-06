import styles from "./Socialicons.module.css"
import fb from "../../images/fb.png"
import insta from "../../images/insta.png"
import linkedin from "../../images/linkedin.png"
import web from "../../images/web.png"
export default function Socialicons() {
    return (
        <div className={styles.socialicons}>
            <a href="https://www.instagram.com/sameerabegum9347/?hl=en" > <img className={styles.socialIcon1} src={insta}></img> </a>
            <a href="https://www.linkedin.com/in/csstudentsam" > <img className={styles.socialIcon1} src={linkedin}></img> </a>
            <a href="https://vercel.com/sameerabegumcses-projects/">  <img className={styles.socialIcon1} src={web}></img> </a>
        </div>
    )
}