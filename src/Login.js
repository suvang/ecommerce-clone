import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from './firebase';

function Login() {
const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push("/");
        })
        .catch(e => alert(e.message))
       
    };

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push("/");
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
             <img 
              className="login__logo"
              src="https://png.pngtree.com/template/20190927/ourmid/pngtree-e-commerce-logo-template-image_311731.jpg"
              alt="" 
             />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>
                    Sign In and get access to all our features.Happy shopping!
                </p>
                <button onClick={register} className="login__registerButton">Create your account</button>
            </div>
        </div>
    )
}

export default Login
