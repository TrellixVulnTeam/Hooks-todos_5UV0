import React, { Component ,useEffect} from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { observable, computed, action } from "mobx";

function TodoListView(){
    useEffect(() => {
        console.log("数据发生变化");
    }, [todoList.todos])
    console.log("数据发生改变 TodoListView");
    return (
      <div>
        <ul>
          {todoList.todos.map((todo) => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {todoList.unfinishedTodoCount}
      </div>
    );
}
class TodoList {
  @observable todos = [
    { isFinished: true, value: "1234", id: 123 },
    { isFinished: false, value: "234", id: 9919 },
    { isFinished: true, value: "1234", id: 1213 },
    { isFinished: false, value: "234", id: 999 },
  ];
  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.isFinished).length;
  }

  @action.bound toggleFinished(todo) {
    todo.isFinished = !todo.isFinished;
    console.log("状态发生改变", todo);
  }
}
const todoList = new TodoList();
console.log(todoList.unfinishedTodoCount, "todoList.unfinishedTodoCount");
const TodoView = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.isFinished}
      onChange={() => todoList.toggleFinished(todo)}
    />
    {todo.value}
  </li>
));

const store = new TodoList();
// ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('mount'));
ReactDOM.render(
  <React.StrictMode>
    <TodoListView todoList={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
