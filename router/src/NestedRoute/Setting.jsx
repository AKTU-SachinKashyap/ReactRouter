
import * as React from 'react';
import {Link, Outlet} from 'react-router-dom';


const Setting = () => {
  return (
    <div className="content-wrap">
      <h4>Check Your Setting</h4>
      <div className="product-nav mb-5">
        <Link  className="navbar-brand" to="/settting/user/user1"
        >Check User1 data</Link>

        <Link  className="navbar-brand" to="/setting/user/user2"
        >Check User2 data</Link>
        
      </div>
      <Outlet/>
    </div>
  )
}

export default Setting
