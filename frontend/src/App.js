import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { useLenis } from "@/hooks/useLenis";
import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { SkillsMarquee } from "@/components/portfolio/SkillsMarquee";
import { Projects } from "@/components/portfolio/Projects";
import { EducationLanguages } from "@/components/portfolio/EducationLanguages";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const PortfolioPage = () => {
  useLenis();
  return (
    <div className="App grain">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <SkillsMarquee />
        <Projects />
        <EducationLanguages />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#121212",
            color: "#f2f0e9",
            border: "1px solid #262626",
            borderRadius: 0,
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
