import React, { useContext, useState } from "react";

import { HomeContext } from "../../containers/home/Home";

export default function NotFinshedItem(props) {
  const { str, setStr, arr, setArr } = useContext(HomeContext);
  const { value, id, finished } = props.i;
  console.log(value, id, finished);

  // 删除指定类
  const deleteOne = (id) => {
    console.log(id);
    // 根据id进行删除
    const newArr = arr.map((i, index) =>
      i.id === id ? arr.splice(index, 1) : null
    );
    // 更新数组
    setArr(arr);
    // console.log('finished',arr,newArr)
  };
  return (
    <div className="finishedItem">
      {finished ? <input type="checkbox"  /> : null}
      {value}
      <button className="delete" onClick={()=>deleteOne(id)}>删除</button>
      <div className="lineThrow"></div>
    </div>
  );
}
