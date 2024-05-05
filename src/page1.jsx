import React from 'react';
import { Navbar, Button } from 'keep-react';

const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex flex-row items-center justify-between flex-wrap">
        {/* Left Side */}
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>Fling</Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="About" />
            {/* Products Dropdown */}
            <Navbar.Container className="relative">
              <Navbar.Link linkName="Products" />
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-700 rounded-md shadow-lg opacity-0 invisible transition-opacity duration-300">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Product 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Product 2</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Product 3</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Product 4</a>
              </div>
            </Navbar.Container>
            {/* End of Products Dropdown */}
          </Navbar.Container>
        </Navbar.Container>

        {/* Right Side */}
        <Navbar.Container className="flex items-center space-x-4">
          <Button size="sm" className='bg-gray-700 hover:bg-gray-300 hover:text-black'>Login</Button>
          <Button size="sm"  className='bg-gray-700 hover:bg-gray-300 hover:text-black'>Signup</Button>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}

export default NavbarComponent;
