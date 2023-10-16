import React, { useState,useRef,useEffect } from 'react'

// .Create a component called `CounterWithReducer` that uses `useReducer` to manage the state of a counter value. Implement buttons to increment and decrement the counter.



// const Main = () => {
//     const[value, setValue]=useState(0);
//     console.log(value)
    
//   return (
//     <div>
//         <button onClick={()=> setValue(value+1)}>Incriment</button>
//       <h1>{value}</h1>

//       <div>
//         <button onClick={() => setValue(value-1)}>Decriment</button>
     
//       </div>
//     </div>
//   )
// }

// export default Main





// ****** 6.Practice Question: Implement a React component called "Timer" that starts a countdown from a specified number of seconds and displays the remaining time.
const Main = () => {
    const Ref=useRef(null);
    const [timer, setTimer]=useState('00:00:00');

    const getTimer=(e)=>{
        const total =Date.parse(e)-Date.parse(new Date());
        const seconds =Math.floor((total/1000)%60);
        const minutes = Math.floor((total/1000/60)%60);
        const hours =Math.floor((total/1000/60/60)%24);
        return{total, hours,minutes, seconds};
    }

    const StartTimer=(e)=>{
        let {total,hours, minutes,seconds}=getTimer(e);
        if(total>=0){
            setTimer((hours > 9 ? hours :'0' + hours )+ ':' + (minutes > 9 ? minutes:'0' + minutes)+ ':' +(seconds > 9 ? seconds:'0' + seconds))
        }
    }

    const cleartimer=(e) =>{
        setTimer('00:00:00');
        if(Ref.current) clearInterval(Ref.current)
        const id=setInterval(()=>{
            StartTimer(e);
        },1000)
        Ref.current=id;
    }

    const getDeadTime = () =>{
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds()+3600);
        return deadline;
    }

    useEffect(()=>{
        cleartimer(getDeadTime());
    },[])
    const onClickReset=()=>{cleartimer(getDeadTime())}
  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={onClickReset}>Reset</button>
    </div>
  )
}

export default Main





//  ********** Create a component called `ProductList` that receives an array of products as a prop. Use `useState` to manage the state of the selected product. Display the selected product's details and implement buttons to navigate to the next and previous products.

// import React from 'react';
// import ProductList from './ProductLIst';

// const products = [

//         {id:1, name:"sahcin", Age:"20", Email:"xyz@gmail.com"},
//         {id:2, name:"ankit", Age:"18",Email:"xyz@gmail.com" },
//         {id:3, name:"Akash", Age:"24", Email:"xyz@gmail.com"}

// ];

// const App = () => {
//   return (
//     <div>
//       <h1>Product Catalog</h1>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default App;

















