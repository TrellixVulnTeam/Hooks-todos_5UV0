import React, { Component } from 'react'

import {observable,action,makeObservable} from 'mobx'
import {observer} from 'mobx-react'

class MyState{
    constructor(){
        makeObservable(this)
    }
    @observable num=0

    
      @action.bound addNum = () => {
        this.num++;
        console.log('num',this.num)
      };
}

const newState=new MyState()


@observer
class Mobx extends Component{
    render(){
        return(
            <div>
                <h1>Mobx</h1>
                <p>{newState.num}</p>
                <p>
                    <button onClick={newState.addNum} >Increment</button>
                </p>
            </div>
        )
    }
}
export default Mobx;