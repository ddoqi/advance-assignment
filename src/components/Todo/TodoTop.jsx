import React, { useState, useEffect } from "react";
import CommonButton from "../common/CommonButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { __getTodos, __postTodos } from "../../redux/modules/todos";
import TodoBottom from "./TodoBottom";
const TodoTop = () => {
  const [typingNewTodo, setTypingNewTodo] = useState("");
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const todoList = todoState.todos.filter((item) => !item.isDone);
  const doneList = todoState.todos.filter((item) => item.isDone);

  const newTodo = {
    id: Date.now(),
    title: typingNewTodo,
    isDone: false,
  };

  const changeNewTodo = (event) => {
    setTypingNewTodo(event.target.value);
  };

  const addNewTodo = () => {
    console.log("addNewTodo실행");
    dispatch(__postTodos(newTodo));
  };

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <h3>나만의 투두리스트 작성</h3>
        <input
          type="text"
          placeholder="todo를 입력하세요"
          onChange={changeNewTodo}
        />

        <CommonButton>투두 추가</CommonButton>
        <h3>newTodo:{typingNewTodo}</h3>
      </form>
      <TodoBottom todoItems={todoList}>❤️진행중❤️</TodoBottom>
      <TodoBottom todoItems={doneList}>❤️완료❤️</TodoBottom>
    </div>
  );
};

export default TodoTop;
