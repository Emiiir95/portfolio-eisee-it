import { Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';



export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar fluid className={clsx('fixed top-0 left-0 w-full z-50 transition-colors duration-300', isScrolled ? 'opacity-90 bg-[#815CFC]' : 'bg-transparent')}> 
      <div></div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/HomePage" className='text-white'>
        Acceuil
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Entreprise" className='text-white'>
        Entreprise
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Projet" className='text-white'>
          Projet
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Veille" className='text-white'>
          Veille
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Bilan" className='text-white'>
          Bilan
        </Navbar.Link>
          </Navbar.Collapse>
          <Navbar.Toggle />
      <div></div>
    </Navbar>
  );
};
