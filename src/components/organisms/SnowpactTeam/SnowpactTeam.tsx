import { SnowBall } from '@/components/atoms/SnowBall/SnowBall';
import avatarEmir from '@/assets/images/avatar/avatarEmir.png';
// import avatarEmir2 from '@/assets/images/avatar/avatarEmir2.png';
import avatarMurat from '@/assets/images/avatar/avatarMurat.png';
import avatarMurat2 from '@/assets/images/avatar/avatarMurat2.png';
import avatarStephane from '@/assets/images/avatar/avatarStephane.png';
import avatarStephane2 from '@/assets/images/avatar/avatarStephane2.png';
import { Typography } from '@/components/atoms/Typography/Typography';

interface SnowpactTeamProps {
}

const snowpactInfo = [
  {
    avatar: avatarStephane,
    avatar2: avatarStephane2,
    name: 'Stéphane',
    job: 'Co-Fondateur',
  },
  {
    avatar: avatarMurat,
    avatar2: avatarMurat2,
    name: 'Murat',
    job: 'Co-Fondateur',
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: 'Farid',
    job: 'Dév Fullstack',
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: 'Alexandre',
    job: 'Dév Back',
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: 'Yeliz',
    job: 'Photographe / Vidéaste',
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: 'Yasin',
    job: 'Dév Fullstack',
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: 'Sanae',
    job: 'Designer UI / UX',
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: 'Kabir',
    job: 'Testeur QA / Dév Back',
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: 'Fatih',
    job: 'Apprenti Dév',
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: 'Gülsüm',
    job: 'Apprenti Dév',
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: 'Emir',
    job: 'Apprenti Dév',
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: 'Fahmi',
    job: 'Dév Fullstack',
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: 'Semih',
    job: 'Apprenti Dév',
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: 'Mohamed',
    job: 'Business Analyst',
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: 'Anthony',
    job: 'Dév Junior',
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: 'Amira',
    job: 'Apprentie',
  },
];

export function SnowpactTeam({ }: SnowpactTeamProps) {
  return (
    <div className='flex-col flex gap-12 items-center py-10'>
      <Typography customColorClass='text-[#7B3460]' variant='componentTitle'>L'équipe Snowpact</Typography>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        {snowpactInfo.map((info) => (
          <SnowBall avatar={info.avatar} avatar2={info.avatar} name={info.name} job={info.job}></SnowBall>
        ))}  
      </div>
    </div>
  );
};
