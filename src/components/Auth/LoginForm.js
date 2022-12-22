import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import classes from './LoginForm.module.css';
import AuthContext from 'store/auth-context';

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
      }).then((res) => {
        authCtx.login(res.data)
        navigate('/poll')
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
            Create new account
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
