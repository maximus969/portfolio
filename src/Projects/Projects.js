import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Project from './Project/Project';

function Projects() {
  return (
    <div className={style.projectBlock}>
      <div className={`${styleContainer.container} ${style.projectContainer}`}>
        <h2 className={style.title}>My Projects</h2>
        <div className={style.projects}>
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Projects;