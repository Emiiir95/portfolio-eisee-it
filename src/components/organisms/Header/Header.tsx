import { Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';


interface HeaderProps {
  typographieColor?: string;
}

export function Header({ typographieColor }: HeaderProps) {
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
    <Navbar fluid className={clsx('fixed top-0 left-0 w-full z-50 transition-colors duration-300', isScrolled ? 'opacity-90' : 'bg-transparent')}> 
      <div></div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/HomePage" className={isScrolled ? 'text-white' : `text-[${typographieColor}]`}>
        Acceuil
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Entreprise" className={isScrolled ? 'text-white' : `text-[${typographieColor}]`}>
        Entreprise
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Projet" className={isScrolled ? 'text-white' : `text-[${typographieColor}]`}>
          Projet
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Veille" className={isScrolled ? 'text-white' : `text-[${typographieColor}]`}>
          Veille
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Bilan" className={isScrolled ? 'text-white' : `text-[${typographieColor}]`}>
          Bilan
        </Navbar.Link>
          </Navbar.Collapse>
          <Navbar.Toggle />
      <div></div>
    </Navbar>
  );
};
