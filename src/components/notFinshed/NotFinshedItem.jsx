import React, { useContext } from "react";

import { HomeContext } from "../../containers/home/Home";

// export default class notFinshedItem extends Component {
//     render() {
//         return (
//             <div className='notFinshedItem'>
//                 not
//                 <div className="lineThrow"></div>
//             </div>
//         )
//     }
// }
export default function NotFinshedItem(props) {
  const { str, setStr, arr, setArr } = useContext(HomeContext);
  console.log(props);
  const {value,id ,finished}=props.i

  return (
    <div className="notFinshedItem">
      {
        finished?<input type="checkbox" checked />:<input type="checkbox" />
      }
      {value}
      <button className="delete">删除</button>
      <div className="lineThrow"></div>
    </div>
  );
}
