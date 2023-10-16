import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className="content-wrap">
      <h1>This Is Users</h1>
      <div className="product-nav mb-5">
        <Link  className="navbar-brand" to="/setting/user/user1"> User1</Link>

        <Link className="navbar-brand" to="/setting/user/user2">User2</Link>
      </div>
    </div>
  )
}

export default User
