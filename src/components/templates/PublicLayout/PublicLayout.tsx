import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col bg-black">
      <div className="flex flex-col w-full flex-grow">
        <ScrollToTop />
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Définir la position en haut de la page
    window.scrollTo(0, 0);
  }, [pathname]); // Exécuté à chaque changement d'URL

  return null; // Ce composant ne rend rien
}
