import { useEffect, useState } from "react"

const useOnlineStatus =()=>{
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {

      const handleOnline=() => {
        setOnlineStatus(true);
      }
      const handleOffline= () => {
        setOnlineStatus(false);
      }

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline",handleOffline);

      // CleanUp fn
      return (()=>{
        window.removeEventListener("online",handleOnline)
        window.removeEventListener("offline",handleOffline)
      })
     
    }, []);
    return onlineStatus // returns a boolean value
}

export default useOnlineStatus