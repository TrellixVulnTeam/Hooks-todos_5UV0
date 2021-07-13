import React, { useState, useContext } from "react";

import { observable, computed, action, makeObservable } from "mobx";

// 存放数据的数组列表
class TodoList {
  constructor() {
    makeObservable(this);
  }
  // 存放数据的列表
  @observable todos = [
    // {
    //   isFinished: true,
    //   value: "Todo",
    //   id: 123,
    //   // children: [
    //   //   { isFinished: true, value: "subTodo", id: 123 },
    //   //   { isFinished: false, value: "234", id: 9919 },
    //   // ],
    // },
    // { isFinished: false, value: "234", id: 1111 },
    // { isFinished: true, value: "1234", id: 1213 },
    // { isFinished: false, value: "234", id: 999 },
  ];

  @computed get unfinishedTodo() {
    // const notFinished=[]
    // return notFinished
    return this.todos.filter((todo) => !todo.isFinished);
  }
  @computed get finishedTodo() {
    return this.todos.filter((todo) => todo.isFinished);
  }
  // 获取数组中已完成的数据
  @computed get isFinishedTodo() {
    // 拿到所有的数据   包括拥有子类的对象

    /**
     * 
     * {
      isFinished: true,
      value: "Todo",
      id: 123,
      children: [
        { isFinished: true, value: "subTodo", id: 123 },
        { isFinished: false, value: "234", id: 9919 },
      ],
    },
     */
    // 定义一个新数组用来接收所有完成的对象
    const finishedArr = [];

    const notFinishedArr = [];
    /**
     *  两种情况：  1、没有子类  直接判断状态
     *            2、有子类   两种情况
     *              2.1  子类状态为finished
     *              2.2 子类状态为notfinished
     */
    this.todos.map((todo) => {
      // 没有子类  直接进行数据的判断
      if (!todo.children) {
        if (todo.isFinished) {
          finishedArr.push(todo);
        } else {
          notFinishedArr.push(todo);
        }
      } else {
        // 有子类  判断状态  父类状态为完成  接着对子类进行判断
        // todo.isFinished?this.finishedTodo.push(todo):todo.notFinishedTodo.push(todo)
        // 已完成的父类   判断子类
        if (todo.isFinished) {
          todo.children.map((subTodo) => {
            if (subTodo.isFinished) {
              finishedArr.push(subTodo);
            } else {
              notFinishedArr.push(subTodo);
            }
          });
          todo.children = [];
          finishedArr.push(todo);
        } else {
          todo.children.map((subTodo) => {
            if (subTodo.isFinished) {
              finishedArr.push(subTodo);
            } else {
              notFinishedArr.push(subTodo);
            }
          });
        }
      }
    });
    return { finishedArr, notFinishedArr };
  }
  // 添加新数据到数组中
  @action.bound addTodo(todo) {
    this.todos.push(todo);
    // console.log(this.todos,"this.todos index")
  }
  // 改变数据状态
  @action.bound toggleFinished(todo) {
    todo.isFinished = !todo.isFinished;
    console.log("状态发生改变", todo);
  }

  //   删除当前项
  @action.bound deleteOne(item) {
    const newArr = this.todos.filter((todo) => todo.id !== item.id);
    this.todos = [...newArr];
    console.log(this.todos.length, this.todos, "this.todos index");
  }

  /**
   *
   *    1、将子类添加到父类中
   *    2、更新页面
   *    3、将值赋给子类
   *    4、更新页面
   */
  // 在当前项添加子任务
  @action.bound addSubItem(todo) {
    console.log(todo, "addSubItem");
    // if (!todo.children) {
    //   todo.children = [];
    // }
    // // 创建新子类对象
    // const subTodo = { isFinished: false, value: "", id: new Date().getTime() };
    // const newTodo = todo.children.push(subTodo);
    // console.log(todo, "todo");
  }

  // 输入框内容发生变化
  @action.bound changeValue(todo) {
    // const newValue=e.target.value
    // if(newValue!==todo.value){
    //     todo.value=newValue
    //     console.log(todo)
    // }
    const todos = this.todos;

    console.log(todo, "todo mobx");
  }
}

const todoList = new TodoList();

export default todoList;
