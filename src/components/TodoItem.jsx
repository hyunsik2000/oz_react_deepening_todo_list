import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../store/store";
import { useState } from "react";

export function TodoItem({ id, content }) {
  const dispatch = useDispatch();
  const checked = useSelector((state) => {
    const target = state.find((todo) => id === todo.id);
    return target?.checked;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSave = (newContent) => {
    dispatch(editTodo(id, newContent));
    setIsModalOpen(false);
  };

  const bgColor = checked ? "bg-[#d0d0d0]" : "bg-[#f3f3f3]";

  return (
    <>
      <article
        className={`w-full h-10 ${bgColor} p-[10px_15px] flex items-center justify-between rounded-md mb-1`}
      >
        <div className="flex w-full items-center gap-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => dispatch(toggleTodo(id))}
          />
          <span className="truncate flex-1">{content}</span>
          <div className="flex gap-2">
            <button
              className="w-7.5 h-7.5 text-[gray] cursor-pointer hover:text-black"
              type="submit"
              onClick={() => setIsModalOpen(true)}
            >
              수정
            </button>
            <button
              className="w-7.5 h-7.5 text-[gray] cursor-pointer hover:text-black"
              type="submit"
              onClick={() => dispatch(deleteTodo(id))}
            >
              삭제
            </button>
          </div>
        </div>
      </article>
      <EditModal
        isOpen={isModalOpen}
        content={content}
        onClose={() => setIsModalOpen(false)}
        onSave={onSave}
      />
    </>
  );
}

export function EditModal({ isOpen, content, onClose, onSave }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex justify-center items-center">
      <div className="flex flex-col  gap-4 bg-white p-6 rounded-lg w-150 h-100">
        <div className="flex justify-between h-7 ">
          <h2 className="text-lg font-bold mb-4">일정 수정</h2>
          <div
            className="flex justify-center w-7 items-center text-2xl rounded cursor-pointer"
            onClick={onClose}
          >
            x
          </div>
        </div>
        <textarea
          defaultValue={content}
          id="edit-input"
          className="w-full h-80 border-2 p-2 rounded resize-none"
        />

        <button
          className="w-full  py-1 bg-black text-white text-xl"
          onClick={() => {
            const value = document.getElementById("edit-input").value;
            onSave(value);
          }}
        >
          저장
        </button>
      </div>
    </div>
  );
}
