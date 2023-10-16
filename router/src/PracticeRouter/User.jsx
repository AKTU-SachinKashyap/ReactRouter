import React,{useState,useEffect} from 'react'
import './User.css'
import {Container, Button} from '@material-ui/core'

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import image1 from './img/Screenshot (4).png'
import image2 from  './img/Screenshot (5).png'
import  image3 from './img/Screenshot (6).png'






const useStyles = makeStyles((theme) => ({
  
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },

 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "2px solid whitesmoke",
    },
  },
}));







function Navbar() {
  const classes = useStyles();

      const [selectImage, setSelectedImage]=useState(0);
      const [allImages, setAllImages]=useState([image1,image2,image3])
    
      useEffect(()=>{
        setInterval(()=>{
          setSelectedImage(selectImage => selectImage < 2 ? selectImage+1 :0)
        }, 5000)
      },[])

  return (
    <>
      <AppBar position="static" className='Static'>
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
          <img src='https://sherise.vercel.app/static/media/logo.de65ad16d0c1c7071226bec80fbe99a4.svg' alt='SheRise' width={60} ></img>
          </Typography>
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/Devlopar" className={classes.link}>
                Devlopar
              </Link>
              <Link to="/contact_us" className={classes.link}>
                Contact_us
              </Link>
              <Link sx={{marginLeft: "50px"}} to="/user" className={classes.link}>
                User
              </Link>
              {/* <Link to="/user" className={classes.link}>
                Login
              </Link> */}
              {/* <Link to="/user" className={classes.link}>
                Register
              </Link> */}
            </div>
            <Button textColor="inherit" sx={{marginLeft: "10px"}}  variant='Contained' >LogIn</Button>
              <Button sx={{marginLeft: "10px"}}  variant='Contained' >Register</Button>
        </Toolbar>
      </AppBar>

      <div className='maincontainer'> 
        <Container className="imgcontainer" fixed maxWidth="sm">
          <h4 className='span'>LADIES, ARE YOU MISSING OPPORTUNIES?</h4>
          <h1>Climb the career<br></br> Ladder on <span className='span'>SheRise</span></h1>

         <p className='container'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptas at accusamus excepturi porro illo sequi exercitationem quia aperiam corrupti illum molestiae iusto veniam veritatis laudantium, non enim earum hic.</p> 
        </Container>

        <div className='imgcontainer1'>
          <Container className="I" fixed maxWidth="sm">
           <img className='img' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl13.jpg?updatedAt=1689504272833' alt='grill' width={100}></img>
           <img className='img' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl13.jpg?updatedAt=1689504272833' alt='grill' width={150}></img>
           <img className='img' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl13.jpg?updatedAt=1689504272833' alt='grill' width={100}></img>
          </Container>
          <Container className="container2 " fixed maxWidth="sm">
            <img className='img' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl13.jpg?updatedAt=1689504272833' alt='grill' width={100}></img>
            <img className='img' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl13.jpg?updatedAt=1689504272833' alt='grill' width={100}></img>
            <img className='img' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl13.jpg?updatedAt=1689504272833' alt='grill' width={150}></img>
          </Container>
        </div>
      </div>


      <div className='service' >
        <div className='' > 
          <div className='' >
            <h1>Our Service</h1>
          </div>
        </div>
      </div>


      <div className='Boxs'>
      <div className='quote1'>
              <div className='A'>
              
                <img className='O' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241' height={100} width={100} alt='grill'></img>
              </div>
              <h5>AI Assistant</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
           
            </div>
      <div className='quote1'>
              <div className='A'>
                <img className='O' src='	https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service2.svg?updatedAt=1689493101201' height={100} width={100} alt='grill'></img>
              </div>
              <h5>One -2-one mentorship</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
              
            </div>
      <div className='quote1'>
              <div className='A'>
                <img className='O' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service3.webp?updatedAt=1689493101686' height={100} width={100} alt='grill'></img>
              </div>
              <h5>5 category jobs</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
              
            </div>
      <div className='quote1'>
              <div className='A'>
                <img className='O' src='	https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service4.webp?updatedAt=1689493101109' height={100} width={100} alt='grill'></img>
              </div>
              <h5>Bookmarking and Filtering jobs</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
            
            </div>
      <div className='quote1'>
              <div className='A'>
                <img className='O' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service5.webp?updatedAt=1689493101582' height={100} width={100} alt='grill'></img>
              </div>
              <h5>Scholarship</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
           
            </div>
      <div className='quote1'>
              <div className='A'>
                <img className='O' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service6.webp?updatedAt=1689493101339' height={100} width={100} alt='grill'></img>
              </div>
              <h5>passwordless Login</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
              
            </div>
      <div className='quote1'>
              <div className='A'>
                <img className='O' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service7.webp?updatedAt=1689493101242' height={100} width={100} alt='grill'></img>
              </div>
              <h5>Get Notified</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
            </div>
      <div className='quote1'>
              <div className='A'>
                <img className='O' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service8.webp?updatedAt=1689493101221' height={100} width={100} alt='grill'></img>
              </div>
              <h5>24/7 technical support</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
            </div>
      </div> 

      

      <div className='whysherise'>
        <div className='whysherise-main'>
        
          
          <div className='right'>
            <img src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/whysherise.svg?updatedAt=1689503441644' alt='' width={400} height={400}></img>
          </div>
          <div className='left'>
            <div className='main-heading'>
              <h5>Lorem ipsum dolor, </h5>
              <h1>Why sheRise ?</h1>
            </div>
            <div className='all-reasons'>
              <div className='reason1'>
                <div className='heading1'>
                  {/* <p className='T'>
                    
                    <svg>
                      <path>

                      </path>
                    </svg>
                  </p> */}
                </div>
                <div className='desc'>
                <h6 className='span'>Passwordless Authentication</h6>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, in ab odit iusto dicta aliquid quos molestiae nihil, quae eaque doloremque facere facilis, earum est! Earum voluptate repellat autem a.</p>
                </div>
              </div>
              <div className='reason2'>
                <div className='heading2'>
                  {/* <p>
                    <svg>
                    </svg>
                      
                  </p> */}
                </div>
                <div className='desc'>
                  <span className='span'> Female oriented jobs</span>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aut, veritatis expedita distinctio at mollitia hic minima aperiam nesciunt. Atque, assumenda ratione molestiae distinctio aspernatur nemo quo illo voluptate eligendi.</p>
                </div>
              </div>
              <div className='reason3'> 
                <div className='heading1'>
                  {/* <p>
                    <svg></svg>
                    
                  </p> */}
                </div >
                <div className='desc'>
                  <span className='span'>Supporting Underprivileged</span>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta veniam sequi at numquam facilis amet recusandae neque vero libero. Iusto ab consequuntur quis soluta rerum dolorem dolore nemo pariatur!</p>
                </div>
              </div>
            </div> 
          </div>
        </div> 
      </div>



      <div className='ourmentor-main'>
        <div className='main'>
          <h1>What our Mentor says</h1>
          <div className='const'>
            <div className='quote1'>
              <div className='A'>
                <img className='O' src='https://sherise.vercel.app/static/media/mentor3.91b77fad3c01016e08dc.png' height={100} width={100} alt='grill'></img>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
              <h6>Isablla Anderson</h6>
            </div>
            <div className='quote2'>
            <div className='A'>
            <img className='O' src='https://sherise.vercel.app/static/media/mentor3.91b77fad3c01016e08dc.png' height={100} width={100} alt='grill'></img>
            </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
              <h6>Isablla Anderson</h6>
            </div>
            <div className='quote3'>
            <div className='A'>
            <img className='O' src='https://sherise.vercel.app/static/media/mentor3.91b77fad3c01016e08dc.png' height={100} width={100} alt='grill'></img>
            </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti eaque eos consectetur tenetur! Atque, Laboriosam debitis itaque incidunt?</p>
              <h6>Isablla Anderson</h6>
            </div>
          </div>
        </div>
      </div>


      <div className='service' >
        <div className='our' > 
          <div className='sileder' >
              <button className='btn1' onClick={() => {
                if(selectImage< allImages.length -1)
                setSelectedImage(selectImage+1)
              }}>Next</button>
              <img width={300} height={200} src={allImages[selectImage]}></img>
              <button className='btn2' onClick={() => {
                if(selectImage > 0)
              setSelectedImage(selectImage -1)}}
              >PREV</button>
          </div>
        </div>
      </div>
 
    </>
  );
}
export default Navbar;

{/* <img className='img' src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl13.jpg?updatedAt=1689504272833' alt='grill' width={100}></img> */}







// const User = () => {
//   return (
//    <div>
       {/* <Sidebar>
        <Menu menuItemStyles={{
            button: {
                [`&.active`]:{
                    backgroundColor: '#13395e', 
                    color:'#b6c8d9',
                },
            },
        }}> 
            <MenuItem component={<Link to="/deshbord"/>}>Deshbord</MenuItem>
            <MenuItem component={<Link to="/"/>}>User</MenuItem>
            <MenuItem component={<Link to="/setting"/>}>Setting</MenuItem>
            <MenuItem component={<Link to="/user5"/>}></MenuItem>
            <MenuItem component={<Link to="/user6"/>}></MenuItem>
            </Menu> 
        */}
            {/* <NavLink to="/">User</NavLink>
            </li>
            <li>
                <NavLink to="/deshbord">Dashbord</NavLink>
            </li>
            <li>
                <NavLink to="/setting">Setting</NavLink> */}
      {/* </Sidebar> */}
     
//       </div>
      
//   )
// }

// export default User

