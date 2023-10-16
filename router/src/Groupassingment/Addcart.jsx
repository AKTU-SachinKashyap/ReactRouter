import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Addcart=({product})=> {
    const {id, stock}=product;

    const [color, setColor] = useState(color[0]);
    const [amount, setAmount] =useState(1);

    const setDecrease =()=>{
      amount > 1 ? setAmount(amount-1) : setAmount(1);
    };

    const setIncrease=() => {
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };



    // Single product
    const SingleProduct = () =>{
      // const {getSingleProduct, isSingleLoading, SingleProduct} = useProductContext();

      const {id} = useParams();
      const {
        id:alias,
        name,
        price,
        description,
        stock,
        image
      } =SingleProduct;

      useEffect(()=>{
        
      })


    }



  return (
    <div>
      <h1>Add cart</h1>
    </div>
  )
}

export default Addcart
