import styles from "styles/ProjectsSection.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    demoLink: "https://c19statistics.vercel.app/",
    repoLink: "https://github.com/jp-ong/c19statistics",
    imgSrc: "c19statistics",
    projectTitle: "COVID19 Statistics Server-Side Rendering w/ Next.js",
    projectDescription:
      "Server-side rendering website powered by Next.js. This website utilizes Material UI for css and theming. Source of data is JHU COVID19 MongoDB Atlas and uses the library Mongoose.js for interacting with the database.",
  },
  {
    demoLink: "https://override-syntax.herokuapp.com/",
    repoLink: "https://github.com/jp-ong/override-syntax",
    imgSrc: "override-syntax",
    projectTitle:
      "Override - e-Commerce Storefront System using Syntax Subsystems",
    projectDescription:
      "An e-commerce system that utilizes the MERN stack. This subsystem serves as the storefront for an e-commerce system. Front-end is using React paired with Redux for state management, and back-end is connected to an external server, where other subsystems can connect to, which is then connected to my MongoDB Atlas.",
  },
  {
    demoLink: "http://syntax-inventory.herokuapp.com/",
    imgSrc: "syntax-inventory",
    projectTitle: "Syntax - Inventory System for Override Storefront",
    projectDescription:
      "A simple inventory management system that uses plain HTML, CSS, and JavaScript. This system serves exclusively as a subsystem to the e-commerce system. Data is fetch from an external server, where other subsytems are connected to, which is then connected to my MongoDB Atlas.",
  },
  {
    demoLink: "http://syntax-api-server.herokuapp.com/",
    imgSrc: "syntax-api-server",
    projectTitle: "Syntax - External API Server for Override Subsystems",
    projectDescription:
      "The external API server where e-commerce subsystems are all connected to. It features token-based authentication, encryption of credentials, CRUD operations, proper HTTP codes, and is using a MongoDB Atlas as its database.",
  },
  {
    demoLink: "https://covid-stats-global.herokuapp.com/",
    repoLink: "https://github.com/jp-ong/covid-stats-global",
    imgSrc: "covid-stats-global",
    projectTitle: "COVID19 Statistics Client-Side Rendering w/ React.js",
    projectDescription:
      "Made with MERN stack - MongoDB, Express, React, Node. The website shows COVID19 statistics such as total confirmed number of cases, number of recoveries from each country, and etc. Front-end fetches the data from its back-end via REST API which is connected to JHU COVID19 MongoDB Atlas.",
  },
];

const ProjectsSection = ({ setActive }) => {
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
    <section id="projects" className={styles.projectsSection} ref={setRef}>
      <h2>My Projects</h2>
      <a
        href="https://github.com/jp-ong"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.external}
      >
        View All <span class="fas fa-external-link-alt" />
      </a>
      <div className={styles.projects}>
        {projects.map(
          ({
            demoLink,
            repoLink,
            imgSrc,
            projectTitle,
            projectDescription,
          }) => (
            <ProjectRow
              imgSrc={imgSrc}
              projectTitle={projectTitle}
              projectDescription={projectDescription}
              demoLink={demoLink}
              repoLink={repoLink}
            />
          )
        )}
      </div>
    </section>
  );
};

const ProjectRow = ({
  demoLink,
  repoLink,
  imgSrc,
  projectTitle,
  projectDescription,
}) => (
  <div className={styles.project}>
    <div className={styles.thumbnail}>
      <a
        href={`/images/projects/live-thumbnails/${imgSrc}.jpg`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`/images/projects/live-thumbnails/${imgSrc}.jpg`}
          width={1024}
          height={488}
          alt={projectTitle}
        />
      </a>
    </div>
    <div className={styles.description}>
      <h3>
        <b>{projectTitle}</b>
      </h3>
      <div>
        <a
          className={!demoLink ? styles.disabled : ""}
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>{" "}
        <a
          className={!repoLink ? styles.disabled : ""}
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </div>
      <p>{projectDescription}</p>
    </div>
  </div>
);

export default ProjectsSection;
