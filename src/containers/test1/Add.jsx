import React, { useState } from "react";

export default function Add() {
  //   const [count, setCount] = useState(0);
  //   const clickHander = () => {
  //     setCount(count + 1);
  //   };

  //   const [person, setPerson] = useState({ name: "puxiao", age: 34 });

  //   const nameChangeHandler = (eve) => {
  //     setPerson({ ...person, name: eve.target.value });
  //     console.log(person)
  //   };

  //   const ageChangeHandler = (eve) => {
  //     setPerson({ ...person, age: eve.target.value });
  //     console.log(person)

  //   };

  const [str, setStr] = useState("");
  const [arr, setArr] = useState(["react", "Koa"]);

  const inputChangeHandler = (eve) => {
    setStr(eve.target.value);
  };

  const addHeadHandler = (eve) => {
    setArr([str, ...arr]); //添加至头
    setStr("");
  };

  const addEndHandler = (eve) => {
    setArr([...arr, str]); //添加至尾
    setStr("");
  };

  const delHeadHandler = (eve) => {
    let new_arr = [...arr];
    new_arr.shift(); //从头删除1项目
    setArr(new_arr);
  };

  const delEndHandler = (eve) => {
    let new_arr = [...arr];
    new_arr.pop(); //从尾删除1项目
    setArr(new_arr);
  };

  const delByIndex = (eve) => {
    let index = eve.target.attributes.index.value;
    let new_arr = [...arr];
    new_arr.splice(index, 1); //删除当前项
    setArr(new_arr);
  };

  return (
    <div>
      {/* <div onClick={clickHander}>{count}
      <input type="text" value={person.name} onChange={nameChangeHandler} />
      <input type="text" value={person.age} onChange={ageChangeHandler} />
      </div> */}
      <input type="text" value={str} onChange={inputChangeHandler} />
      <button onClick={addHeadHandler}>添加至头</button>
      <button onClick={addEndHandler}>添加至尾</button>
      <button onClick={delHeadHandler}>从头删除1项</button>
      <button onClick={delEndHandler}>从尾删除1项</button>
      <ul>
        {arr.map((item, index) => {
          return (
            <li key={`item${index}`}>
              学习{index} - {item}
              <span
                index={index}
                onClick={delByIndex}
                style={{ cursor: "pointer" }}
              >
                删除
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
