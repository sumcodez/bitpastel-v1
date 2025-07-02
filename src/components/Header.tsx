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

  // Check if current page is the career apply page
  const isCareerApplyPage = pathname.startsWith('/career/applyJob/');

  // Combine scrolled state with career apply page check
  const shouldApplyScrolledStyle = isScrolled || isCareerApplyPage;

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
      activeSection === section ? 'text-accent-green' : shouldApplyScrolledStyle ? 'text-gray-800' : 'text-primary-white'
    } hover:text-accent-green`;
  };

  const logoSrc = shouldApplyScrolledStyle
    ? '/images/bitpastel_logo_pastel.png'
    : '/images/img_bitpastellogo02300dpi_1.png';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-[background] md:h-[70px] h-[50px] border-b content-center duration-200 ${
        shouldApplyScrolledStyle ? 'bg-[#ffffff] border-[#f5f5f5]' : 'bg-transparent border-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex md:justify-between justify-center items-center">
            <Link href="/">
              <Image src={logoSrc} alt="Logo" width={110} height={70} className="md:h-12 h-8 w-[122px] object-contain" />
            </Link>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="/#services" onClick={(e) => handleLinkClick(e, 'services')} className={getLinkClass('services')}>
                Services
              </Link>
              <Link href="/#stories" onClick={(e) => handleLinkClick(e, 'stories')} className={getLinkClass('stories')}>
                Stories
              </Link>
              <Link href="/team" className={shouldApplyScrolledStyle ? 'text-primary-white hover:text-accent-green' : 'text-primary-white hover:text-accent-green'}>
                Culture
              </Link>
              <button className="bg-green-btn px-5 text-primary-white py-2 rounded hover:bg-opacity-90"
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