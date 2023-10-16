import { NavLink } from "react-router-dom";


export default function Error(){
    return(
        <>
            <h1>sorry for that this is 404 Error</h1>
            <p>sorry, this page doesn't exist</p>
            <NavLink to ="/" >Go Back</NavLink>
        </>
    )
}