

export const addTodoAction = (operatorInfo) => {
  return { type: "addnewoperator", payload: operatorInfo };
};

export const removeTodoAction = (operator_id) => {
  return {
    type: "removeoperator",
    payload: operator_id,
  };
};



export const fetchAllTodo = (data) => {
  return { 
    type: "todos/fetchalltodo", 
    payload: data 
  };
};
