import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { Hero } from '@/components/organisms/Hero';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <Hero/>
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}