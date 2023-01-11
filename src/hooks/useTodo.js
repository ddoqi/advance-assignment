import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  __deleteTodos,
  __getTodos,
  __postTodos,
  __toggleTodo,
} from "../redux/modules/todos";

export const useTodo = ({ initialInputValue, id, isDone }) => {
  const [typingNewTodo, setTypingNewTodo] = useState(initialInputValue);
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

  const deleteAction = () => {
    console.log("삭제버튼 클릭!");
    dispatch(__deleteTodos(id));
  };

  const toggleAction = () => {
    console.log("토글버튼 클릭!");
    dispatch(__toggleTodo({ id, isDone }));
  };

  return {
    typingNewTodo,
    todoList,
    doneList,
    changeNewTodo,
    addNewTodo,
    deleteAction,
    toggleAction,
  };
};
