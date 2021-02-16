import styles from "styles/AboutSection.module.scss";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const AboutSection = ({ setActive }) => {
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
    <section id="about" className={styles.aboutSection} ref={setRef}>
      <div className={styles.image}>
        <Image
          src="/images/about.jpg"
          alt="About Me"
          width={320}
          height={320}
          quality={100}
        />
      </div>
      <div className={styles.aboutMe}>
        <h2>About Me</h2>
        <h3>
          I'm a front-end and back-end developer from Metro Manila, Philippines.
        </h3>
        <p>
          I enjoy taking on complex designs and visualized concepts and
          implementing them into simple and beautiful systems for production. I
          also love the logic and structure that goes into coding and always
          strive to write elegant and efficient code.
        </p>
        <p>
          I am most confident in my ability to work with JavaScript and its
          ecosystem as well as in my ability to learn new languages, frameworks
          and libraries in the future.
        </p>
        <p>
          When I'm not coding or pushing pixels, you'll mostly find me gaming on
          my station or occassionally working out in the gym.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
