import styles from "styles/SkillsSection.module.scss";
import { useRef, useState, useEffect } from "react";

const color = {
  0: "blue",
  1: "green",
  2: "orange",
  3: "red",
};

const SkillsSection = ({ setActive }) => {
  const observer = useRef();
  const options = { threshold: 0.25 };

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
    <section id="skills" className={styles.skillsSection} ref={setRef}>
      <h2>My Skills</h2>
      <span className={styles.red}>
        &spades;&nbsp;Experienced and most confident at
      </span>
      <br />
      <span className={styles.orange}>
        &hearts;&nbsp;Good and can be improved on
      </span>
      <br />
      <span className={styles.green}>
        &diams;&nbsp;Needs more use experience
      </span>
      <br />
      <span className={styles.blue}>
        &clubs;&nbsp;Used only at the basic level
      </span>
      <br />
      <h3>Programming / Coding</h3>
      <div className={styles.grid}>
        <SkillCard
          imgSrc="/skills/html5.svg"
          label="&spades;&nbsp;HTML5"
          link="https://en.wikipedia.org/wiki/HTML"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/javascript.svg"
          label="&spades;&nbsp;JavaScript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/css.svg"
          label="&spades;&nbsp;CSS"
          link="https://en.wikipedia.org/wiki/CSS"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/sass.svg"
          label="&hearts;&nbsp;Sass"
          link="https://sass-lang.com/"
          level={2}
        />
        <SkillCard
          imgSrc="/skills/java.svg"
          label="&hearts;&nbsp;Java"
          link="https://en.wikipedia.org/wiki/Java_(programming_language)"
          level={2}
        />
        <SkillCard
          imgSrc="/skills/php.svg"
          label="&diams;&nbsp;PHP"
          link="https://www.php.net/"
          level={1}
        />
        <SkillCard
          imgSrc="/skills/cplusplus.svg"
          label="&clubs;&nbsp;C++"
          link="https://en.wikipedia.org/wiki/C%2B%2B"
          level={0}
        />
      </div>
      <h3>Libraries / Frameworks</h3>
      <div className={styles.grid}>
        <SkillCard
          imgSrc="/skills/node.svg"
          label="&spades;&nbsp;Node.js"
          link="https://nodejs.org/en/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/express.svg"
          label="&spades;&nbsp;Express.js"
          link="https://expressjs.com/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/nextjs.svg"
          label="&spades;&nbsp;Next.js"
          link="https://nextjs.org/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/react.svg"
          label="&spades;&nbsp;React.js"
          link="https://reactjs.org/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/redux.svg"
          label="&hearts;&nbsp;Redux.js"
          link="https://redux.js.org/"
          level={2}
        />
        <SkillCard
          imgSrc="/skills/vue.svg"
          label="&diams;&nbsp;Vue.js"
          link="https://vuejs.org/"
          level={1}
        />
        <SkillCard
          imgSrc="/skills/bootstrap.svg"
          label="&clubs;&nbsp;Bootstrap"
          link="https://getbootstrap.com/"
          level={0}
        />
        <SkillCard
          imgSrc="/skills/mui.svg"
          label="&hearts;&nbsp;Material UI"
          link="https://material-ui.com/"
          level={2}
        />
      </div>
      <h3>Database</h3>
      <div className={styles.grid}>
        <SkillCard
          imgSrc="/skills/mongodb.svg"
          label="&spades;&nbsp;MongoDB"
          link="https://www.mongodb.com/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/mysql.svg"
          label="&clubs;&nbsp;MySQL"
          link="https://www.mysql.com/"
          level={0}
        />
      </div>
      <h3>Others</h3>
      <div className={styles.grid}>
        <SkillCard
          imgSrc="/skills/git.svg"
          label="&spades;&nbsp;Git"
          link="https://git-scm.com/"
          level={3}
        />
        <SkillCard
          imgSrc="/skills/github.svg"
          label="&hearts;&nbsp;GitHub"
          link="https://github.com/"
          level={2}
        />
        <SkillCard
          imgSrc="/skills/heroku.svg"
          label="&diams;&nbsp;Heroku"
          link="https://www.heroku.com/"
          level={1}
        />
        <SkillCard
          imgSrc="/skills/vercel.svg"
          label="&diams;&nbsp;Vercel"
          link="https://vercel.com/"
          level={1}
        />
        <SkillCard
          imgSrc="/skills/linux.svg"
          label="&clubs;&nbsp;Linux"
          link="https://en.wikipedia.org/wiki/Linux"
          level={0}
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
      <img src={imgSrc} width={100} height={100} alt={label} />
    </div>
    <div className={`${styles.label} ${styles[color[level]]}`}>{label}</div>
  </a>
);

export default SkillsSection;
