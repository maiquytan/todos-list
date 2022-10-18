import React, { useState } from 'react'
import "./login.scss"
const Login = () => {

  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');


  return (
    <div className='container1'>
      <div className='app-wrapper1'>
        <div className='register'>
          <h1> Đăng Nhập </h1>
          <div className='formlogin'>
            <div>
              <label >Usename</label>
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Input username....' />
            </div>
            <div>
              <label >Password</label>
              <input type="password" value={userPass} onChange={(e) => setUserPass(e.target.value)} placeholder='....' />
            </div>

            <div>
              <button type='submit' onClick={notification} className="buttonlogin"> Đăng nhập </button>
            </div>
            <div>
              <input type="checkbox"   className="remember" />
              <label> Remember me</label>
            </div>
            <div >
              <button type="button" className="cancelbtn">Cancel</button>
              <span className="psw"> Forgot password?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  function notification() {
    if (userName.length > 0 && userPass.length > 0) {
      alert("Đăng kí thành công")
    } else {
      alert("Đăng kí không thành công")
    }
  }
}

export default Login;