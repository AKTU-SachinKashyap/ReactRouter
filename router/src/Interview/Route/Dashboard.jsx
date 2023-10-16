import React from 'react'
import { NavLink } from 'react-router-dom'


// Design a React application that features multiple levels of nested routes. Create a sidebar navigation menu with the following nested structure:"/dashboard": Display a Dashboard component."/dashboard/users": Display a Users component with nested routes:"/dashboard/users/:userId": Display details of a specific user."/dashboard/users/:userId/posts": Display posts related to the selected user."/dashboard/settings": Display a Settings component.Implement the necessary components and navigation menu to support this multiple level nested route structure.


const Dashborad = () => {
  return (
    <div>

      <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Router
      </a>

      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">UserDashboard</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
                  <li>
                      <NavLink to='/'>Dashborad</NavLink>
                  </li>
                  <li>
                      <NavLink to='/user'>User</NavLink>
                  </li>
                  <li>
                      <NavLink to='/userid'>Userid</NavLink>
                  </li>
                  <li>
                      <NavLink to='/Posts'>Posts</NavLink>
                  </li>
                  <li>
                      <NavLink to='/setting'>Setting</NavLink>
                  </li>
            </ul>
          </div>
        </div>
      </div>





{/* <div className="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDarkLabel" aria-labelledby="offcanvasDarkLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvasDark-title" id="offcanvasLabel">Router</h5>
    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
        <ul>
            <li>
                <NavLink to='/'>Dashborad</NavLink>
            </li>
            <li>
                <NavLink to='/user'>User</NavLink>
            </li>
            <li>
                <NavLink to='/userid'>Userid</NavLink>
            </li>
            <li>
                <NavLink to='/Posts'>Posts</NavLink>
            </li>
            <li>
                <NavLink to='/setting'>Setting</NavLink>
            </li>
        </ul>
  </div>
</div> */}
    </div>
  )
}

export default Dashborad
