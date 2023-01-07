import React from "react";
import styled from "styled-components";
import CommonCard from "../common/CommonCard";

const TodoBottom = () => {
  return (
    <div>
      <h3>Todo List</h3>
      <TodoListContainer>
        <CommonCard />
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
