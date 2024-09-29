import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';  // Correct import
import RegisterForm from '../components/RegisterForm';  // Correct import

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Account</h1>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 ${isLogin ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 ${!isLogin ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default Account;