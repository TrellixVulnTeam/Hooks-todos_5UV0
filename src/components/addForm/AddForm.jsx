import React, { useState, useContext } from "react";

import Home, { HomeContext } from "../../containers/home/Home";

// export default class AddForm extends Component {
//     addForm=(e)=>{
//         if(e.keyCode===13){
//             const unFinished=e.target.value
//             console.log(unFinished)
//             e.target.value=''
//         }
//     }
//     render() {
//         const {}
//         return (
//             <div className='addform'>
//                 <p>所有</p>
//                <input type="text" placeholder="创建新任务" onKeyDown={this.addForm} />
//             </div>
//         )
//     }
// }

export default function AddForm() {
 
  const { str, setStr, arr, setArr } = useContext(HomeContext);

  const addStr = (e) => {
    //   按下回车键获取当前数据,并更新到str中
    if (e.keyCode === 13) {
    //   const addText = e.target.value;
      // setStr(e.target.value);
    //   添加到数组中,并清空输入框
    const obj={value:e.target.value,finished:false,id:new Date().getTime()}
      setArr([...arr,obj])
      // setStr("")
      console.log('arr',[...arr,obj])
    }
  };

  return (
    <div className="addform">
      <p>所有</p>
      <input type="text" placeholder="创建新任务"  onKeyDown={addStr} />
      {/* <p>{str}</p> */}
      
    </div>
  );
}
