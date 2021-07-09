import React, { useContext, useState } from "react";

import { HomeContext } from "../../containers/home/Home";
// export default class finishedItem extends Component {
//   deleteOne = () => {
//     // const {obj,index}=this.props
//     // obj.splice(index,1)
//   };
//   render() {
//     //   const {item}=this.props
//     //   console.log(item,index)
//     //   console.log(this.props)
//     return (
//       <div className="finishedItem">
//         <input type="checkbox"/>
//         {/* {item.text} */}123
//         <div className="action" onClick={() => this.deleteOne()}>
//           ...
//         </div>
//         <div className="lineThrow"></div>
//       </div>
//     );
//   }
// }
export default function NotFinshedItem(props) {
  const { str, setStr, arr, setArr } = useContext(HomeContext);
  const { value, id, finished } = props.i;
  console.log(value, id, finished);
  const deleteOne=(id)=>{
    // arr.filter(i.id===id)
  }
  return (
    <div className="finishedItem">
      {finished ? <input type="checkbox" checked /> : <input type="checkbox" />}
      {value}
      <button className="delete" onClick={deleteOne(id)}>删除</button>
      <div className="lineThrow"></div>
    </div>
  );
}
