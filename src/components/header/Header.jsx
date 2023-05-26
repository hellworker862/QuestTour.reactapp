import React from "react";
import Navbar from "../navbar/Navbar";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className="header">
      <div className={classes.headerTop}>
        <img
          src={require('../../img/Logo_Parmalogica.png')}
          alt="Логотип компании"
          className={classes.logo}
        />
        <div className={classes.account}>
          <a className={classes.accountContent}>И.О. Фамилия</a>
        </div>
      </div>
      <div className={classes.headerBottom}>
        <Navbar/>
      </div>
    </header>
  );
}

export default Header;
