export const ValidateCredentials = (email, password) => {
  const emailStatus = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordStatus =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailStatus || !passwordStatus) {
    return "Email or Password is wrong.";
  }

  return null;
};
