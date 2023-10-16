import React from 'react'
import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
// import styled from "styled-components";


const Stars = ({rate, count}) => {
    const ratingStar = Array.from({length:5},(elem, index)=>{
        let number = index + 0.5;

        return(
            <span key={index}>
              {
                Stars >=index + 1 ? (<FaStar className='icon'></FaStar> 
                ) : Stars >= number ? (
                    <FaStarHalfAlt className='icon'></FaStarHalfAlt>
                ): (
                    <AiOutlineStar className='icon'/>
                )
              }
            </span>
        )
    })


  return (
    <wrapper>
        <div>
             {ratingStar}
             <p>({count} customer reviews)</p>
        </div>
    </wrapper>
  )





}

export default Stars;
