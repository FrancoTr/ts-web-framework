import { User } from "./models/User";

const user = new User({ id: 1 });

user.on("change", () => {
  console.log("test change");
});

user.trigger("change");
user.set({ name: "New name" });
