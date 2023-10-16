import React from "react"
import { NavLink } from "react-router-dom"




export default function Home(){
    return(
        <>
            <header>
                <h1>i am from Home</h1>
                <a href="#">Logo</a>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
