'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';
    const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle scroll and active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      const sections = ['services', 'stories'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;
          if (scrollTop >= top && scrollTop < bottom) {
            setActiveSection(section);
            return;
          }
        }
      }

      setActiveSection(null);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section on page load if there's a hash
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [isHomePage]);

  // Handle link clicks
  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    if (!isHomePage) {
      // Navigate to homepage and preserve hash (client-side)
      router.push(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
        window.history.pushState(null, '', `#${sectionId}`);
        setActiveSection(sectionId);
      }
    }
  };

  const getLinkClass = (section: string) => {
    return `transition-colors ${
      activeSection === section ? 'text-accent-green' : isScrolled ? 'text-gray-800' : 'text-white'
    } hover:text-accent-green`;
  };

  const logoSrc = isScrolled
    ? '/images/img_bitpastellogo02300dpi_3.png'
    : '/images/img_bitpastellogo02300dpi_1.png';

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex md:justify-between justify-center items-center md:py-6 py-4">
          <Link href="/">
            <Image src={logoSrc} alt="Logo" width={125} height={48} className="md:h-12 h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/#services" onClick={(e) => handleLinkClick(e, 'services')} className={getLinkClass('services')}>
              Services
            </Link>
            <Link href="/#stories" onClick={(e) => handleLinkClick(e, 'stories')} className={getLinkClass('stories')}>
              Stories
            </Link>
            <Link href="/team" className={isScrolled ? 'text-gray-800 hover:text-primary-teal' : 'text-white hover:text-primary-teal'}>
              Culture
            </Link>
            <button className="bg-green-btn px-5 py-2 text-white rounded hover:bg-opacity-90"
            onClick={() => setIsModalOpen(true)}
            >Chat with Us</button>
          </nav>
        </div>
      </div>
    </header>
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
