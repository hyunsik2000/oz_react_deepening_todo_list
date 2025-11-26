import { todos } from "../data/todo";
import { legacy_createStore } from "redux";
import { loadLocalTodos, saveLocalTodos } from "../utils/localStorage";

const localTodos = loadLocalTodos() || todos;

export const editTodo = (id, content) => {
  return {
    type: "editTodo",
    payload: { id, content },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "deleteTodo",
    payload: { id },
  };
};

export const toggleTodo = (id) => {
  return {
    type: "toggleTodo",
    payload: { id },
  };
};

export const resetTodo = () => {
  return {
    type: "resetTodo",
  };
};

const todoReducer = (state = localTodos, action) => {
  switch (action.type) {
    case "editTodo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, content: action.payload.content }
          : todo
      );
    case "deleteTodo":
      return state.filter((el) => action.payload.id !== el.id);
    case "toggleTodo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, checked: !todo.checked }
          : todo
      );
    case "resetTodo":
      return todos;
    default:
      return state;
  }
};

export const store = legacy_createStore(todoReducer);

store.subscribe(() => {
  saveLocalTodos(store.getState());
});
