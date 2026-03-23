import { Suspense, lazy, useEffect, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AppEnhancements = lazy(() => import("./components/AppEnhancements"));

const RouteFallback = () => (
  <div className="mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <p className="text-sm font-semibold text-muted-foreground">Carregando conteúdo...</p>
  </div>
);

const App = () => {
  const [showEnhancements, setShowEnhancements] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowEnhancements(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      <BrowserRouter>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Pular para o conteúdo principal
        </a>
        <div className="site-shell min-h-screen flex flex-col">
          <Navigation />
          <main id="main-content" className="flex-1">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          {showEnhancements ? (
            <Suspense fallback={null}>
              <AppEnhancements />
            </Suspense>
          ) : null}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
