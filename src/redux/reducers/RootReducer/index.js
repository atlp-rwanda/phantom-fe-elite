// const initialState = {
//   operators: [
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

// const operatorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "admin/addnewoperator":
//       return {
//         operators: [
//           ...state.operators,
//           {
//             name: action.payload.name,
//             email: action.payload.email,
//             route: action.payload.route,
//             id: state.users.length + 1,
//           },
//         ],
//       };
//     case "admin/removetodo": {
//       return {
//         usoperators: state.operators.filter(
//           (item) => item.id !== action.payload
//         ),
//       };
//     }
//     default: {
//         return state;
//     }
//   }
// };

// export default operatorReducer;
