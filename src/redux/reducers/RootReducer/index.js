const initialState = {
  users: [
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/fetchalltodo":
      return {
        ...state,
        users: action.payload
      };
    case "addnewoperator":
      return {
        users: [
          ...state.users,
          {
            name: action.payload.name,
            email: action.payload.email,
            route: action.payload.route,
            id: state.users.length + 1,
          },
        ],
      };
    case "removeoperator": {
      //   let usersCopy = [...state.users];
      return {
        users: state.users.filter((item) => item.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
};

export default todoReducer
