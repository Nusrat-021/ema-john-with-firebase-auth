import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [error, setError] = useState('');
  const [show,setShow] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogIn = event => {

    event.preventDefault();
    setError('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        toast.success('User logged in successfully', {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message);
      })
  }
  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required placeholder='Your Email' />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? 'text' : 'password'  } name="password" id="password" required placeholder='Your Password' />
          <p onClick={() => setShow(!show)}>
          {
            show ? <span>Hide Password</span> : <span>Show Password</span>
          }
          <small>

          </small></p>
        </div>
        <input className='btn-submit' type="submit" value="Login" />
        <p className='account-setting'><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </div>
  );
};

export default Login;