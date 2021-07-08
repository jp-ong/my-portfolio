import styles from "styles/AboutSection.module.scss";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const AboutSection = ({ setActive }) => {
  const observer = useRef();
  const options = { threshold: 0.5 };

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
          Front-end & Back-end developer. UI / UX Designer. System Designer.
        </h3>
        <p>
          I'm a developer from Metro Manila, Philippines. I enjoy taking on
          complex designs and visualized concepts and implementing them into
          simple and beautiful systems for production. I love challenging the
          obstacles I face, while doing it in the most elegant and efficient way
          I am capable of.
        </p>
        <p>
          I am most confident in my ability to work with JavaScript and its
          ecosystem, but I am also capable of quickly learning new languages,
          frameworks, and libraries if necessary.
        </p>
        <p>
          When I'm not programming, I'll usually be gaming, or occassionally be
          working out in the gym.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
