import React, { useState, useContext, createContext } from "react";

import AddForm from "../../components/addForm/AddForm";
import Finished from "../../components/finished/Finished";
import NotFinshed from "../../components/notFinshed/NotFinshed";

import Mobx from "../test1/Mobx";

import Add from "../test1/Add";

// export default class Home extends Component {
//   render() {
//     const { obj } = Text;
//     // console.log(obj);
//     console.log(typeof obj)

//     return (
//       <div className="home">
//         <AddForm />
//         {/* {
//             obj.map((item,index)=>item.finished?<NotFinshed  key={index} index={index} item={item} />:<Finished key={index} index={index} item={item} />)
//         } */}
//         <Finished/>
//         <NotFinshed/>
//         {/* <Mobx /> */}
//         {/* <Add/> */}
//       </div>
//     );
//   }
// }

export const HomeContext = createContext();
export default function Home() {
  const [str, setStr] = useState("");
  const [arr, setArr] = useState([])

  return (
    <HomeContext.Provider value={{arr,setArr,str,setStr}}>
      <div className="home">
        <AddForm />
        <Finished />
        <NotFinshed />
        {/* <Add />
        <Mobx /> */}
      </div>
    </HomeContext.Provider>
  );
}
