import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

interface PublicLayoutProps {
  children: React.ReactNode;
  colorTextHeader?: string;
}



export function PublicLayout({ children, colorTextHeader }: PublicLayoutProps) {
  return (
    <div className="flex flex-col justify-between h-screen bg-[#FFEEF4]">
      <div className="flex flex-col w-full flex-grow">
        <Header typographieColor={colorTextHeader} />    
        <div className={'flex flex-col flex-grow'}>{children}</div>
        </div>
        <Footer />
     </div>
  )
}
