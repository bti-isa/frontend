import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import classes from './LoginForm.module.css';
import AuthContext from 'store/auth-context';
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const inputEmail = useRef();
  const inputPass = useRef();
  const navigate = useNavigate();
  const url = 'http://localhost:8080/api/User/authenticate'
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) =>{
    event.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPass.current.value;

    axios
      .post(url, {
        username: email,
        password: password,
      })
      .catch((error) => {
        toast("Password and username don't match 😢")
        return;
      })
      .then((res) => {
        authCtx.login(res.data)
        if(jwt_decode(res.data).authorities[0].authority === "PATIENT")
        {
          navigate('/user')
        }
        if(jwt_decode(res.data).authorities[0].authority === "SYSTEM_ADMIN")
        {
          navigate('/sysadmin/users')
        }
        if(jwt_decode(res.data).authorities[0].authority === "INSTITUTE_ADMIN")
        {
          navigate('/admin/calendar')
        }
      });
  }

  const switchToRegistration = () =>{
    navigate('/registration')
  }

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' required ref={inputEmail}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={inputPass}/>
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchToRegistration}
          >
            Create new account?
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
