import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from ".././firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleClick = () =>{
    navigate('/signup');
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Sign In successful");
        navigate('/home', { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          alert("Invalid password");
        } else if (error.code === "auth/user-not-found") {
          alert("User not found");
        } else {
          alert("Sign In failed");
        }
      });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-72 h-72 bg-white/10 rounded-2xl shadow-xl shadow-white/30">
        <h2 className="text-xl font-bold text-white/80">Login</h2>
        <form className="w-full p-4" onSubmit={handleLogin}>
          <input
            className="w-full rounded-lg px-3 py-1 m-1 text-sm"
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={handleInputChange}
          />
          <input
            className="w-full rounded-lg px-3 py-1 m-1 text-sm"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
          />
          <button type="submit" className="text-white/60 hover:text-white hover:scale-110">
            Login
          </button>
        </form>
        <div className="w-full my-3 p-1 rounded">
          <button className="bg-white/40 text-white px-8 my-1 rounded-xl text-sm py-1 hover:bg-texthover/40 border-1 hover:scale-105 transition-transform">
            Continue with Google
          </button>
          <button className="bg-white/40 text-white px-8 rounded-xl text-sm py-1 hover:bg-texthover/40 border-1 hover:scale-105 transition-transform">
            Continue with Facebook
          </button>
        </div>
        <button className="text-white hover:text-white hover:scale-110" onClick={handleClick}>New Here?</button>
      </div>
    </div>
  );
};

export default Login;
