import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + 'Child Constructor');
  }

  async componentDidMount() {
    // console.log(this.props.name + 'Child Component Did Mount');
    // * API call
    const data = await fetch("https://api.github.com/users/mohd-Sajeed");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProp, prevState) {
    // console.log('Component Did Update');

    if (this.state.count !== prevState.count) {
      //
    }
    if (this.state.count2 !== prevState.count2) {
      //
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log('Component Will Unmount');
  }

  render() {
    // const { name, location } = this.props;
    // const { count } = this.state;

    // console.log(this.props.name + 'Child Render');
    const { name, location, avatar_ul } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <img src={this.state.userInfo.avatar_url} alt="" /> */}
        {/* accessing the state variable */}
        {/* <h1>Count: {this.state.count</h1> */}
        {/* <h1>Count:{count</h1> */}
        {/* <button onClick={()=>{
        // * NEVER UPDATE STATE VARIABLES DIRECTLY
        // this.state.count=this.state.count + 1

        // * USE setState() method instead 

        this.setState({
          count:this.state.count + 1
        })
       }}>
          Count Increase
       </button> */}
        {/* <h2>Name:{this.state.userInfo.name}</h2> */}
        <h2>Name:{name}</h2>
        {/* <h2>location:{this.state.userInfo.location}</h2> */}
        <h2>Location:{location}</h2>
      </div>
    );
  }
}

export default UserClass;

/* ****************************************************************
 *
 *
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */
