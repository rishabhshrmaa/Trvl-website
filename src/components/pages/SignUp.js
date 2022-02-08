import React from "react";
import "./SignUp.css";
import "../../App.css";
import {Link} from 'react-router-dom';

export default function SignUp() {

  return (
    <>
      <div className="container">
        <div className="header">
          <h2>Create Account</h2>
        </div>
        <form id="form" className="form">
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={'example'}
              readOnly
              name="username"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              readOnly
              value={'example@gmail.com'}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              readOnly
              value={'12345678'}
            />
          </div>
          <Link to="/"><button type="submit">Sign-up</button></Link>
        </form>
      </div>
    </>
  );
}
