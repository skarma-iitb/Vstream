import React, { useState } from "react";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Account</h1>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 ${isLogin ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 ${
            !isLogin ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Account;
