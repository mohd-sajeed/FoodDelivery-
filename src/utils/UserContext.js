import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

UserContext.displayName="UserContext"

export default UserContext