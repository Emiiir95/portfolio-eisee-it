import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/Navbar";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col bg-black">
      <div className="flex flex-col w-full flex-grow">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
