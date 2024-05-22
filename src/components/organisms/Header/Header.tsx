import { IosButton } from '@/components/atoms/IosButton';
import { Dropdown, Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export const Header = () => {
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
    <Navbar fluid rounded className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className='ml-10'> 
        </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/HomePage" className={`${isScrolled ? 'text-black' :'text-white'}`}>
          Acceuil
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Entreprise" className={`${isScrolled ? 'text-black' :'text-white'}`}>
          Entreprise
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Projet" className={`${isScrolled ? 'text-black' :'text-white'}`}>
          Projet
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Veille" className={`${isScrolled ? 'text-black' :'text-white'}`}>
          Veille
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Bilan" className={`${isScrolled ? 'text-black' :'text-white'}`}>
          Bilan
        </Navbar.Link>
          </Navbar.Collapse>
          <Navbar.Toggle />
           <div className="flex md:order-2">
             <Dropdown
               arrowIcon={false}
               inline
               label={isScrolled ? <img alt="settings" src="public/assets/images/settingsIconBlack.gif" className='h-10 w-30' /> : <img alt="settings" src="public/assets/images/settingsIconWhite.gif" className='h-10 w-30' />}
             >
               <Dropdown.Divider />
               <div className="flex flex-row justify-between items-center pr-4">
                 <Dropdown.Item>Mode</Dropdown.Item>
                 <IosButton />
               </div>
             </Dropdown>
               </div>
    </Navbar>
  );
};
