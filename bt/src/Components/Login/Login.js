import React from 'react'
import "./login.css"
const Login = () =>  {
  return (
    <div className='container1'>
    <div className="app-wrapper1">
    <div className='register'> 
      <h1> Login </h1>
      <div className='form'>
        <div>
          <label >Usename</label>
          <input type="text" placeholder='Input username....' required/>
        </div>
        <div>
        <label >Password</label>
        <input type="password" placeholder='....' required/>
        </div>  
        <div>
        <label >Confirm </label>
        <input type="password" placeholder='....' required/>
        </div>
        <div>
        <button type='submit' onClick={ notification} className="button"> Đăng kí </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
  function notification(){
    return(
      alert("Đăng kí thành công")
    ) 
    }
}
export default Login;