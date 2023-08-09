export const getUserKey = function (users) {
  return Object.values(users).length + 1;
};

export const findUserIdbyUsername = function (users, targetUsername) {
  for (let key in users) {
    const { username } = users[key];

    if (username === targetUsername) return key;
  }

  return null;
};
