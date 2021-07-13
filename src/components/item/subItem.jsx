import React from "react";

import { observer } from "mobx-react";

export default function Item(props) {
  // console.log(props,"props1");
  const { todo, toggleFinished, changeValue, deleteOne, addSubItem } = props;
  //   console.log(todo,"todo");
  const isChangeValue = (e) => {
    const newValue = e.target.value;
    console.log(newValue, "e");
    if (newValue !== todo.value) {
      todo.value = newValue;
      // changeValue(todo);
      console.log(todo);
    }
  };

  const toggleTashShow = () => {
    // const toggle = document.querySelector(".toggleTask").style;
    // if (toggle.display === "none") {
    //   toggle.display = "block";
    // } else {
    //   toggle.display = "none";
    // }

    console.log(todo, "toggleTashShow");
    // toggle.display = "none" ? "inline" : "none";
    console.log(123, "toggleTashShow");
  };

  const addTabNav = () => {
    // console.log(123);
    // addSubItem(todo)
  };
  return (
    <div className="subitem">
      <input
        className="checkStyle"
        type="checkbox"
        checked={todo.isFinished}
        // onClick={() => todo.isFinished = !todo.isFinished}
        onChange={() => toggleFinished(todo)}
      />
      <input
        className="showValue"
        value={todo.value}
        onChange={isChangeValue}
      />
      <div className="menuToggle" onClick={() => toggleTashShow()}>
        <span>...</span>
      </div>
      <div className="toggleTask" style={{ display: "none" }}>
        <div onClick={() => addTabNav(todo)}>添加子任务</div>
        <div onClick={() => deleteOne(todo)}>删除</div>
      </div>
      {/* <button onClick={() => deleteOne(todo)}>删除</button> */}
      <div className="lineThrow"></div>
    </div>
  );
}
