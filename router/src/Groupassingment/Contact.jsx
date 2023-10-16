
import React, {useState} from 'react'
function Usehook() {
  const [name, setName] =useState('')
  const [age, setAge] =useState('')
  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')


  const handleChange=(e)=>{
    setName(e.target.value);
  }
  const handleAgeChange=(e)=>{
    setAge(e.target.value);
  }
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }
  const handleConfPasswordChange=(e)=>{
    setConfPassword(e.target.value);
  }

  const handleSubmit=(e)=>{
    if(password!=confPassword){
      alert("password Not Match")
    }else{
      alert('A from was sumitted with Name:"'+ name +'", Age:"'+age+'" and Email:"' + email+'"');
    }
    e.preventDefault();
  }



  return (
    <div>
      <form onSubmit={(e) =>{handleSubmit(e)}}>
        <label>
      Name:
      <input type='text' value={name} onChange={(e)=>
      {handleChange(e)}} placeholder='Enter Your Name'></input>
      </label>
      <br></br>


      <label>
      Email:
      <input type='Email' placeholder='Enter Your Email' value={email} required onChange={(e)=>{ handleEmailChange(e)}}></input>
      </label><br></br>


        password:
      <label>
      <input type='password' placeholder='Enter Your Password' value={password} required onChange={(e)=>{handlePasswordChange(e)}}></input>
      </label><br></br>


      <label>
      confirm password:
      <input type='password' value={confPassword} placeholder='Enter Your Password' required   onChange={(e)=>{handleConfPasswordChange(e)}}></input>
      </label><br></br>
     

      <label>
      Age:
       <input type='password' value={age} placeholder='Enter Your Password' required
     onChange={(e)=>{handleAgeChange(e)}}></input><br></br>
      </label>


       <input type='submit' value="Submit"></input>
      
    </form>
    </div>
  )
}

export default Usehook



