import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";  // Import Link from react-scroll
import logo from "../assets/aclogo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Assessment Champions</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this value to offset from the top when scrolling
                  duration={500}
                  className="cursor-pointer"
                  onClick={() => setMobileDrawerOpen(false)} // Close mobile drawer on click
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <ScrollLink
              to="contact" // Ensure the href value matches the Contact section id
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md cursor-pointer"
            >
              Contact Us
            </ScrollLink>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <ScrollLink
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setMobileDrawerOpen(false)} // Close mobile drawer on click
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <ScrollLink
                to="contact" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 cursor-pointer"
                onClick={() => setMobileDrawerOpen(false)} // Close mobile drawer on click
              >
                Contact Us
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
