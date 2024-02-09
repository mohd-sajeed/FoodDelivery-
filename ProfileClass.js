import React from "react"

 class Profile extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       userInfo: {
         name: "sajid",
         location: "hyderabad",
       },
     };
    //  console.log("Child-constructor");
   }

    componentDidMount() {
   this.timer= setInterval(() => {
      console.log("Namaste React")
    }, 1000);
  //  console.log(" child-componentDidMount")
   }

   componentDidUpdate(prevProp, prevState){
   if(this.state.count !== prevState.count){
//
   }
   if(this.state.count2 !== prevState.count2){
    //
       }
    
   }

   componentWillUnmount(){
    clearInterval(this.timer)
    // console.log("componentWillUnmount")
   }

   render() {
    //  console.log("Child-render()");
     return (
       <div>
         return <h1>Profile class component</h1>
         <img src={this.state.userInfo.avatar_url} alt="" />
         <h2>Name:{this.state.userInfo.name}</h2>
         <h2>location:{this.state.userInfo.location}</h2>
       </div>
     );
   }
 }
      

    export default Profile