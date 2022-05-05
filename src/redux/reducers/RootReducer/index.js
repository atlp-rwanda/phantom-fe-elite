// const initialState = {
//   users: [
//     {
//       name: "vicky",
//       email: "vicky@gmail.com",
//       route: "downtown",
//       id: 1,
//     },
//     {
//       name: "willy",
//       email: "willy@gmail.com",
//       route: "kanombe",
//       id: 2,
//     },
//   ],
// };

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "todos/addnewtodo":
//       return {
//         users: [
//           ...state.users,
//           {
//             name: action.payload.name,
//             email: action.payload.email,
//             route: action.payload.route,
//             id: state.users.length + 1,
//           },
//         ],
//       };
//     case "todos/removetodo": {
//     //   let usersCopy = [...state.users];
//       return {
//         users: state.users.filter((item) => item.id !== action.payload),
//       };
//     }

//     default: {
//         return state;
//     }
//   }
// };

// export default todoReducer
