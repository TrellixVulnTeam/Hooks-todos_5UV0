import { observer } from "mobx-react";
import React, { useContext } from "react";
// import NotFinshedItem from "./NotFinshedItem";

// import { HomeContext } from "../../containers/home/Home";

import Item from "../item";

const NotFinshed = observer((props) => {
  const {
    isFinishedTodo,
    unfinishedTodo,
    toggleFinished,
    changeValue,
    deleteOne,
    addSubItem,
  } = props.store;
  console.log(props.store, " notFinished");
  const { notFinishedArr } = isFinishedTodo;
  return (
    <div className="notfinished">
      <p>未完成</p>
      {unfinishedTodo.map((todo) => (
        <Item
          todo={todo}
          key={todo.id}
          toggleFinished={toggleFinished}
          changeValue={changeValue}
          deleteOne={deleteOne}
          addSubItem={addSubItem}
        />
      ))}
    </div>
  );
});
export default NotFinshed;
