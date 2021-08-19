import React from "react";
import style from "./Project.module.css";

function Project(props) {
  return (
    <div className={style.project}>
      <div className={style.imgProject}>
        <a href='#' className={style.projectButton}>View</a>
      </div>
      <h3 className={style.title}>Project name</h3>
      <span className={style.description}>Project description</span>
    </div>
  );
}

export default Project;