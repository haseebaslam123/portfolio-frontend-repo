import { useEffect } from 'react';

function MobileHandler() {
  useEffect(() => {
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      console.log("Mobile detected - Applying fixes"); // Debug line
      
      // Apply mobile fixes directly via JavaScript
      document.documentElement.style.fontSize = '16px';
      document.documentElement.style.width = '100vw';
      document.documentElement.style.overflowX = 'hidden';
      
      document.body.style.width = '100vw';
      document.body.style.overflowX = 'hidden';
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      
      // Fix all sections
      const sections = document.querySelectorAll('section#home, section#about, section#skills, section#projects, section#contact');
      sections.forEach(section => {
        section.style.minHeight = '100vh';
        section.style.width = '100vw';
        section.style.maxWidth = '100vw';
        section.style.padding = '90px 20px 30px 20px';
        section.style.boxSizing = 'border-box';
        section.style.overflowX = 'hidden';
      });
      
      // Fix header navigation
      const header = document.querySelector('header.header');
      if (header) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100vw';
        header.style.zIndex = '9999';
        header.style.padding = '15px';
      }
      
      const nav = document.querySelector('header.header nav.nav');
      if (nav) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '8px';
        nav.style.width = '100%';
      }
      
      const navLinks = document.querySelectorAll('header.header nav.nav a, header.header nav.nav button');
      navLinks.forEach(link => {
        link.style.display = 'block';
        link.style.width = '100%';
        link.style.textAlign = 'left';
        link.style.padding = '12px 15px';
        link.style.fontSize = '14px';
        link.style.margin = '0';
      });
      
      // Fix images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
      });
      
      // Fix home section layout
      const home = document.querySelector('.home');
      if (home) {
        home.style.flexDirection = 'column';
        home.style.textAlign = 'center';
      }
      
      const homeLeft = document.querySelector('.home-left');
      const homeRight = document.querySelector('.home-right');
      if (homeLeft) homeLeft.style.width = '100%';
      if (homeRight) homeRight.style.width = '100%';
      
      // Fix about section
      const about = document.querySelector('.about');
      if (about) {
        about.style.flexDirection = 'column';
        about.style.textAlign = 'center';
      }
      
      const aboutLeft = document.querySelector('.about-left');
      const aboutRight = document.querySelector('.about-right');
      if (aboutLeft) aboutLeft.style.width = '100%';
      if (aboutRight) aboutRight.style.width = '100%';
    }
    
    // Re-apply on window resize
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        window.location.reload(); // Force reload on orientation change
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);

  return null; // This component doesn't render anything
}

export default MobileHandler;