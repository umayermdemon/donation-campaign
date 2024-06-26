
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '/public/Images/Logo.png'
import { Link, NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <NavLink to={'/'}>
        <a className="flex items-center text-lg transition-colors">
          Home
        </a>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <NavLink to={'/donation'}>
        <a className="flex items-center  text-lg transition-colors">
          Donation
        </a>
        </NavLink> 
      </Typography>
     <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <NavLink  to={'/statistics'}>
        <a className="flex text-lg items-center transition-colors">
          Statistics
        </a>
        </NavLink>
        
      </Typography>
    </ul>
  );
}

const NavBAr = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div>
      <Navbar className="mx-auto max-w-7xl h-12 my-0 shadow-none px-6 pt-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to={'/'}>
        <div >
          <img src={logo} alt="" className="w-36"/>
        </div>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-4 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-4 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
      
    </div>
  );
};

export default NavBAr;