import { users } from "./usersModel.js";

export const getAll = function () {
  return users;
};

// export const getById = function (userId) {
//   if (userId in users) return users[userId];

//   return null;
// };

// export const add = function (username) {
//   const userId = getUserKey(users);

//   users[userId] = {
//     username: username,
//     stats: {
//       wins: 0,
//       bestScore: 0,
//       archive: [],
//     },
//   };

//   return users[userId];
// };

// export const deleteById = function (userId) {
//   if (!(userId in users)) return null;

//   const user = users[userId];

//   delete users[userId];

//   return user;
// };
