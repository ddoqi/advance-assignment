import React from "react";
import { useDispatch } from "react-redux";
import { __deleteTodos, __toggleTodo } from "../../redux/modules/todos";
import CommonButton from "../common/CommonButton";

const TodoCard = ({ title, isDone, id }) => {
  const dispatch = useDispatch();
  const deleteAction = () => {
    console.log("삭제버튼 클릭!");
    dispatch(__deleteTodos(id));
  };

  const toggleAction = () => {
    console.log("토글버튼 클릭!");
    dispatch(__toggleTodo({ id, isDone }));
  };

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <CommonButton
          onClick={() => {
            toggleAction();
          }}
        >
          {isDone ? "진행중" : "완료"}
        </CommonButton>
        <CommonButton
          onClick={() => {
            deleteAction();
          }}
        >
          삭제
        </CommonButton>
      </div>
    </div>
  );
};

export default TodoCard;
