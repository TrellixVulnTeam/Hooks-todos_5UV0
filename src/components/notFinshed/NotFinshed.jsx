import React, { useContext } from 'react'
import NotFinshedItem from './NotFinshedItem'

import {HomeContext} from '../../containers/home/Home'

// export default class NotFinshed extends Component {
//     render() {
//         const {obj}=this.props
//         // console.log(obj,"notfinshed")
//         return (
//             <div className="notfinished">
//                 <p>未完成</p>
//                 <NotFinshedItem/>
//             </div>
//         )
//     }
// }
export default function NotFinshed(){

    const {arr,setArr} =useContext(HomeContext)
return(
    <div className="notfinished">
        <p>未完成</p>
        {
            arr.map((i,index)=> {

                if(i.finished===false){
                    return <NotFinshedItem  i={i} key={i.id} />
                }
            } )
        }
    </div>
)
}