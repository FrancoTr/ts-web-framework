import { User } from "./models/User";

const user = User.buildUser({ id: 5 });

user.on("change", () => {
  console.log("new user: ", user);
});

user.fetch();
