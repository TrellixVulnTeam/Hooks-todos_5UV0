import { observer } from "mobx-react";
import React, { } from "react";

const AddForm = observer((props) => {
  const { todos, addTodo } = props.store;
  // const [arr, setArr] = useState(todos);
  const addStr = (e) => {
    //   按下回车键获取当前数据
    if (e.keyCode === 13) {
      // 获取输入框的值
      const value = e.target.value;
      e.target.value = "";
      //  添加到数组中

      // const todo=new Todo()
      const todo = {isFinished:false,value:value,id:new Date().getTime()};
      addTodo(todo);
      console.log(todo, "todo");
      console.log(todos.length, "todos length ");
    }
  };
  return (
    <div className="addform">
      <p>所有</p>
      <input type="text" placeholder="创建新任务" onKeyDown={addStr} />
    </div>
  );
});

export default AddForm;
