import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sinig.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const checkLogin = () => {
    if (username === 'Umidjon' && password === '1988') {

      localStorage.setItem('isLoggedIn', 'true');
      navigate('/happy_birthday');
    } else {
      alert("Noto'g'ri foydalanuvchi nomi yoki parol. Iltimos, qaytadan urinib ko'ring.");
    }
  };

  return (
    <div className='hbvsdj'>
      <div className="box">
        <div className="login">
          <div className="loginBx">
            <h1>Kirish</h1>
            <div className="inputBox">
              <input
                id="username"
                className="user"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span>Login</span>
            </div>
            <div className="inputBox">
              <input
                id="password"
                className="pw"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>password</span>
            </div>
            <input
              className="submit"
              type="submit"
              value="Kirish"
              onClick={checkLogin}
            />
          </div>
          <div className='group'>
            <h1>Parol yo'qmi</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;