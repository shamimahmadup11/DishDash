// import { useEffect, useState } from "react"


// const useOnline = () => {
//    const [isOnline, setOnline]=useState();
   
//    useEffect(()=>{
//     function handleOnline(){
//         setOnline(true)
//     }
//     function handleOfline(){
//         setOnline(false)
//     }
//      window.addEventListener("online", handleOnline);
//      window.addEventListener("Offline", handleOfline);
      
//      return ()=>{
//         window.removeEventListener("online", handleOnline);
//      window.removeEventListener("online", handleOfline);
//      }


//     } , [])
//    return isOnline;

// }

// export default useOnline


import { useState, useEffect } from 'react';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;

