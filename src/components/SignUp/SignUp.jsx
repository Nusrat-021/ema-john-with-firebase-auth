import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success,setSuccess] = useState('');
  const handleSignUp = (event) => {
    event.preventDefault();
    setError('');

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(email, password, confirmPassword);

    //validation
    if (password !== confirmPassword) {
      setError('Your password did not match');
      return;
    }
    else if (password.length < 6) {
      setError('Password must be 6 characters or longer ');
      return;
    }
    //sign up with firebase using email and password
    createUser(email,password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setError('');
      form.reset();
    })
    .catch(error => {
      setError(error.message);
    })

  }
  return (
    <div className='form-container'>
      <h2 className='form-title'>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required placeholder='Your Email' />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required placeholder='Your Password' />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required placeholder='Your Password' />
        </div>
        <input className='btn-submit' type="submit" value="Sign Up" />
      </form>
      <p className='account-setting'><small>Already have an account?<Link to='/login'>Login</Link></small></p>
      <p className='text-error'><small>{error}</small></p>
    </div>
  );
};

export default SignUp;