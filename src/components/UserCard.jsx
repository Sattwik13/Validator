import { useEffect, useState } from "react";

const UserCard = ({ name, email }) => {
  const [show, setShow] = useState(false); // add hover state

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900 
        text-white rounded-xl p-6 shadow-lg max-w-sm w-full 
        transform transition-all duration-500 ease-out
        backdrop-blur-sm ring-1 ring-emerald-500/30
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} 
        hover:shadow-emerald-400/30 hover:shadow-2xl hover:scale-105`}
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-300">{email}</p>
    </div>
  );
};

export default UserCard;
