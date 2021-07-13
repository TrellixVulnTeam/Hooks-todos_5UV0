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
  const { value, id, finished } = props.i;
  const deleteOne = (id) => {
    console.log(id);
    const newArr = arr.map((i, index) =>
      i.id === id ? arr.splice(index, 1) : null
    );
    setArr(newArr);
    console.log(arr,'notFinished')
  };
  return (
    <div className="notFinshedItem">
      {finished ? null : <input type="checkbox" />}
      {value}
      <button className="delete" onClick={() => deleteOne(id)}>
        删除
      </button>
      <div className="lineThrow"></div>
    </div>
  );
}
