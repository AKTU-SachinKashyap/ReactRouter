import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import {isLoggedIn} from './Protected';


const Privateroute =() =>{
    // return isLoggedIn() ? <Outlet/> : <Navigate to={"/Login"}/>



    let loggedIn=true;
    if(loggedIn){
        return <Outlet/>
    }else{
        return <Navigate to={"/login"}/>;
    }

//   return (
//     <>
//     <div>
//       this is Privateroute
//     <Outlet />

//     </div>
//     </>
//   )
}

export default Privateroute;
