export const saveLocalTodos = (todos) => {
  //todo에 set하기
  try {
    const setLocalTodos = JSON.stringify(todos);
    localStorage.setItem("todos", setLocalTodos);
  } catch (e) {
    console.error("localStorage에 안담김", e);
  }
};

export const loadLocalTodos = () => {
  // todo에 get 하기
  try {
    const getlocalTodos = localStorage.getItem("todos");
    if (!getlocalTodos) return undefined;
    return JSON.parse(getlocalTodos);
  } catch (e) {
    console.error("localStorage에서 못 불러옴", e);
    return undefined;
  }
};

export const clearLocalTodos = () => {
  // 초기화 용
  localStorage.removeItem("todos");
};
