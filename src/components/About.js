
import Profile from "../../ProfileClass"
import FunctionalComponent from "./Profile"
import { Component } from "react"
import UserContext from "../utils/userContext";

// const About = ()=> {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is Namaste React Live Course Chapter-07 Finding the Path</p>
//             <FunctionalComponent  name={"Sajid"} />
//         <Profile name={"Wajid"} firstName="Mohammed"/>
//         </div>
//     )
// }

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent-Constructor");
  }
   componentDidMount() {
    // Best place to Call API
    // console.log("Parent-ComponentDidMount");
  
  }

  

  render() {
    // console.log("Parent-render()");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({user})=><h3 className="p-10 font-bold">{user.name}-{user.email}</h3>}
        </UserContext.Consumer>
        <p>This is Namaste React Live Course Chapter-07 Finding the Path</p>
        <Profile name={"Wajid"} firstName="Mohammed" />
      </div>
    );
  }
}
export default About