import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import LocationInfo from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsApp';

export default function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const targetUrl = new URL(anchor.href, window.location.href);
        if (targetUrl.pathname === window.location.pathname) {
          e.preventDefault();
          const targetId = anchor.hash;
          const element = document.querySelector(targetId);
          if (element) {
            const navbarHeight = 96; // matches the h-24 navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const elementHeight = element.getBoundingClientRect().height;
            const remainingSpace = window.innerHeight - navbarHeight;
            
            let offsetPosition = elementPosition + window.scrollY - navbarHeight;
            
            // Center the element vertically in the remaining space
            const centeringOffset = (remainingSpace - elementHeight) / 2;
            offsetPosition -= centeringOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            window.history.pushState(null, '', targetId);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-beige font-sans selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <LocationInfo />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
