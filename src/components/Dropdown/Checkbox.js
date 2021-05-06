import React, { useState } from "react";
import CheckboxWrapper from "./Checkbox.styles";

const Checkbox = props => {
  const { items, selectFunction, checkList } = props;

  return (
    <CheckboxWrapper>
      {items.map(item => (
        <label key={item.id}>
          <input type="checkbox" checked={checkList[item.id]} onClick={() => selectFunction(item.id, item)} />
          {item.value}
        </label>
      ))}
    </CheckboxWrapper>
  );
};

export default Checkbox;
