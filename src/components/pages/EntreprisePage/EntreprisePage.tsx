import { SnowpactTeam } from '@/components/organisms/SnowpactTeam';
import { PublicLayout } from '@/components/templates/PublicLayout';


export function EntreprisePage() {
  
  return (
    <PublicLayout>
      <section className='pt-20'>
        <SnowpactTeam />    
      </section>
    </PublicLayout>
  );
};
