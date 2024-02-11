import React, { Component,useState } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, database, googleProvider } from ".././firebase";
import { useNavigate } from "react-router-dom";


const Signup =()=>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfpassword] = useState('');
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/');
    }
    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        if(name === 'email'){
            setEmail(value);
        }
        else if (name=== 'password'){
            setPassword(value);
        }
        else if(name === 'cnfpassword'){
            setCnfpassword(value);
        }
    };

    const handleCreateuser = (event) =>{
        event.preventDefault();

        if (email.trim() === '') {
            alert('Please enter the email.');
            return;
        }
        else if (password.trim() === '') {
            alert('Please enter the password.');
            return;
        }
        else if (cnfpassword.trim() === ''){
            alert('Please enter the confirm password.');
            return;
        }
        else if (password.trim() != cnfpassword.trim()){
            alert('Password and Confirm password should be same.');
            return; 
        }
         createUserWithEmailAndPassword(auth, email, password).then((res =>{
            alert('Sign In Successfull!!!')
            navigate('/profile', { replace: true });
         }))
    };

    const handleGoogleSignIn = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        console.log("Google Sign-In Successful", user);
        navigate('/profile', { replace: true });
      } catch (error) {
        console.error("Google Sign-In Error", error);
      }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-72   bg-white/10 rounded-2xl  shadow-xl shadow-white/20">
          {/* Content of the second div */}
          <h2 className="text-xl font-bold text-white/80">Signup</h2>
          <form className="w-full p-4" onSubmit={handleCreateuser}>
            <label className='text-sm text-white'>email</label>
            <input
              className="w-full rounded-lg px-3 py-1 m-1 text-sm "
              placeholder="your email"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
             <label className='text-sm text-white'>Password</label>
            <input
              className="w-full rounded-lg px-3 py-1 m-1 text-sm "
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
             <label className='text-sm text-white'>Confirm Password</label>
             <input
              className="w-full rounded-lg px-3 py-1 m-1 text-sm "
              placeholder="confirm password"
              type="password"
              name="cnfpassword"
              value={cnfpassword}
              onChange={handleInputChange}
            />
            <button className="text-white/60 hover:text-white hover:scale-110">Signup</button>
          </form>
          <div className="w-full  my-3 p-1 rounded">
            <button onClick={handleGoogleSignIn} className="bg-white/40 text-white px-8 my-1 rounded-xl text-sm py-1 hover:bg-texthover/40 border-1 hover:scale-105 transition-transform">Signup with google</button>
            <button onClick={handleClick} className="bg-white/40 text-white px-8 rounded-xl text-sm py-1 hover:bg-texthover/40 border-1 hover:scale-105 transition-transform">have account? sign in</button>
        
          </div>
        </div>
      </div>
    );
}
export default Signup;