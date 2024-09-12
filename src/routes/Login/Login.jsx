import React ,  {useEffect, useState} from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { useSignInUserMutation } from '../../redux/api/authApi';
import { signIn } from '../../redux/slices/authSlice';
import { notification } from 'antd';

const Login = () => {

    const dispatch = useDispatch()
    const [ signInUser , {data , isSuccess}] = useSignInUserMutation()

    const[email , setEmail] = useState("john@mail.com")
    const[password , setPassword] = useState("changeme")
    

    const formData = {
        email,
        password
    }
      
 



    const handleSubmit = (e) => {
        e.preventDefault();
        signInUser(formData)
    };

    

    useEffect(() => {
        if(isSuccess){
            dispatch(signIn(data?.access_token))
            notification.success({
                message : 'Login successful',
            })
        }
    } , 
    [isSuccess])

    

    

  return (
    <div className="form-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder='Enter your email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='login-btn' type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login