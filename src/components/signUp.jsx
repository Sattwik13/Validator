import { useState } from "react";

const SignUp = ({ onSignUp }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
  const [error, setError] = useState('');

  // form reset handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password } = formData;

    // Basic required field check
    if (!fullName || !email || !password) {
      setError('All fields are required!');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format!');
      return;
    }

    // Password rule: at least 6 chars, one digit
    const passwordRegex = /^(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters and include a number!');
      return;
    }

    onSignUp({ name: fullName, email }); // send data to App
    setFormData({ fullName: '', email: '', password: '' }); // reset
    alert(`Signed Up with NAME: ${fullName.toUpperCase()}`); // Alert message
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  from-blue-900 via-slate-900 to-emerald-900 px-4">

      <form onSubmit={handleSubmit} className="bg-gray-800/20 backdrop-blur-md p-8 rounded-xl w-full max-w-md shadow-2xl text-white">

        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
         name="fullName"
         type="text" 
         placeholder="Full Name" 
         value={formData.fullName}
         onChange={handleChange} 
         className="w-full mb-4 p-3 rounded bg-gray-900 text-white border border-gray-800 hover:border-gray-600" />
        <input 
         name="email" 
         type="email" 
         placeholder="Email Address" 
         value={formData.email}
         onChange={handleChange} 
         className="w-full mb-4 p-3 rounded bg-gray-900 text-white border border-gray-800 hover:border-gray-600" />
        <input
         name="password" 
         type="password" 
         placeholder="Password" 
         value={formData.password}
         onChange={handleChange} 
         className="w-full mb-6 p-3 rounded bg-gray-900 text-white border border-gray-800 hover:border-gray-600" />

        <button type="submit"
         className="w-2/4 mx-auto bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950 hover:to-emerald-900 py-3 px-5 rounded transition-all">SIGN UP</button>

      </form>
    </div>
  );
};


export default SignUp;
