import React, { useState } from 'react';

const LoginRegisterTabs = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginType, setLoginType] = useState('Shop');

  return (
    <div className="relative min-h-screen flex justify-center items-center font-sans overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center blur-sm brightness-90 z-[-1]" style={{ backgroundImage: `url('https://homecareanandfacilities.com/wp-content/uploads/2019/12/home-deep-cleaning-870x500.jpg')` }}></div>

      <div className="w-80 bg-white p-6 rounded-lg shadow-lg z-10">
        {/* Main Tabs */}
        <div className="flex justify-around border-b-2 border-gray-200 mb-5">
          <button
            className={`text-lg py-2 focus:outline-none ${activeTab === 'login' ? 'text-green-500 border-b-4 border-green-500 font-bold' : 'text-gray-700'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`text-lg py-2 focus:outline-none ${activeTab === 'register' ? 'text-green-500 border-b-4 border-green-500 font-bold' : 'text-gray-700'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {/* Login Section */}
        {activeTab === 'login' && (
          <div>
            <div className="flex justify-around border-b-2 border-gray-200 mb-4">
              <button
                className={`text-base py-1 focus:outline-none ${loginType === 'Shop' ? 'text-green-500 border-b-2 border-green-500 font-bold' : 'text-gray-600'}`}
                onClick={() => setLoginType('Shop')}
              >
                Shop
              </button>
              <button
                className={`text-base py-1 focus:outline-none ${loginType === 'Customer' ? 'text-green-500 border-b-2 border-green-500 font-bold' : 'text-gray-600'}`}
                onClick={() => setLoginType('Customer')}
              >
                Customer
              </button>
            </div>

            <form>
              <div className="mb-4 text-left">
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md text-sm" />
              </div>
              <div className="mb-4 text-left">
                <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md text-sm" />
              </div>
              <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Login as {loginType}
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4">Don't have an account? <span className="text-green-500 font-semibold cursor-pointer hover:underline" onClick={() => setActiveTab('register')}>Click Register</span></p>
          </div>
        )}

        {/* Register Section */}
        {activeTab === 'register' && (
          <div>
            <form>
              <div className="mb-4 text-left">
                <input type="text" placeholder="Name" className="w-full px-3 py-2 border rounded-md text-sm" />
              </div>
              <div className="mb-4 text-left">
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md text-sm" />
              </div>
              <div className="mb-4 text-left">
                <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md text-sm" />
              </div>
              <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Register
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4">Already have an account? <span className="text-green-500 font-semibold cursor-pointer hover:underline" onClick={() => setActiveTab('login')}>Click Login</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterTabs;
