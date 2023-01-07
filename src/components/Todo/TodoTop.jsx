import React from "react";
import CommonButton from "../common/CommonButton";

const TodoTop = () => {
  return (
    <form>
      <h3>나만의 투두리스트 작성</h3>
      <input type="text" placeholder="todo를 입력하세요" />
      <CommonButton title={"버튼이지롱"} />
    </form>
  );
};

export default TodoTop;
