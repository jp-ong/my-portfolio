import styles from "styles/Intro.module.scss";

const Intro = () => {
  return (
    <section id="intro" className={styles.introSection}>
      <div className={styles.info}>
        <div className={styles.name}>
          <div className={styles.bubble}>Hello, I'm</div>
          <h1>John Paul Ong</h1>
          <h2>Full Stack JavaScript Developer</h2>
        </div>
        <div className={styles.contact}>
          <i className="fas fa-envelope" />
          jpong5202@gmail.com
        </div>
        <div className={styles.contact}>
          <i className="fas fa-phone-alt" />
          +639173243289
        </div>
        <div className={styles.contact}>
          <i className="fas fa-map-marker-alt" />
          Manila City, NCR, Philippines
        </div>
      </div>
      <div className={styles.image}>
        <img src="/profile.jpg" alt="John Paul Ong" />
      </div>
    </section>
  );
};

export default Intro;
