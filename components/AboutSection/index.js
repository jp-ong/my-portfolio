import styles from "styles/AboutSection.module.scss";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className={styles.aboutSection}
      onFocus={() => console.log("Hello")}
    >
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
