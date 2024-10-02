import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children  }: PublicLayoutProps) {
  return (
    <div className="flex flex-col bg-black">
      <div className="flex flex-col w-full flex-grow">
        <Header/>    
          {children}
        </div>
        <Footer />
     </div>
  )
}
