import React from 'react';
import '../styles/login.css'
import {Link} from 'react-router-dom';
function Login() {
  return (
    <div className='parent'>
      <form className="form">
        <div className="login-header">Sign In</div>
        <div className="inputs">
          <input placeholder="Email" className="input" type="text" />
          <input placeholder="Password" className="input" type="password" />
          <div className="checkbox-container">
            <label className="checkbox">
              <input type="checkbox" id="checkbox" />
            </label>
            <label htmlFor="checkbox" className="checkbox-text">
              Remember me
            </label>
          </div>
          <button className="sigin-btn">Submit</button>
          <a className="forget" href="#">
            Forget password?
          </a>
          <p className="signup-link">
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
