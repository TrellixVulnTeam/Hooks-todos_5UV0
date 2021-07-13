import React from "react";

import { observer } from "mobx-react";

export default function Item(props) {
  // console.log(props,"props1");
  const { todo, toggleFinished, changeValue, deleteOne, addSubItem } = props;
  //   console.log(todo,"todo");
  const isChangeValue = (e) => {
    // console.log(e.target.value);
    // 按回车进行数据更新
    if(e.keyCode===13){
      const newValue = e.target.value;
      console.log(newValue,"newValue");
      if (newValue !== todo.value) {
        todo.value = newValue;
        // changeValue(todo);
        // console.log(todo,"todo");
        changeValue(todo)
      }
    }
    
  };
  // 任意地方点击将toggle隐藏
  // document.onclick = () => {
  //   const toggleTask = document.getElementsByClassName("toggleTask");
  //   console.log(toggleTask.length, "length");
  //   for (let i = 0; i < toggleTask.length; i++) {
  //     if (toggleTask.length && toggleTask[i].style.display === "inline") {
  //       toggleTask[i].style.display = "none";
  //     }
  //   }
  // };
  // 任务栏显示隐藏
  const toggleTashShow = () => {
    // console.log(todo);
    //  显示框
    const toggleTask = document.getElementsByClassName("toggleTask");
    // console.log(toggleTask, "toggleTask");
    // 控制显示框按钮
    const menuToggle = document.getElementsByClassName("menuToggle");
    // console.log(menuToggle, "menuToggle");
    for (let i = 0; i < menuToggle.length; i++) {
      // console.log(menuToggle);
      // console.log(menuToggle[i], i);
      menuToggle[i].onclick = () => {
        // console.log("开始display", i);
        console.log(toggleTask[i], "toggleTask[i]");
        if (toggleTask[i].style.display === "none") {
          toggleTask[i].style.display = "inline";
          console.log("执行了inline", toggleTask[i].style.display);
        } else {
          toggleTask[i].style.display = "none";
          console.log("执行了none", toggleTask[i].style.display);
        }
        // console.log("结束了display");
      };
    }
    // document.onclick = () => {
    //   console.log(i, "i");
    //   if (toggleTask[i].style.display === "inline") {
    //     toggleTask[i].style.display = "none";
    //     console.log("document 执行了");
    //   }
    // };
  };

  return (
    <div className="item">
      <input
        className="checkStyle"
        type="checkbox"
        checked={todo.isFinished}
        onChange={() => toggleFinished(todo)}
      />
      <input
        className="showValue"
        defaultValue={todo.value}
        onKeyDown={isChangeValue}
      />
      <div className="menuToggle" onClick={() => toggleTashShow()}>
        <span>...</span>
      </div>
      <div className="toggleTask" style={{ display: "none" }}>
        {todo.isFinished ? null : (
          <div onClick={() => addSubItem(todo)}>添加子任务</div>
        )}
        <div onClick={() => deleteOne(todo)}>删除</div>
      </div>
      {/* <button onClick={() => deleteOne(todo)}>删除</button> */}
      {/* <div className="lineThrow"></div> */}
      {props.children ? props.children : null}
    </div>
  );
}
