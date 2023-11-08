import './Login.css'

import{ useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement authentication logic here (e.g., calling an API).
    // You can use a state management library like Redux or context for handling user authentication.
  };

  return (
    <div className='text-center'>
      <h1 className='text-4xl text-orange-600 font-bold mb-8'>Login</h1>
      <form className='w-4/5 bg-lime-700 m-auto p-6'>
        <div className='text-white mb-4'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-60'
          />
        </div>
        <div className='text-white'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-60'
          />
        </div>
        <button className='bg-sky-700 mt-6 px-8 py-2 rounded-lg text-white font-semibold' onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
