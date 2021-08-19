import React from 'react';
import style from './Contacts.module.css';

function Contacts() {
  return (
    <div className={style.contacts}>
      <div className={style.block}>
        <h3 className={style.title}>Contacts</h3>
        <div className={style.form}>
          <input className={style.contactInput}></input>
          <input className={style.contactInput}></input>
          <textarea className={style.contactTextarea}></textarea>
        </div>
        <button className={style.contactButton}>Send</button>
      </div>
    </div>
  );
}

export default Contacts;
