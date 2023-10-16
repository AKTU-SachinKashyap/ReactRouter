import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Nested routeting
// import Dashboard from './NestedRoute/Dashboard'
// import Nestroute from './NestedRoute/Nestroute';
// import Setting from './NestedRoute/Setting';
// import User from './NestedRoute/User';
// import User1 from './NestedRoute/User1';
// import User2 from './NestedRoute/User2';



// import User from './Interview/Route/User';
// import Userid from './Interview/Route/Userid'
// import Posts from './Interview/Route/Posts'
// import Setting from './Interview/Route/Setting'
// import Dashborad from './Interview/Route/Dashboard';

// import Main from './Interview/Main';



// import {Route, Switch} from "react-router-dom";

// import Main from './Groupassingment/Main';
// import Contact from './Groupassingment/Contact';
// import About from './Groupassingment/About';
// import Addcart from './Groupassingment/Addcart';


import User from './PracticeRouter/User'
import Dashbord from './PracticeRouter/Home';
import Setting from './PracticeRouter/Devlopar'
import Uesr6 from './PracticeRouter/Uesr6';
import User5 from './PracticeRouter/Contact_us';




// import About from './component/About';
// import Contact from './component/Contact';
// import Home from './component/Home';
// import Error from './component/Error'


// Private route
// import Privateroute from './component/Privateroute';
// import Dashbord from './component/Dashbord';
// import Privateroute from './component/Privateroute';
// import Login from './component/Login';


// Dynamic
// import User from './component/User';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
function App() {
//   // Dynamic
//   let users=[
//     {name: 'sachin', id:1},
//     {name: 'peter', id:2},
//     {name: 'bruce', id:3},
//     {name: 'tony', id:4},
//   ]



  return (
    <div className="content-wrap">
     {/* <BrowserRouter> */}
    {/* <nav>
          <Link className="navbar-brand" to="dashboard">
            Dashboard  
          </Link>
          <Link className="navbar-brand" to=" setting">
            Setting
          </Link>
        </nav>

        {/* Routes Definition */}
    {/* //     <Routes>
    //       {/* Parent Navigation Routes */}
    {/* //       <Route path="/" element={<Dashboard />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/setting" element={<Setting />}>
    //         {/* 2nd Level Navigation Routes */}
    {/* //         <Route path="/setting" element={<Nestroute />} />
    //         <Route path="nestroute" element={<Nestroute />} />
    //         <Route path="user" element={<User />}>
    //           {/* 3rd Level Navigation Routes */}
    {/* //           <Route   */}
    {/* //             path="/setting/user"
    //             element={<User1 />}
    //           />
    //           <Route path="user1" element={<User1 />} />
    //           <Route path="user2" element={<User2 />} />
    //         </Route> */}
    {/* //       </Route>
    //     </Routes> */}

     
     {/* </BrowserRouter> */}




      <BrowserRouter>
    <Routes>
          {/* <Route path='/' element={<Home></Home>}>    </Route> */}
          {/* <Route path='LoggIn' element={<Login></Login>}></Route> */}
            {/* <Route path='about' element={<About></About>}></Route>
            <Route index element={<Home></Home>}></Route>
            <Route path='contact' element={<Contact></Contact>}></Route> */}
            {/* <Route path='*' element={<Error/>}></Route> */}
            

            {/* <Route index element={<Dashborad></Dashborad>}></Route>
            <Route path='/user' element={<User></User>}></Route>
            <Route path='/userid' element={<Userid></Userid>}></Route>
            <Route path='/posts' element={<Posts></Posts>}></Route>
            <Route path='/setting' element={<Setting></Setting>}></Route>
      */}
          
            {/* <Route index element={<Main></Main>}></Route>
            <Route  path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/Add cart" element={<Addcart></Addcart>}></Route> */}

           
          <Route index element={<User></User>}></Route>
          <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
          <Route path='/setting' element={<Setting></Setting>}></Route>
          <Route path='/user5' element={<User5></User5>}></Route>
          <Route path='/user6' element={<Uesr6></Uesr6>}></Route>



          {/* Privateroute */}
          {/* <Route path="/user" element={<Privateroute></Privateroute>}>
          <Route path="dashbord" element={<Dashbord></Dashbord>}></Route>
          </Route> */}

        </Routes> 
       </BrowserRouter>


      {/* <Router>
      <h1>React Dynamic Routing</h1>
      {
        users.map((item)=>
        <div><Link to={"/user/"+item.id}><h2>{item.name}</h2></Link></div>)
      }
      <Route path="/user/:id"><User/></Route>
      </Router> */}


      {/* <main>
      <Switch>  
        <Route path='/' Component={User} exact/>
        <Route path='/dashbord' Component={Dashbord} />
        <Route path='/setting' Component={Setting} />
        <Route path='/user5' Component={User5} />
        <Route path='/user6' Component={Uesr6} />
      </Switch>

      </main> */}
      


     
      {/* <Main></Main> */}


    </div>
  );
}
export default App;
