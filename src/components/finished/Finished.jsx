import React,{useContext} from "react";
import FinishedItem from "./FinishedItem";


import {HomeContext} from '../../containers/home/Home'
// export default class Finished extends Component {
//     render() {
//     //   console.log(obj)
//     // console.log(this.props)
//     const obj=this.props
//     // console.log(obj,"finished")
//         return (
//             <div className="finished">
//             <p>已完成</p>
//             <FinishedItem />
//             </div>
//         )
//     }
// }

export default function Finished() {

  const {arr,setArr} =useContext(HomeContext)
  return (
    <div className="finished">
      <p>已完成</p>
      {
            arr.map((i,index)=> {

                if(i.finished===true){
                    return <FinishedItem  i={i} key={i.id} />
                }
            } )
        }
      
    </div>
  );
}
