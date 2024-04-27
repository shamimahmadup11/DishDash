import { useEffect, useState } from "react"


const useOnline = () => {
   const [isOnline, setOnline]=useState();
   
   useEffect(()=>{
    function handleOnline(){
        setOnline(true)
    }
    function handleOfline(){
        setOnline(false)
    }
     window.addEventListener("online", handleOnline);
     window.addEventListener("Offline", handleOfline);
      
     return ()=>{
        window.removeEventListener("online", handleOnline);
     window.removeEventListener("online", handleOfline);
     }


    } , [])
   return isOnline;

}

export default useOnline
