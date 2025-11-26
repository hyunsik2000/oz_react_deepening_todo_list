import { useState } from "react";
import ButtonList from "./ButtonList";
import SearchSection from "./SearchBar";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const [filter, setFilter] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state);

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "checked") return todo.checked === true;
      if (filter === "unchecked") return todo.checked === false;
      return true;
    })
    .filter((todo) =>
      todo.content.toLowerCase().includes(inputValue.toLowerCase())
    );

  return (
    <main className="flex justify-center items-center h-[calc(100vh-120px)] bg-[#f0f0f0]">
      <section
        className="flex flex-col bg-white w-[748px] h-[600px] p-[10px_20px] rounded-lg [border-top:8px_solid_#c8d3fd]
"
      >
        <SearchSection inputValue={inputValue} setInputValue={setInputValue} />
        <ButtonList
          filter={filter}
          setFilter={setFilter}
          setInputValue={setInputValue}
        />
        <article className="mt-8">
          {filteredTodos.map((filteredTodo) => (
            <TodoItem
              key={filteredTodo.id}
              id={filteredTodo.id}
              content={filteredTodo.content}
            />
          ))}
        </article>
      </section>
    </main>
  );
}
