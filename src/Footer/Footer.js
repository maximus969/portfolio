import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerBlock}>
        <h3 className={style.text}>Maxim Bordea</h3>
        <div className={style.socialMedia}>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
        </div>
        <h3 className={style.text}>© 2021 All rights reserved</h3>
      </div>
    </div>
  );
}

export default Footer;
