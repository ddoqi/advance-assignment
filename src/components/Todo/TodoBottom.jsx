import React from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";

const TodoBottom = ({ children, todoItems }) => {
  return (
    <div>
      <h3>{children}</h3>
      <TodoListContainer>
        {todoItems &&
          todoItems.map((item) => (
            <TodoCard
              title={item.title}
              isDone={item.isDone}
              id={item.id}
              key={item.id}
            />
          ))}
      </TodoListContainer>
    </div>
  );
};

export default TodoBottom;

const TodoListContainer = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  width: 500px;
`;
