import React, { useEffect } from "react"
import { useState } from "react"

const Profile=(props)=>{
    const [count,setCount] = useState(0)
    const [count2,setCount2]=useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        console.log("Namaste React");
      }, 1000);
    console.log("useEffect")

    return ()=>{
        clearInterval(timer)
console.log("useEffect return")
    }

    }, []);

console.log("render()")
    return (
        <div>
            <h2>Profile Component</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count:{count}</h3>
            <h3>Count2:{count2}</h3>
            <button onClick={()=>{
                setCount(1)
                setCount2(1)
            }
            }>SetCount</button>
        </div>
    )
}

export default Profile