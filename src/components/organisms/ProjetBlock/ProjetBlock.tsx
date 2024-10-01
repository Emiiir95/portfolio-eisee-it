import { ProjetDrawer } from '@/components/atoms/ProjetDrawer';
import { Typography } from '@/components/atoms/Typography/Typography';
import signaleoIcon from '/src/assets/images/icon/signaleo.png'
import mySocialWorkerIcon from '/src/assets/images/icon/mySocialWorker.webp'
import monRestoHalalIcon from '/src/assets/images/icon/mrh.jpg'
import snowpactIcon from '/src/assets/images/icon/snowpact.png'
import adnIcon from '/src/assets/images/icon/adn.png'
import avatar from '/src/assets/images/avatar/avatarEmir.png'

import { useState } from 'react';

interface ProjetBlockInteface {
  label: string
}

type Section = 'professionnel' | 'scolaire' ;

export const ProjetBlock = ({label}: ProjetBlockInteface) => {

  const projectsProfessionnel = [
    {
      name: 'Signaleo',
      link: 'https://signaleo.co',
      year: '2024',
      description: 'Application mobile pour faciliter la gestion des incidents dans les villes pour les citoyens et pour les mairies',
      image: signaleoIcon, 
    },
    {
      name: "Mon Resto'Halal",
      link: 'https://mon-resto-halal.com',
      year: '2023-2024',
      description: 'Site Mail',
      image: monRestoHalalIcon,
    },
    {
      name: 'Snowpact',
      link: 'https://snowpact.com',
      year: '2024',
      description: 'Site blog',
      image: snowpactIcon,
    },
    {
      name: 'ADN',
      link: 'https://animationdigitalnetwork.fr',
      year: '2023-2024',
      description: 'migration php en typescript legacy',
      image: adnIcon,
  },
  {
    name: 'Evolios',
    link: 'https://evolios.fr',
    year: '2024',
    description: 'BackOffice',
    image: avatar,
  },
    {
      name: 'My Social Worker',
      link: 'https://mysocialworker.fr',
      year: '2023',
      description: 'migration php en typescript legacy',
      image: mySocialWorkerIcon,
    },
  ];

  const projectsScolaire = [
    {
      name: 'TextAdventure',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon, 
    },
    {
      name: 'Liste De Course',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon,
    },
    {
      name: 'Journal',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon,
    },
    {
      name: 'JO Ticket',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon,
    },
    {
      name: 'Billeterie',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon,
    },
    {
      name: 'Entrainement',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon,
    },
    {
      name: 'Gestio de Pilote',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon,
    },
    {
      name: 'Heritage',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon,
    },
    {
      name: 'BDD',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon,
    },
    {
      name: 'AlwaysData',
      link: 'mon-resto-halal.com',
      year: '2024',
      description: '',
      image: signaleoIcon,
    },
  ];


  const [activeSection, setActiveSection] = useState<Section>('professionnel');

  const buttonClass = (section: Section) =>
    `mx-2 px-5 py-3 rounded-xl shadow-xl ${
      activeSection === section ? 'bg-[#C41D7E] text-white' : 'text-[#f2348d]'
    }`;
  
  return (
    <div className='flex items-center justify-center flex-col'>
      <Typography variant='heroTitle' color='white' customClassName='pb-20'>{label}</Typography>
      <div className='w-full flex-col flex py-5 rounded-3xl p-32 bg-[#000] bg-opacity-30 border-white relative'>
        <div className='flex justify-center'>
        <div className='flex justify-center items-center h-12 rounded-2xl w-auto gap-6 mb-24'>
          <button
            onClick={() => setActiveSection('professionnel')}
            className={buttonClass('professionnel')}
          >
              <Typography variant='h3'>
                Professionnel
              </Typography>
          </button>

          <button
            onClick={() => setActiveSection('scolaire')}
            className={buttonClass('scolaire')}
          >
              <Typography variant='h3'>
                Scolaire
              </Typography>
            </button>
          </div>
        </div>

          {activeSection === 'professionnel' && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6'>
              {projectsProfessionnel.map((projet) => (
                <ProjetDrawer name={projet.name} description={projet.description} year={projet.year} image={projet.image} link={projet.link}></ProjetDrawer>
              ))}  
            </div>
          )}

          {activeSection === 'scolaire' && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6'>
              {projectsScolaire.map((projet) => (
                <ProjetDrawer name={projet.name} description={projet.description} year={projet.year} image={projet.image} link={projet.link}></ProjetDrawer>
              ))}  
            </div>
          )}
        </div>
    </div>
  );
};

