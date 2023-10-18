import { User } from "./models/User";

const user = new User({ name: "nametest123", age: 77 });

user.on("testEvent", () => {
  console.log("callback test - on() method");
});
