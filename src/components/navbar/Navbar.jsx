import React from "react";
import { routes } from "../../router";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav class={classes.navbar}>
      <ul class={classes.navbarContent}>
        <li class={classes.navbarItem}>
          <Link class={classes.underline} to="/">
            Главная
          </Link>
        </li>
        <li class={classes.navbarItem}>
          <Link class={classes.underline} to="/login">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
