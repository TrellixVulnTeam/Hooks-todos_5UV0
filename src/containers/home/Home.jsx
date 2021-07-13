import React, { useState, useContext, createContext } from "react";

import AddForm from "../../components/addForm/AddForm";
import Finished from "../../components/finished/Finished";
import NotFinshed from "../../components/notFinshed/NotFinshed";

// import { observer } from "mobx-react";
// import Mobx from "../test1/Mobx";

// import Add from "../test1/Add";

// import store from "../../store/todolists";

// export const HomeContext = createContext();

export default function Home(props) {
  // const [str, setStr] = useState("");
  // const [arr, setArr] = useState([]);
  // console.log("arr home", arr);
  // console.log("store home", props.store);
  const { store } = props;
  console.log(store, " home");
  return (
    <div className="home">
      <AddForm store={store} />
      <Finished store={store} />
      <NotFinshed store={store} />
    </div>
  );
}

/***
 *
 *    添加
 *    分类
 *    添加子类
 *    完成类型互换
 *    删除
 *
 */
