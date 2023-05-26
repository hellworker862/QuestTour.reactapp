import React from "react";

function Select() {
  return (
    <select name="example">
      <option value="A">По названию</option>
      <option value="B">По дате начала</option>
      <option value="-">По дате окончания</option>
    </select>
  );
}

export default Select;
