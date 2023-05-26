import React from "react";
import classes from './Toggle.module.css'

function Toggle() {
  return (
    <div class={classes.toggleGroup}>
      <input id="one"  type="radio" name="selector" defaultChecked={true}/>
      <label for="one" className={classes.labelToggle}>
        Все
      </label>
      <input id="two"  type="radio" name="selector"/>
      <label for="two" className={classes.labelToggle}>
        Вариант
      </label>
      <input id="three"  type="radio" name="selector"/>
      <label for="three" className={classes.labelToggle}>
        Нету
      </label>
    </div>
  );
}

export default Toggle;
