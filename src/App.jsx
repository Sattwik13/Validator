import { useState } from "react";

import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);

  // Dynamic Data Handler
  const handleUserSubmit = (data) => {
    setUser(data); // data = { name, email }
  };

  return (
    <div >
      <div>
        <Navbar />

        <SignUp onSignUp={handleUserSubmit} />

      </div>

        <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-teal-950 flex justify-center mt-1 py-3">

            {/*  HardCode value */}
            {/* <UserCard name="John " email="john@example.com" /> */}

            {/* Props came dynamically */}
            {user && (
            <UserCard name={user.name} email={user.email} />
          )}
        </div>

    </div>
  );
}

export default App;
