import React, { useEffect, useState } from 'react'
import './Main.css';
import axios from 'axios';
import './Stars'
import { NavLink } from 'react-router-dom'
import Stars from './Stars';

function Main() {

  const [Data, setData]=useState([]);
    useEffect(()=>{
      const API=async()=>{
        try{
          const response =await axios.get('https://fakestoreapi.com/products')
          const data = response.data;
          setData(data);
          console.log(data);
        }catch(error){
          console.log(error);
      }
    }
    API()
  },[]);




  return (
    <div>
      <header className='header'>
        {/* <h1> Main</h1> */}
        <nav className='navbar'>
          <a className='navbar-logo' href='#'>Logo</a>
            <ul className='navitems'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">about</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
                


        <div className='P'>
          <ul className='grid'>
            {Data.map((list,index)=>(
              <li className='A' key={index}>
                <h1>{list.title}</h1>
                <p>{list.category}</p>
                <img src={list.image}width= '100' height='150'/>
                <p>{list.price}</p>
                {/* <h4>{list.rating.rate}</h4> */}
                <Stars stars={list.rating.rate} reviews={list.rating.count}></Stars>
                <p>{list.description}</p>

                <button className='V'
                >
                  <li>
                      <NavLink to="/Addcart">Add cart</NavLink>
                  </li>
                </button>
            </li>
              ))}
          </ul> 
        </div>
      </header>
    </div>
  )
}

export default Main;





 {/* <>
        <h1>hello</h1>
        {Data.map((post)=>{
          return(
            <div key={id}>
              <p>{category}</p>
              <h1>{description}</h1>
              <img title={title} src={image} alt="" />
              <h2>{rating}</h2>
              {/* <h3>{id}</h3> */}
            {/* </div> */}
          {/* )
        })
        }
        </>  */}

        {/* <div>
        <p>{Data.rating}</p>
        <img title={Data.title} src={Data.image} alt="" />
        <p>{Data.category}</p>
        <h2>{Data.rating}</h2>
        <h3>{Data.id}</h3>
        </div> */}




        

