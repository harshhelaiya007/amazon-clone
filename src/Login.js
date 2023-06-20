import {React , useState} from 'react'
import './login.css'
import { Link ,  useNavigate  } from "react-router-dom";

import { auth } from './firebase';


const LoginUser = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
   const navigate = useNavigate()
    function signIn(e){
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log("ok")
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth)
            navigate('/')

        })
        .catch(error => alert(error))
       
    }

    function Register(e) {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth)
            navigate('/')

        })
        .catch(error => alert(error))
    }
  return (
    <div className='login'>
        <Link to='/'>
        <img src='/images/am5.png' className='login_logo'/> 
        </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

                
                <h5>Password</h5>
                <input type='password'value={password} onChange={e=> setPassword(e.target.value)}/>

                <button type='submit' className='login_signInButton' onClick={signIn}>
                    Sign In
                </button>
            </form>
            <p>
                By signing-in you agree to Amazon's conditions of use & Sale , Please see our Privacy Notice , Our Cookies Notice and our Interest-Based Ads Notice
            </p>

            <button type='submit' className='login_registerButton' onClick={Register} >
                Create your Amazon Account

            </button>

        </div>
        
        
       
      
    </div>
  )
}

export default LoginUser
