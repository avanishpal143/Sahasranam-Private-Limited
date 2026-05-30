import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Global Lenis Smooth Momentum Scroll initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50/25 relative overflow-hidden">
        {/* Global Premium Background Energy Blobs */}
        <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden">
          {/* Top Left Teal Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-teal-300/10 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDuration: '9s' }} />
          {/* Middle Right Gold Glow */}
          <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-amber-200/8 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDuration: '12s' }} />
          {/* Bottom Left Sky Glow */}
          <div className="absolute bottom-[-10%] left-[5%] w-[48vw] h-[48vw] max-w-[580px] max-h-[580px] bg-sky-200/10 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDuration: '10s' }} />
        </div>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
