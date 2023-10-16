
// Design a React application that features multiple levels of nested routes. Create a sidebar navigation menu with the following nested structure:

// "/dashboard": Display a Dashboard component.
// "/dashboard/users": Display a Users component with nested routes:
// "/dashboard/users/:userId": Display details of a specific user.
// "/dashboard/users/:userId/posts": Display posts related to the selected user.
// "/dashboard/settings": Display a Settings component.

// Implement the necessary components and navigation menu to support this multiple level nested route structure.
import React from 'react'

const Deshbord = () => {
  return (
    <div className="content">
      Dashboard
    </div>
  )
}

export default Deshbord
