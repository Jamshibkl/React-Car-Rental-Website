import React from 'react';
import '../styles/Signup.css'
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className='parent'>
      <form className="form">
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Firstname</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" placeholder="" required />
          <span>Email</span>
        </label>

        <label>
          <input className="input" type="password" placeholder="" required />
          <span>Password</span>
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder=""
            required
          />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an account? <Link to='/login'>Sign in</Link>{' '}
        </p>
      </form>
    </div>
  );
}

export default Signup;
