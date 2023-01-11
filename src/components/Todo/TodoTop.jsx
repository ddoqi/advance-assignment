import React from "react";
import CommonButton from "../common/CommonButton";
import TodoBottom from "./TodoBottom";
import { useTodo } from "../../hooks/useTodo";

const TodoTop = () => {
  const { typingNewTodo, todoList, doneList, changeNewTodo, addNewTodo } =
    useTodo({ initialInputValue: "나는 인풋에 들어갈애야 ㅎㅅㅎ" });

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <h3>나만의 투두리스트 작성</h3>
        <input
          type="text"
          placeholder="todo를 입력하세요"
          value={typingNewTodo}
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
