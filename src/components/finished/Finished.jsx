import React, { } from "react";
// import FinishedItem from "./FinishedItem";

import { observer } from "mobx-react";
import Item from "../item";
import SubItem from "../item/subItem";

const Finished = observer((props) => {
  // console.log(props.store, " finished");
  const { isFinishedTodo,finishedTodo, toggleFinished, changeValue, deleteOne, addSubItem } =
    props.store;
    console.log(isFinishedTodo,"isFinishedTodo");
    const {finishedArr}=isFinishedTodo
  return (
    <div className="finished">
      <p>已完成</p>
      {finishedTodo.map((todo,index) => {
        if (!todo.children) {
          return (
            <Item
              todo={todo}
              key={todo.id}
              index={index}
              toggleFinished={toggleFinished}
              changeValue={changeValue}
              deleteOne={deleteOne}
              addSubItem={addSubItem}
            />
          );
        } else {
          return (
            <div>
              <Item
                todo={todo}
                key={todo.id}
                toggleFinished={toggleFinished}
                changeValue={changeValue}
                deleteOne={deleteOne}
                addSubItem={addSubItem}
              />
              {todo.children.map((subTodo,index) => (
                <SubItem
                  todo={subTodo}
                  index={index}
                  key={subTodo.id}
                  toggleFinished={toggleFinished}
                  changeValue={changeValue}
                  deleteOne={deleteOne}
                  addSubItem={addSubItem}
                />
              ))}
            </div>
          );
        }
      })}
    </div>
  );
});

export default Finished;
