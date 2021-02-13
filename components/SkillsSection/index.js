import styles from "styles/SkillsSection.module.scss";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>My Skills</h2>
      <div className={styles.grid}>
        <SkillCard
          imgSrc="/skills/html5.svg"
          label="HTML5"
          link="https://en.wikipedia.org/wiki/HTML"
        />
        <SkillCard
          imgSrc="/skills/css.svg"
          label="CSS"
          link="https://en.wikipedia.org/wiki/CSS"
        />
        <SkillCard
          imgSrc="/skills/javascript.svg"
          label="JavaScript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillCard
          imgSrc="/skills/node.svg"
          label="Node"
          link="https://nodejs.org/en/"
        />
        <SkillCard
          imgSrc="/skills/react.svg"
          label="React"
          link="https://reactjs.org/"
        />
        <SkillCard
          imgSrc="/skills/vue.svg"
          label="Vue"
          link="https://vuejs.org/"
        />
        <SkillCard
          imgSrc="/skills/nextjs.svg"
          label="Next"
          link="https://nextjs.org/"
        />
        <SkillCard
          imgSrc="/skills/express.svg"
          label="Express"
          link="https://expressjs.com/"
        />
        <SkillCard
          imgSrc="/skills/redux.svg"
          label="Redux"
          link="https://redux.js.org/"
        />
        <SkillCard
          imgSrc="/skills/mongodb.svg"
          label="MongoDB"
          link="https://www.mongodb.com/"
        />
        <SkillCard
          imgSrc="/skills/sass.svg"
          label="Sass"
          link="https://sass-lang.com/"
        />
        <SkillCard
          imgSrc="/skills/github.svg"
          label="GitHub"
          link="https://github.com/"
        />
      </div>
    </section>
  );
};

const SkillCard = ({ imgSrc, label, link }) => (
  <a
    className={styles.card}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={styles.image}>
      <Image src={imgSrc} width={100} height={100} alt={label} />
    </div>
    <b>{label}</b>
  </a>
);

export default SkillsSection;
