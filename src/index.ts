import { User } from "./models/User";

const user = new User({ name: "nametest123", age: 77 });

user.set({ name: "newnametest" });
console.log(user.get("name"));
console.log(user.get("age"));
