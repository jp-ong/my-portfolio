import styles from "styles/IntroSection.module.scss";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const IntroSection = ({ setActive }) => {
  const observer = useRef();
  const options = { threshold: 0.75 };

  const [ref, setRef] = useState(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      entries.forEach(
        (entry) => entry.isIntersecting && setActive(entry.target.id)
      );
    }, options);
    if (ref) observer.current.observe(ref);
    return () => {
      if (ref) observer.current.disconnect();
    };
  }, [ref]);

  return (
    <section id="intro" className={styles.introSection} ref={setRef}>
      <IntroInfo />
      <div className={styles.image}>
        <Image
          src="/images/boi.jpg"
          alt="John Paul Ong"
          width={320}
          height={320}
          quality={100}
        />
      </div>
    </section>
  );
};

const IntroInfo = () => (
  <div className={styles.info}>
    <div className={styles.name}>
      <div className={styles.bubble}>Hello, I'm</div>
      <h1>John Paul Ong</h1>
      <h2>Full Stack Web Developer</h2>
    </div>
    <InfoContact icon="fas fa-envelope" label="jpong5202@gmail.com" />
    <InfoContact icon="fas fa-envelope" label="201801383@iacademy.edu.ph" />
    <InfoContact icon="fas fa-phone-alt" label="+639173243289" />
    <InfoContact
      icon="fas fa-map-marker-alt"
      label="Manila City, NCR, Philippines"
    />
    <div className={styles.links}>
      <InfoLink
        icon="fab fa-facebook-f"
        link="https://www.facebook.com/johnpaul5202"
        reader="Link to my Facebook"
      />
      <InfoLink
        icon="fab fa-github"
        link="https://github.com/jp-ong"
        reader="Link to my GitHub"
      />
    </div>
    <a href="/Ong_JohnPaul.pdf" download>
      Download my CV
    </a>
  </div>
);

const InfoContact = ({ icon, label }) => (
  <div className={styles.contact}>
    <span aria-hidden className={icon} />
    {label}
  </div>
);

const InfoLink = ({ icon, link, reader }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" title={reader}>
    <span aria-hidden className={icon} />
    <span className={styles.screenReader}>{reader}</span>
  </a>
);

export default IntroSection;
