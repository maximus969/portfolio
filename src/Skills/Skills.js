import React from "react";
import style from "./Skills.module.css";
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill title='Js' description='something about JS'/>
          <Skill title='Css' description='something about CSS'/>
          <Skill title='React' description='something about React'/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
