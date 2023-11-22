import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "NAME1", age: 30 });

const rootElement = document.getElementById("root") as HTMLElement;
const userForm = new UserForm(rootElement, user);

userForm.render();
