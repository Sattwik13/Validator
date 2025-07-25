import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-gray-900/30 backdrop-blur-lg text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Validator</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8  text-lg">
          <li>
            <a href="#" className="hover:text-emerald-600 transition-colors">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-600 transition-colors">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-600 transition-colors">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Nav Links */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4 font-medium text-lg">
            <li>
              <a href="#" className="hover:text-emerald-600 transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600 transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
