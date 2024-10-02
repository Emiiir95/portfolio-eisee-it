import { ProjetBlock } from '@/components/organisms/ProjetBlock';
import { PublicLayout } from '@/components/templates/PublicLayout';


export const ProjetPage = () => {

  return (
    <PublicLayout>
      <div className='bg-black w-full h-full relative flex items-center justify-center'>
      {/* <div className='bg-gradient-to-br from-[#C5597D] via-[#974286] to-[#7E45A3] w-full h-full relative flex items-center justify-center'> */}
        <div className='mx-[10%] mt-12'>
            <ProjetBlock label='Tous mes projets!'></ProjetBlock>
        </div>
      </div>
    </PublicLayout>
  );
};
