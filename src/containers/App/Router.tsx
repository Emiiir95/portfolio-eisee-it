import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../components/pages/HomePage";
import { Veille } from "@/components/pages/VeillePage";
import { BilanPage } from "@/components/pages/BilanPage";
import { ProjetPage } from "@/components/pages/ProjetPage";
import { EntreprisePage } from "@/components/pages/EntreprisePage";
import { RealisationPage } from "@/components/pages/RealisationPage/RealisationPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="Veille" element={<Veille />} />
      <Route path="Bilan" element={<BilanPage />} />
      <Route path="Projet" element={<ProjetPage />} />
      <Route path="Entreprise" element={<EntreprisePage />} />
      <Route path="Realisation/:url" element={<RealisationPage />} />
    </Routes>
  );
};
