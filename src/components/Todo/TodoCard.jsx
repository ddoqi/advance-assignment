import React from "react";
import CommonButton from "../common/CommonButton";
import { useTodo } from "../../hooks/useTodo";

const TodoCard = ({ title, isDone, id }) => {
  const { deleteAction, toggleAction } = useTodo({ id, isDone });

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
