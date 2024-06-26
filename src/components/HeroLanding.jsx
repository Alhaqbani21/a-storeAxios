import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroLanding() {
  const navigate = useNavigate();
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-screen shadow-2xl p-10 rounded-xl">
          <h1 className="text-5xl font-bold max-md:text-2xl text-primary tracking-wider">
            Welcome to A-Store
          </h1>
          <p className="py-6 text-2xl max-md:text-base">
            Where would you like to go
          </p>
          <div className="flex justify-center items-center gap-10">
            <button
              onClick={() => {
                navigate('./SignUp');
              }}
              className="btn btn-primary text-white btn-lg"
            >
              Sign up
            </button>
            <button
              onClick={() => {
                navigate('./Login');
              }}
              className="btn btn-secondary text-white btn-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLanding;
