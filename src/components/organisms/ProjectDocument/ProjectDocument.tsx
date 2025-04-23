import { Typography } from "@/components/atoms/Typography/Typography";
import React, { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";

type DocumentItem = {
  name: string;
  download: string;
};

type ProjectDocumentProps = {
  documents: DocumentItem[];
  title?: string;
};

export const ProjectDocument = ({
  documents,
  title = "Documents du projet",
}: ProjectDocumentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quand le composant devient visible dans le viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois que l'élément est visible, on peut arrêter d'observer
          observer.disconnect();
        }
      },
      {
        // Options: le seuil à 0.3 signifie que l'animation se déclenche
        // quand au moins 30% du composant est visible
        threshold: 0.3,
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup observer
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  if (!documents || documents.length === 0) {
    return null;
  }

  // Déterminer le placement de la grille en fonction du nombre de documents
  const gridClasses =
    documents.length === 1
      ? "flex justify-center w-full max-w-6xl"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl";

  // Largeur du document unique
  const documentWidth =
    documents.length === 1 ? "w-full md:w-2/3 lg:w-1/3" : "";

  return (
    <section
      ref={componentRef}
      className={`container mx-auto pb-24 flex justify-center items-center flex-col text-center ${isVisible ? "animate-fade-left animate-delay-300" : "opacity-0"}`}
    >
      <Typography
        weight="bold"
        marginClassName="mb-8"
        variant="h1"
        animated
        align="center"
      >
        <span className="bg-gradient-to-t from-green-300 to-teal-100 bg-clip-text text-transparent">
          {title}
        </span>
      </Typography>

      <div className={gridClasses}>
        {documents.map((doc, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg flex flex-col items-center ${documentWidth} ${isVisible ? `animate-fade-up animate-delay-${(index + 1) * 100}` : "opacity-0"}`}
          >
            <div className="flex items-center justify-between w-full">
              <h3 className="text-lg font-semibold">{doc.name}</h3>
              <a
                href={doc.download}
                download
                className="text-purple-500 hover:text-purple-800 transition-colors"
                title={`Télécharger ${doc.name}`}
              >
                <FaDownload size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
