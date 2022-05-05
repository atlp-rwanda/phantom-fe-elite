
// // fake data which symbols the actual data which could come from database.
// export const fakeDataArr = [
//   {
//     name: "vicky",
//     email: "vicky@gmail.com",
//     route: "downtown",
//   },
//   {
//     name: "willy",
//     email: "willy@gmail.com",
//     route: "kanombe",
//   },
//   {
//     name: "william",
//     email: "william@gmail.com",
//     route: "kimironko",
//   },
//   {
//     name: "winskonsin",
//     email: "winskonsin@gmail.com",
//     route: "remera",
//   },
//   {
//     name: "carlos",
//     email: "calros@gmail.com",
//     route: "kinyinya",
//   },
//   {
//     name: "juno",
//     email: "juno@gmail.com",
//     route: "kagugu",
//   },
//   {
//     name: "wilson",
//     email: "wilson@gmail.com",
//     route: "kacyiru",
//   },
//   {
//     name: "ntorano",
//     email: "ntorano@gmail.com",
//     route: "kimironko",
//   },
//   {
//     name: "maximillian",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "max",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "jannet",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "bosco",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "karabo",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "flower",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "going",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "luck",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "rene",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "ruigi",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "jamesbond",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "donath",
//     email: "james@gmail.com",
//     route: "kinamba",
//   },
//   {
//     name: "eric",
//     email: "eric@gmail.com",
//     route: "rwandex",
//   },
//   {
//     name: "honani",
//     email: "honani@gmail.com",
//     route: "gatsata",
//   },
//   {
//     name: "john",
//     email: "john@gmail.com",
//     route: "kanombe",
//   },
//   {
//     name: "jacob",
//     email: "jacob@gmail.com",
//     route: "masaka",
//   },
//   {
//     name: "jane",
//     email: "jane@gmail.com",
//     route: "KBS",
//   },
// ];

// // a function below is mimicing the bahaviour of the database. It is a promise which always return fakeDataArr for 
// // the resolved promise. and it should return error message for rejected promise.
// const giveMeData = (second) => {
//     return new Promise((resolve, reject) => {
//       // just as requeting some data from database takes time, this is simulated here by this settimeout function
//       // which trigger resolve or reject after delay =  10s to make it asyncronous.
//       let delay = second * 1000;
//       let errorMessage = "Something went wrong while fetching data";
//       setTimeout(() => {
//         // as this function always returns false. i am always getting resolved promise
//         if (delay > 4000) {
//           reject(Error(errorMessage));
//         } else {
//           resolve(fakeDataArr);
//         }
//       }, delay);
//     });
// }

// export default giveMeData; 