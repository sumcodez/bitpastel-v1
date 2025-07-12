"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Modal from "@/components/Modal"
import Whatsapp from "@/components/ui/Whatsapp"

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTab, setCurrentTab] = useState<string>("home")
  const [pendingScroll, setPendingScroll] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  // Helper function to determine if a link is active
  const isActive = (href: string) => {
    // Handle root path
    if (href === "/" && pathname === "/") return true
    // Handle hash links (e.g., #services, #stories)
    if (href.includes("#")) {
      const section = href.split("#")[1]
      return pathname.includes(`#${section}`)
    }
    // Handle regular page routes
    return pathname === href || pathname.startsWith(href + "/")
  }

  // Improved scroll to section function
  const scrollToSection = useCallback((sectionId: string, offset = 40) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Update URL hash
      window.history.pushState(null, "", `#${sectionId}`)
      setPendingScroll(null)
    }
  }, [])

  // Handle pending scroll when navigating to homepage
  useEffect(() => {
    if (isHomePage && pendingScroll) {
      // Use a longer timeout to ensure the page is fully loaded
      const timeoutId = setTimeout(() => {
        scrollToSection(pendingScroll)
      }, 300)

      return () => clearTimeout(timeoutId)
    }
  }, [isHomePage, pendingScroll, scrollToSection])

  // Handle hash on page load
  useEffect(() => {
    if (isHomePage) {
      const hash = window.location.hash
      if (hash) {
        const sectionId = hash.substring(1)
        // Delay to ensure DOM is ready
        const timeoutId = setTimeout(() => {
          scrollToSection(sectionId)
        }, 100)

        return () => clearTimeout(timeoutId)
      }
    }
  }, [isHomePage, scrollToSection])

  // Handle link clicks for section navigation
  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()

    if (!isHomePage) {
      // Set pending scroll and navigate to homepage
      setPendingScroll(sectionId)
      router.push("/")
    } else {
      // Already on homepage, scroll directly
      scrollToSection(sectionId)
    }
  }

  // Handle mobile nav clicks
  const handleMobileNavClick = (tabName: string, sectionId?: string) => {
    setCurrentTab(tabName)

    if (sectionId) {
      if (!isHomePage) {
        setPendingScroll(sectionId)
        router.push("/")
      } else {
        scrollToSection(sectionId)
      }
    }
  }

  return (
    <>
      <footer className="footer">
        <div className="desktop-footer bg-primary-dark text-white lg:pt-16 pt-12 lg:pb-6 pb-20 footer">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[90px] lg:gap-8 mb-8 align-top footer-wrapper">
              <div className="lg:space-y-3 col-start-1 lg:col-span-1 lg:col-start-auto">
                <Link href="/" onClick={() => setPendingScroll(null)}>
                  <Image
                    src="/images/Footer-logo.png"
                    alt="Bitpastel Logo"
                    width={196}
                    height={75}
                    className="h-12 w-auto"
                  />
                </Link>
                <p className="lg:hidden leading-[1] block lg:mt-0 mt-8 h-[40px] lg:pb-6 pb-2 type-footer text-[13px]">
                  INFORMATION
                </p>
                <div className="text-[13px] lg:mb-0 mb-[1rem] leading-relaxed block">
                  <a
                    href="https://www.google.com/maps/place/Technopolis+Building/@22.5797323,88.4351652,17z/data=!4m14!1m7!3m6!1s0x3a0275a701908349:0x8d6c12852bc079bc!2sTechnopolis+Building!8m2!3d22.5797323!4d88.4377401!16s%2Fg%2F11hblq2494!3m5!1s0x3a0275a701908349:0x8d6c12852bc079bc!8m2!3d22.5797323!4d88.4377401!16s%2Fg%2F11hblq2494?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline">
                      Technopolis, 11th Floor, BP Block, Sector V,
                      <br />
                      Salt Lake City, Kolkata - 700091
                    </span>
                  </a>
                </div>
                <div className="lg:hidden block space-y-2 text-[13px]">
                  <a className="block text-[13px]" href="tel:+1 (872) 444 6679">
                    <span>US: +1 (872) 444 6679</span>
                  </a>
                  <a className="block text-[13px]" href="tel:+44 2081 446579">
                    <span>UK: +44 2081 446579</span>
                  </a>
                  <a className="block text-[13px]" href="tel:+91 9830 566 248">
                    <span>IN: +91 9830 566 248</span>
                  </a>
                  <a className="mt-4 block text-[13px]" href="mailto:connect@bitpastel.com">
                    <span>connect@bitpastel.com</span>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <p className="mt-6 text-[13px] lg:pb-6 pb-2 type-footer leading-[1]">CONNECT WITH US</p>
                  <div className="flex lg:space-x-4 space-x-6 pt-2 lg:pt-0 social-media-wrapper">
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a href="https://www.facebook.com/bitpastel" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/img_basilfacebooksolid.svg" alt="Facebook" width={16} height={16} />
                      </a>
                    </div>
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a href="https://www.instagram.com/bitpastel.ai/" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/img_mingcuteinstagramfill.svg" alt="Instagram" width={16} height={16} />
                      </a>
                    </div>
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a href="https://www.linkedin.com/company/bitpastel" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/img_uillinkedin.svg" alt="LinkedIn" width={16} height={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:max-w-[300px] mx-auto w-full">
                <p className="h-[50px] type-footer leading-[1] text-[13px]">QUICK LINKS</p>
                <div className="grid grid-cols-2">
                  <div className="">
                    <div className="space-y-4 text-[13px]">
                      <div className="block text-[13px]">
                        <Link
                          href="/"
                          onClick={() => setPendingScroll(null)}
                          className="hover:text-gray-300 transition-colors"
                        >
                          Home
                        </Link>
                      </div>
                      <div className="block text-[13px]">
                        <Link
                          href="/#team"
                          onClick={(e) => handleSectionClick(e, "culture")}
                          className="hover:text-gray-300 transition-colors"
                        >
                          About
                        </Link>
                      </div>
                      <div className="block text-[13px]">
                        <Link
                          href="/#services"
                          onClick={(e) => handleSectionClick(e, "services")}
                          className="hover:text-gray-300 transition-colors"
                        >
                          Services
                        </Link>
                      </div>
                      <div className="block text-[13px]">
                        <Link
                          href="/#stories"
                          onClick={(e) => handleSectionClick(e, "stories")}
                          className="hover:text-gray-300 transition-colors"
                        >
                          Stories
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-auto">
                    <div className="space-y-4 text-[13px]">
                      <Link href="/team" className="block hover:text-gray-300 transition-colors">
                        Culture
                      </Link>
                      <Link
                        href="/#client"
                        onClick={(e) => handleSectionClick(e, "client")}
                        className="block hover:text-gray-300 transition-colors cursor-pointer"
                      >
                        Clientele
                      </Link>
                      <Link href="/career" className="block hover:text-gray-300 transition-colors">
                        Careers
                      </Link>
                      <Link href="/partner" className="block hover:text-gray-300 transition-colors cursor-pointer">
                        Partners
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[13px] lg:space-y-0 space-y-4 lg:ml-auto col-start-1 lg:col-span-1 lg:col-start-auto">
                <p className="lg:hidden block mt-6 text-[13px] lg:pb-6 pb-2 type-footer leading-[1]">CONNECT WITH US</p>
                <div className="lg:hidden flex space-x-4 pt-2 lg:pt-0 social-media-wrapper">
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                    <a href="https://www.facebook.com/bitpastel" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/img_basilfacebooksolid.svg" alt="Facebook" width={16} height={16} />
                    </a>
                  </div>
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                    <a href="https://www.instagram.com/bitpastel.ai/" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/img_mingcuteinstagramfill.svg" alt="Instagram" width={16} height={16} />
                    </a>
                  </div>
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                    <a href="https://www.linkedin.com/company/bitpastel" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/img_uillinkedin.svg" alt="LinkedIn" width={16} height={16} />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="hidden lg:block h-[50px] type-footer leading-[1] text-[13px]">INFORMATION</p>
                  <div className="lg:block hidden mt-0 space-y-4">
                    <a className="block text-[13px]" href="tel:+1 (872) 444 6679">
                      <span>US: +1 (872) 444 6679</span>
                    </a>
                    <a className="block text-[13px]" href="tel:+44 2081 446579">
                      <span>UK: +44 2081 446579</span>
                    </a>
                    <a className="block text-[13px]" href="tel:+91 9830 566 248">
                      <span>IN: +91 9830 566 248</span>
                    </a>
                    <a className="mt-4 block text-[13px]" href="mailto:connect@bitpastel.com">
                      <span>connect@bitpastel.com</span>
                    </a>
                  </div>
                </div>
                <p className="lg:hidden block text-center text-white text-[13px] font-roboto font-[300] lg:max-w-[100%] max-w-[100%] mx-auto">
                  Copyright © Bitpastel Solution Private Limited 2025
                  <br />
                  All Rights Reserved
                  <span className="px-2">|</span>
                  <a href="/privacy-policy">Privacy Policy</a>
                </p>
              </div>
            </div>
            <div className="pt-6 lg:block hidden" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <p className="text-center lg:text-[13px] text-[13px] font-roboto font-[300] lg:max-w-[100%] max-w-[80%] mx-auto">
                Copyright © Bitpastel Solution Private Limited 2025 | All Rights Reserved |{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="root-mobile-nav fixed bottom-0 left-0 right-0 bg-white text-teal-600 shadow-lg lg:hidden z-50">
          <div className="footer-mobile-nav flex justify-around items-center py-2">
            <div
              onClick={() => handleMobileNavClick("home")}
              className={`nav-item flex flex-col items-center ${currentTab === "home" ? "current" : ""}`}
            >
              <Link href="/" onClick={() => setPendingScroll(null)} className="flex flex-col items-center">
                <svg fill="none" height="20" viewBox="0 0 24 21" width="20" className="">
                  <path
                    d="M9.6 13.3382H9.35V13.5882V20.75H3.85V11.1176V10.8676H3.6H0.637691L12 0.340803L23.3623 10.8676H20.4H20.15V11.1176V20.75H14.65V13.5882V13.3382H14.4H9.6Z"
                    stroke="#008B8B"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-[11px] mt-1">Home</span>
              </Link>
            </div>
            <div
              onClick={() => handleMobileNavClick("services", "services")}
              className={`nav-item flex flex-col items-center ${currentTab === "services" ? "current" : ""}`}
            >
              <Link
                href="/#services"
                onClick={(e) => handleSectionClick(e, "services")}
                className="flex flex-col items-center"
              >
                <svg fill="none" height="20" viewBox="0 0 21 21" width="20" className="">
                  <path
                    d="M17.7693 11.494L17.7526 11.633L17.8624 11.7199L20.0543 13.4524L20.0543 13.4524L20.0593 13.4563C20.1627 13.5337 20.1963 13.6691 20.1229 13.8026L18.0241 17.4362L18.0241 17.4362L18.0221 17.4398C17.9524 17.5652 17.8101 17.6114 17.6892 17.5649C17.6888 17.5648 17.6884 17.5646 17.6881 17.5645L15.0788 16.5155L14.9476 16.4628L14.8348 16.5481C14.311 16.9441 13.7391 17.2868 13.1192 17.5398L12.9863 17.594L12.9662 17.7362L12.5724 20.5187L12.5722 20.5187L12.5712 20.5289C12.5589 20.6517 12.4544 20.75 12.3081 20.75H8.10809C7.97586 20.75 7.86228 20.6621 7.82951 20.5108L7.43688 17.7362L7.41676 17.594L7.28382 17.5398C6.66319 17.2865 6.10467 16.9568 5.56898 16.5486L5.456 16.4626L5.32422 16.5155L2.72031 17.5623C2.58309 17.6052 2.44453 17.5542 2.38101 17.4398L2.38104 17.4398L2.37895 17.4362L0.281622 13.8052C0.219213 13.6833 0.252532 13.5302 0.34897 13.4522L2.56573 11.7208L2.68202 11.6299L2.6587 11.4843C2.60846 11.1703 2.58309 10.8291 2.58309 10.5C2.58309 10.1767 2.62051 9.83648 2.67183 9.51575L2.69514 9.37005L2.57886 9.27923L0.360732 7.54673L0.360762 7.54669L0.356844 7.54375C0.253522 7.46626 0.219906 7.33095 0.293255 7.19738L2.39208 3.56379L2.39211 3.56381L2.39413 3.56016C2.46376 3.43483 2.60605 3.38865 2.727 3.43507L5.33735 4.48446L5.46856 4.53721L5.58137 4.45191C6.10516 4.05588 6.67707 3.71322 7.29694 3.46021L7.42988 3.40595L7.45 3.26378L7.84359 0.482435C7.86535 0.339958 7.97252 0.25 8.10809 0.25H12.3081C12.4514 0.25 12.5651 0.34759 12.5857 0.482495C12.5858 0.482775 12.5858 0.483055 12.5859 0.483335L12.9793 3.26378L12.9994 3.40595L13.1324 3.46021C13.753 3.71353 14.3115 4.04322 14.8472 4.45136L14.9602 4.53744L15.092 4.48446L17.6959 3.43766C17.8331 3.39479 17.9717 3.44583 18.0352 3.56016L18.0351 3.56018L18.0372 3.56379L20.1346 7.1948C20.197 7.3167 20.1637 7.46982 20.0672 7.54777C20.0669 7.54803 20.0666 7.54828 20.0663 7.54853L17.8505 9.27923L17.7342 9.37005L17.7575 9.51575C17.8078 9.82998 17.8331 10.158 17.8331 10.5C17.8331 10.8421 17.8078 11.1731 17.7693 11.494ZM6.02059 10.5C6.02059 12.8037 7.9044 14.6875 10.2081 14.6875C12.5118 14.6875 14.3956 12.8037 14.3956 10.5C14.3956 8.1963 12.5118 6.3125 10.2081 6.3125C7.9044 6.3125 6.02059 8.1963 6.02059 10.5Z"
                    stroke="#008B8B"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-[11px] mt-1">Services</span>
              </Link>
            </div>
            <div
              onClick={() => handleMobileNavClick("stories", "stories")}
              className={`nav-item flex flex-col items-center ${currentTab === "stories" ? "current" : ""}`}
            >
              <Link
                href="/#stories"
                onClick={(e) => handleSectionClick(e, "stories")}
                className="flex flex-col items-center"
              >
                <svg
                  xmlSpace="preserve"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M5.184 19.249a1.03 1.03 0 0 1-.124-.007c-.651-.071-.864-.79-.869-1.452a153.58 153.58 0 0 1-.002-1.516v-.383c-.433-.132-.87-.275-1.206-.509-1.247-.866-1.889-2.045-1.905-3.53-.02-1.909-.019-4.191-.001-6.413.018-2.158 1.594-3.753 3.746-4.086.199-.028.414-.043.679-.043 3.002-.002 6.005-.004 9.007-.001 2.115.002 3.894 1.283 4.329 3.33.061.285.093.819.094 1.152.007 1.942.005 3.902 0 5.922-.003 1.048-.331 2.08-.966 2.854-.636.776-1.436 1.178-2.458 1.378-.315.061-.774.04-1.036.041-.66.003-1.331.003-1.979.003-.681 0-1.385 0-2.077.004-.015 0-.05.01-.067.021-1.318.872-2.61 1.734-4.144 2.76-.172.115-.684.475-1.021.475zm5.709-16.988-5.391.003c-.215 0-.384.011-.533.034-1.681.259-2.865 1.615-2.879 3.295-.019 2.215-.018 4.217.002 6.12.012 1.158.514 2.089 1.493 2.769.326.227.714.389 1.186.496l.371.084v.58l-.001.634c-.001.494-.001 1.005.002 1.507.001.126.048.28.264.304a.148.148 0 0 0 .021.001c.06 0 .136-.033.245-.106a920.783 920.783 0 0 1 4.148-2.763c.171-.113.385-.178.588-.179.694-.003 1.399-.004 2.081-.004.648 0 1.317 0 1.975-.003.218-.001.473-.008.71-.054 1.633-.318 2.734-1.661 2.738-3.342.005-2.018.004-4.026-.003-5.966a3.63 3.63 0 0 0-.072-.736c-.339-1.596-1.679-2.67-3.333-2.672-1.202-.002-2.407-.002-3.612-.002z"
                    fill="#008B8B"
                  />
                  <path
                    d="M10.003 6.591c-1.722 0-3.444.002-5.166-.001-.644-.001-1.072-.53-.853-1.053.133-.318.402-.481.772-.514.067-.006.135-.003.203-.003 3.363 0 6.725-.001 10.088.002.147 0 .302.008.441.047.404.112.637.475.576.866-.056.36-.414.647-.834.653-.481.007-.963.002-1.444.002l-3.783.001zM8.262 9.043c-1.143 0-2.286.003-3.429-.001-.609-.003-1.011-.452-.879-.967.083-.322.4-.566.769-.589.054-.003.109-.004.163-.004h6.797c.509 0 .852.234.937.631.101.472-.272.91-.806.925-.496.014-.993.005-1.49.005H8.262zm1.056 1.67c0 .432-.35.782-.782.782H4.711a.782.782 0 1 1 0-1.564h3.825c.432 0 .782.35.782.782z"
                    fill="#008B8B"
                  />
                </svg>
                <span className="text-[11px] mt-1">Stories</span>
              </Link>
            </div>
            <div
              onClick={() => handleMobileNavClick("culture")}
              className={`nav-item flex flex-col items-center ${currentTab === "culture" ? "current" : ""}`}
            >
              <Link href="/culture" className="flex flex-col items-center">
                <svg
                  fill="none"
                  height="24"
                  stroke="#008B8B"
                  viewBox="0 0 24 24"
                  width="24"
                  className="ng-star-inserted"
                >
                  <path
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-[11px] mt-1">Culture</span>
              </Link>
            </div>
            <div
              onClick={() => handleMobileNavClick("career")}
              className={`nav-item flex flex-col items-center ${currentTab === "career" ? "current" : ""}`}
            >
              <Link href="/career" className="flex flex-col items-center">
                <svg
                  xmlSpace="preserve"
                  enableBackground="new 0 0 40 40"
                  height="24px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 40 40"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ng-star-inserted"
                >
                  <g>
                    <path
                      d="M-108.89-148.45c-0.683-1.322-1.774-2.043-3.27-2.069c-1.535-0.026-3.07-0.006-4.606-0.006         c-0.133,0-0.267,0-0.449,0c0-0.153,0-0.283,0-0.413c0-1.105,0.006-2.211-0.002-3.316c-0.013-1.999-1.637-3.637-3.631-3.641         c-4.36-0.008-8.72-0.008-13.081,0c-1.993,0.004-3.62,1.644-3.631,3.641c-0.007,1.226-0.001,2.453-0.001,3.729         c-0.152,0-0.282,0-0.412,0c-1.498,0-2.997-0.001-4.495,0c-1.887,0.002-3.295,1.127-3.726,2.973         c-0.01,0.044-0.045,0.081-0.068,0.122c0,7.078,0,14.156,0,21.234c0.078,0.284,0.115,0.367,0.174,0.549         c0.487,1.5,1.898,2.543,3.476,2.544c10.15,0.003,20.299,0.004,30.449,0c1.705-0.001,3.165-1.153,3.575-2.837         c0.022-0.048,0.059-0.152,0.074-0.256c0-7.078,0-14.156,0-21.234C-108.636-147.771-108.724-148.13-108.89-148.45z          M-134.441-156.342c0.201-0.048,0.412-0.08,0.619-0.08c4.287-0.005,8.573-0.006,12.86-0.001c1.036,0.001,1.882,0.623,2.17,1.565         c0.017,0.056,0.018,0.117,0.029,0.191c-5.75,0-11.484,0-17.217,0C-135.965-155.421-135.174-156.166-134.441-156.342z          M-109.986-139.137c0,4.03,0,8.06,0,12.089c0,1.565-0.907,2.475-2.466,2.475c-9.952,0-19.903,0-29.855,0         c-1.582,0-2.481-0.905-2.481-2.496c0-4.018,0-8.035,0-12.053c0-0.132,0-0.265,0-0.439c1.141,0.345,2.241,0.676,3.34,1.01         c4.56,1.383,9.119,2.769,13.683,4.138c0.25,0.075,0.563,0.057,0.817-0.019c5.535-1.664,11.065-3.343,16.596-5.018         c0.104-0.031,0.21-0.057,0.366-0.099C-109.986-139.381-109.986-139.259-109.986-139.137z M-109.986-141.112         c-1.349,0.408-2.684,0.81-4.018,1.214c-4.338,1.315-8.675,2.633-13.015,3.941c-0.187,0.056-0.417,0.084-0.598,0.03         c-5.711-1.717-11.418-3.447-17.171-5.188c0-0.122,0-0.252,0-0.382c0-1.708-0.001-3.416,0-5.124c0.001-1.513,0.92-2.431,2.435-2.431         c3.846-0.001,7.691,0,11.537-0.001c0.513,0,0.82-0.246,0.849-0.669c0.033-0.479-0.276-0.799-0.79-0.8         c-1.61-0.004-3.219-0.001-4.829-0.001c-0.147,0-0.294,0-0.472,0c0-0.875,0-1.739,0-2.63c5.768,0,11.547,0,17.355,0         c0,0.881,0,1.737,0,2.63c-0.148,0-0.279,0-0.411,0c-1.573,0-3.145,0-4.718,0c-0.635,0-0.975,0.262-0.969,0.745         c0.006,0.479,0.342,0.727,0.987,0.727c3.784,0,7.569,0,11.353,0c1.565,0,2.474,0.906,2.474,2.466c0.001,1.696,0,3.391,0,5.087         C-109.986-141.378-109.986-141.256-109.986-141.112z"
                      fill="#008B8B"
                    />
                    <path
                      d="M-123.926-145.362c-2.307-0.003-4.615-0.003-6.922,0c-0.535,0.001-0.811,0.28-0.812,0.82         c-0.003,1.117-0.003,2.234,0,3.351c0.001,0.563,0.272,0.837,0.832,0.838c1.141,0.003,2.283,0.001,3.424,0.001         c1.154,0,2.307,0.002,3.461-0.001c0.558-0.001,0.83-0.276,0.831-0.839c0.003-1.117,0.003-2.234,0-3.351         C-123.115-145.083-123.39-145.362-123.926-145.362z M-124.592-141.853c-1.854,0-3.701,0-5.573,0c0-0.661,0-1.328,0-2.017         c1.85,0,3.697,0,5.573,0C-124.592-143.181-124.592-142.531-124.592-141.853z"
                      fill="#008B8B"
                    />
                    <path
                      d="M-127.363-149.053c0.406-0.007,0.711-0.314,0.716-0.723c0.006-0.426-0.306-0.746-0.728-0.748         c-0.414-0.001-0.748,0.33-0.744,0.741C-128.115-149.373-127.777-149.047-127.363-149.053z"
                      fill="#008B8B"
                    />
                  </g>
                  <path
                    d="M39.447,14.585c0,6.069,0,12.138,0,18.207c-0.082,0.295-0.151,0.594-0.25,0.883       c-0.692,2.02-2.518,3.285-4.751,3.285c-9.401,0.002-18.802,0.001-28.203,0.001c-0.112,0-0.224-0.001-0.336-0.006       c-2.04-0.094-3.749-1.361-4.415-3.28c-0.1-0.288-0.168-0.588-0.25-0.883c0-6.069,0-12.138,0-18.207       c0.027-0.092,0.066-0.183,0.079-0.277c0.352-2.544,2.764-4.778,5.335-4.864c1.85-0.062,3.704-0.034,5.556-0.047       c0.143-0.001,0.286-0.012,0.452-0.02c0-1.122-0.004-2.202,0.001-3.281c0.008-1.732,1.206-2.975,2.944-2.986       c3.158-0.021,6.316-0.021,9.474,0c1.738,0.012,2.935,1.254,2.944,2.986c0.005,0.957,0.001,1.915,0.001,2.872       c0,0.133,0,0.266,0,0.43c0.194,0,0.342,0,0.489,0c1.604,0,3.208-0.011,4.811,0.002c2.592,0.021,4.496,1.171,5.609,3.529       C39.18,13.447,39.28,14.031,39.447,14.585z M37.204,21.718c-0.504,0.191-0.942,0.41-1.406,0.525       c-3.476,0.864-6.958,1.708-10.438,2.556c-0.772,0.188-0.773,0.184-0.798,0.976c-0.054,1.709-1.138,2.761-2.848,2.762       c-0.982,0.001-1.964,0.005-2.947-0.002c-0.833-0.006-1.511-0.344-2.045-0.982c-0.531-0.634-0.629-1.39-0.588-2.173       c0.017-0.316-0.101-0.425-0.39-0.494c-2.76-0.665-5.517-1.338-8.273-2.018c-1.07-0.264-2.137-0.542-3.2-0.834       c-0.264-0.072-0.506-0.223-0.785-0.35c0,3.505-0.006,6.961,0.006,10.417c0.002,0.58,0.172,1.124,0.544,1.592       c0.589,0.742,1.37,1,2.294,0.999c7.161-0.009,14.323-0.005,21.484-0.005c2.188,0,4.376-0.004,6.565,0.002       c0.65,0.002,1.257-0.112,1.786-0.516c0.753-0.575,1.039-1.362,1.038-2.281c-0.001-3.27,0-6.54,0-9.81       C37.204,21.964,37.204,21.844,37.204,21.718z M24.554,22.634c0.075,0,0.114,0.007,0.148-0.001c3.54-0.865,7.084-1.716,10.618-2.608       c1.029-0.26,1.686-0.983,1.813-2.043c0.1-0.834,0.069-1.687,0.067-2.531c-0.005-2.201-1.588-3.78-3.784-3.785       c-1.952-0.004-3.904-0.001-5.856-0.001c-6.764,0-13.528-0.002-20.292,0.001c-2.013,0.001-3.537,1.314-3.741,3.307       c-0.094,0.922-0.077,1.867-0.004,2.793c0.096,1.235,0.825,2.02,2.028,2.315c3.419,0.838,6.841,1.668,10.261,2.5       c0.101,0.025,0.203,0.041,0.308,0.062c0.217-1.827,1.609-2.633,3.052-2.545c0.892,0.054,1.791-0.016,2.685,0.022       c0.4,0.017,0.823,0.098,1.185,0.262C23.977,20.81,24.456,21.59,24.554,22.634z M25.747,9.378c0.01-0.131,0.024-0.228,0.024-0.325       c0.002-0.957,0.004-1.914,0-2.871c-0.003-0.616-0.186-0.805-0.798-0.806c-3.082-0.003-6.164-0.003-9.246,0       c-0.629,0.001-0.807,0.189-0.809,0.833c-0.003,0.92,0.015,1.84-0.009,2.759c-0.009,0.344,0.092,0.438,0.435,0.436       c3.33-0.012,6.661-0.007,9.991-0.008C25.467,9.397,25.6,9.385,25.747,9.378z M18.396,24.335c0,0.485,0.008,0.97-0.003,1.455       c-0.007,0.326,0.143,0.499,0.459,0.502c0.995,0.008,1.99,0.007,2.985,0c0.29-0.002,0.459-0.147,0.457-0.464       c-0.005-0.995-0.006-1.99,0.001-2.985c0.002-0.335-0.168-0.483-0.476-0.485c-0.982-0.006-1.965-0.006-2.947,0       c-0.335,0.002-0.488,0.178-0.479,0.522C18.407,23.365,18.396,23.85,18.396,24.335z"
                    fill="#008B8B"
                  />
                </svg>
                <span className="text-[11px] mt-1">Careers</span>
              </Link>
            </div>
            <div
              onClick={() => handleMobileNavClick("contact")}
              className={`nav-item flex flex-col items-center ${currentTab === "contact" ? "current" : ""}`}
            >
              <button
                className={`flex flex-col items-center ${isModalOpen ? "modal-open" : ""}`}
                onClick={() => setIsModalOpen(true)}
              >
                <svg fill="none" height="20" viewBox="0 0 23 23" width="20" className="ng-star-inserted">
                  <path
                    d="M21.9577 16.7225V19.8839C21.9589 20.1774 21.8988 20.4679 21.7812 20.7368C21.6637 21.0057 21.4912 21.247 21.275 21.4454C21.0587 21.6438 20.8034 21.7949 20.5254 21.8889C20.2474 21.9829 19.9528 22.0179 19.6605 21.9914C16.4178 21.6391 13.303 20.5311 10.5664 18.7563C8.02024 17.1384 5.86158 14.9798 4.24367 12.4336C2.46275 9.68454 1.35445 6.55458 1.00855 3.29735C0.98222 3.00594 1.01685 2.71225 1.11024 2.43496C1.20364 2.15767 1.35374 1.90287 1.551 1.68677C1.74827 1.47067 1.98837 1.29802 2.25601 1.1798C2.52366 1.06157 2.81299 1.00038 3.10558 1.0001H6.26693C6.77833 0.995069 7.27412 1.17617 7.66188 1.50964C8.04964 1.84311 8.30292 2.30621 8.37449 2.81261C8.50792 3.82431 8.75538 4.81767 9.11214 5.77374C9.25392 6.15091 9.2846 6.56082 9.20056 6.9549C9.11651 7.34898 8.92126 7.71071 8.63794 7.99722L7.29963 9.33552C8.79975 11.9737 10.9841 14.1581 13.6223 15.6582L14.9606 14.3199C15.2471 14.0366 15.6089 13.8413 16.0029 13.7573C16.397 13.6732 16.8069 13.7039 17.1841 13.8457C18.1402 14.2025 19.1335 14.4499 20.1452 14.5834C20.6571 14.6556 21.1246 14.9134 21.4588 15.3078C21.793 15.7022 21.9706 16.2057 21.9577 16.7225Z"
                    stroke="#008B8B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-[11px] mt-1">Contact</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Whatsapp />
    </>
  )
}

export default Footer
