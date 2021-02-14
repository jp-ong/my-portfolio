import styles from "styles/SkillsSection.module.scss";
import Image from "next/image";

const color = {
  0: "blue",
  1: "green",
  2: "orange",
  3: "red",
};

const SkillsSection = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>My Skills</h2>
      <span className={styles.red}>&spades;</span> Experienced and most
      confident at
      <br />
      <span className={styles.orange}>&hearts;</span> Good and can be imrpoved
      on
      <br />
      <span className={styles.green}>&diams;</span> Needs more use experience
      <br />
      <span className={styles.blue}>&clubs;</span> Used only at the basic level
      <br />
      <h3>Programming / Coding</h3>
      <div className={styles.grid}>
        <SkillCard
          imgSrc="/skills/html5.svg"
          label="&spades; HTML5"
          link="https://en.wikipedia.org/wiki/HTML"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/javascript.svg"
          label="&spades; JavaScript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/css.svg"
          label="&spades; CSS"
          link="https://en.wikipedia.org/wiki/CSS"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/sass.svg"
          label="&hearts; Sass"
          link="https://sass-lang.com/"
          level={2}
        />
        <SkillCard
          imgSrc="/skills/java.svg"
          label="&hearts; Java"
          link="https://en.wikipedia.org/wiki/Java_(programming_language)"
          level={2}
        />
        <SkillCard
          imgSrc="/skills/php.svg"
          label="&diams; PHP"
          link="https://www.php.net/"
          level={1}
        />
        <SkillCard
          imgSrc="/skills/cplusplus.svg"
          label="&clubs; C++"
          link="https://en.wikipedia.org/wiki/C%2B%2B"
          level={0}
        />
      </div>
      <h3>Libraries / Frameworks</h3>
      <div className={styles.grid}>
        <SkillCard
          imgSrc="/skills/node.svg"
          label="&spades; Node.js"
          link="https://nodejs.org/en/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/express.svg"
          label="&spades; Express.js"
          link="https://expressjs.com/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/nextjs.svg"
          label="&spades; Next.js"
          link="https://nextjs.org/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/react.svg"
          label="&spades; React.js"
          link="https://reactjs.org/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/vue.svg"
          label="&diams; Vue.js"
          link="https://vuejs.org/"
          level={1}
        />
        <SkillCard
          imgSrc="/skills/redux.svg"
          label="&hearts; Redux.js"
          link="https://redux.js.org/"
          level={2}
        />
        <SkillCard
          imgSrc="/skills/bootstrap.svg"
          label="&clubs; Bootstrap"
          link="https://getbootstrap.com/"
          level={0}
        />
        <SkillCard
          imgSrc="/skills/mui.svg"
          label="&hearts; Material UI"
          link="https://material-ui.com/"
          level={2}
        />
      </div>
      <h3>Database</h3>
      <div className={styles.grid}>
        <SkillCard
          imgSrc="/skills/mongodb.svg"
          label="&spades; MongoDB"
          link="https://www.mongodb.com/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/mysql.svg"
          label="&clubs; MySQL"
          link="https://www.mysql.com/"
          level={0}
        />
      </div>
      <h3>Others</h3>
      <div className={styles.grid}>
        <SkillCard
          imgSrc="/skills/git.svg"
          label="&spades; Git"
          link="https://git-scm.com/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/github.svg"
          label="&hearts; GitHub"
          link="https://github.com/"
          level={2}
        />
        <SkillCard
          imgSrc="/skills/heroku.svg"
          label="&diams; Heroku"
          link="https://www.heroku.com/"
          level={1}
        />
        <SkillCard
          imgSrc="/skills/linux.svg"
          label="&clubs; Linux"
          link="https://en.wikipedia.org/wiki/Linux"
          level={0}
        />
        <SkillCard
          imgSrc="/skills/vercel.svg"
          label="&diams; Vercel"
          link="https://vercel.com/"
          level={1}
        />
      </div>
    </section>
  );
};

const SkillCard = ({ imgSrc, label, link, level }) => (
  <a
    className={styles.card}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={styles.image}>
      <Image src={imgSrc} width={100} height={100} alt={label} />
    </div>
    <b className={styles[color[level]]}>{label}</b>
  </a>
);

export default SkillsSection;
