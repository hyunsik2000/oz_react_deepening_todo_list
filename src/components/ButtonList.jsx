import { useDispatch } from "react-redux";
import { resetTodo } from "../store/store";
import { clearLocalTodos } from "../utils/localStorage";

export default function ButtonList({ filter, setFilter, setInputValue }) {
  const dispatch = useDispatch();

  const onResetTodos = () => {
    dispatch(resetTodo());
    clearLocalTodos(); // 로컬도 비우기
    setInputValue("");
  };

  return (
    <ul className="flex gap-2 text-[14px] [&>li]:flex [&>li]:cursor-pointer [&>li]:justify-center [&>li]:items-center [&>li]:w-23 [&>li]:h-6 [&>li]:text-white [&>li]:rounded-lg [&>li]:mt-1.5">
      <li
        className={`bg-[#6462fc] hover:bg-[#b6b5fa] ${
          filter === "checked" ? "opacity-100" : "opacity-60"
        }`}
        onClick={() => setFilter("checked")}
      >
        Checked
      </li>
      <li
        className={`bg-[#76716c] hover:bg-[#b38f6d] ${
          filter === "unchecked" ? "opacity-100" : "opacity-60"
        }`}
        onClick={() => setFilter("unchecked")}
      >
        UnChecked
      </li>
      <li
        className={`bg-[#e54559] hover:bg-[#f5a2ab] ${
          filter === "all" ? "opacity-100" : "opacity-60"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </li>
      <li className=" bg-[#ff5252] hover:bg-[#ff7777]" onClick={onResetTodos}>
        Reset All
      </li>
    </ul>
  );
}
