import React from 'react';
import style from './DistantWork.module.css';

function DistantWork() {
  return (
    <div className={style.container}>
      <div className={style.block}>
        <h3 className={style.title}>I am considering the option of remote work</h3>
        <a href='#' className={style.text}>Hire Me</a>
      </div>
    </div>
  );
}

export default DistantWork;