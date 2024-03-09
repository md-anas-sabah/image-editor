const users = [
  { id: 1, email: "mdanassabah@gmail.com", password: "anassabah" },
  { id: 2, email: "mokeydluffy@gmail.com", password: "luffy" },
];

export const login = (email, password) => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const isLoggedIn = () => {
  return localStorage.getItem("user") !== null;
};
