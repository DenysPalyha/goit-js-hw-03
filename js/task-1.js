const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const value = Object.keys(user);
for (const values of value) {
  console.log(values + ": " + user[values]);
}
