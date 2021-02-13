import styles from "styles/SkillsSection.module.scss";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <h2>My Skills</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h4>JavaScript</h4>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
