import styles from "styles/IntroSection.module.scss";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section id="intro" className={styles.introSection}>
      <div className={styles.info}>
        <div className={styles.name}>
          <div className={styles.bubble}>Hello, I'm</div>
          <h1>John Paul Ong</h1>
          <h2>Full Stack JavaScript Developer</h2>
        </div>
        <div className={styles.contact}>
          <span aria-hidden className="fas fa-envelope" />
          jpong5202@gmail.com
        </div>
        <div className={styles.contact}>
          <span aria-hidden className="fas fa-phone-alt" />
          +639173243289
        </div>
        <div className={styles.contact}>
          <span aria-hidden className="fas fa-map-marker-alt" />
          Manila City, NCR, Philippines
        </div>
        <div className={styles.links}>
          <a href="https://www.facebook.com/johnpaul5202">
            <span aria-hidden className="fab fa-facebook-f" />
            <span className={styles.screenReader}>Link to my Facebook</span>
          </a>
          <a href="https://github.com/jp-ong">
            <span aria-hidden className="fab fa-github" />
            <span className={styles.screenReader}>Link to my GitHub</span>
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/profile.jpg"
          alt="John Paul Ong"
          width={320}
          height={320}
          quality={100}
        />
      </div>
    </section>
  );
};

export default IntroSection;
