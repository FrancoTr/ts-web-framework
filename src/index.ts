import { User } from "./models/User";

const user = new User({ id: 1, name: "newer name", age: 0 });

user.on("change", () => {
  console.log("new user: ", user);
});

user.save();
