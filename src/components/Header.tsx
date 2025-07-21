"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Modal from "@/components/Modal"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
const isNavigating = useRef(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [pendingScroll, setPendingScroll] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"
  const [isModalOpen, setIsModalOpen] = useState(false)


  useEffect(() => {
    setIsModalOpen(false)
  },[pathname])

    const handleNavigation = useCallback((path: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (isNavigating.current) return
    isNavigating.current = true
    router.push(path)
    isNavigating.current = false
  }, [router])

  // Check if current page is the career apply page
  const isCareerApplyPage =
    pathname.startsWith("/careers/applyJob/") || pathname.startsWith("/partner") || pathname.startsWith("/privacy")

  // Combine scrolled state with career apply page check
  const shouldApplyScrolledStyle = isScrolled || isCareerApplyPage

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

      // Update URL hash and active section
      window.history.pushState(null, "", `#${sectionId}`)
      setActiveSection(sectionId)
      setPendingScroll(null)
    }
  }, [])

  // Handle scroll and active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)

      const sections = ["services", "stories"]
      let currentSection = null

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          const top = rect.top
          const bottom = rect.bottom

          // Check if section is in viewport (with some offset)
          if (top <= 100 && bottom >= 100) {
            currentSection = section
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle pending scroll when navigating to homepage
  useEffect(() => {
    if (isHomePage && pendingScroll) {
      // Use a longer timeout to ensure the page is fully loaded
      const timeoutId = setTimeout(() => {
        scrollToSection(pendingScroll)
      }, 100)

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

  // Handle link clicks
  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
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

  const getLinkClass = (section: string) => {
    return `transition-colors duration-200 ${
      activeSection === section ? "text-accent-green" : shouldApplyScrolledStyle ? "text-title" : "text-primary-white"
    } hover:text-accent-green`
  }

  const logoSrc = shouldApplyScrolledStyle ? "#009999" : "#ffffff"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background] md:h-[70px] h-[50px] border-b content-center duration-200 ${
          shouldApplyScrolledStyle ? "bg-[#ffffff] border-b border-[#f5f5f5]" : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex lg:justify-between justify-center header-logo items-center">
            <Link href="/" onClick={() => setPendingScroll(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="70" viewBox="0 0 1846 516" fill="none">
                <path
                  d="M259.356 256.861C259.356 328.406 200.819 385.859 128.19 385.859C96.7534 385.859 68.0274 373.393 45.8054 354.422L0.276367 385.859V1.03394H45.8054V164.721C68.0274 144.124 96.2124 131.117 128.19 131.117C200.819 131.116 259.356 185.316 259.356 256.861ZM45.8054 256.861C45.8054 301.848 81.5774 337.621 128.19 337.621C173.718 337.621 210.033 301.849 210.033 256.861C210.033 212.417 173.718 179.896 128.19 179.896C81.5784 179.896 45.8054 212.417 45.8054 256.861Z"
                  fill={logoSrc}
                />
                <path
                  d="M353.112 59.0289C353.112 76.9149 337.394 92.0909 318.966 92.0909C300.538 92.0909 284.82 76.9149 284.82 59.0289C284.82 40.5999 300.538 25.4249 318.966 25.4249C337.394 25.4249 353.112 40.6009 353.112 59.0289ZM342.271 135.452V380.439H295.116V135.452H342.271Z"
                  fill={logoSrc}
                />
                <path
                  d="M457.174 68.7849V136.536H497.825V183.148H457.174V380.439H410.02V183.148H369.369V136.536H410.02V68.7849H457.174Z"
                  fill={logoSrc}
                />
                <path
                  d="M569.903 352.255V515.942H524.374V131.116L569.903 162.552C592.125 143.582 623.02 131.116 654.456 131.116C727.085 131.116 783.996 186.4 783.996 257.945C783.996 329.491 727.085 385.859 654.456 385.859C622.478 385.859 592.125 372.852 569.903 352.255ZM734.674 257.945C734.674 213.501 699.986 179.354 654.457 179.354C607.844 179.354 569.904 213.5 569.904 257.945C569.904 302.932 607.844 337.079 654.457 337.079C699.985 337.079 734.674 302.933 734.674 257.945Z"
                  fill={logoSrc}
                />
                <path
                  d="M1019.76 164.721V136.536H1062.58V385.859L1019.76 354.964C997.539 373.935 967.187 385.859 935.751 385.859C863.122 385.859 804.043 329.491 804.043 259.029C804.043 188.568 863.122 131.116 935.751 131.116C967.729 131.116 997.539 144.124 1019.76 164.721ZM853.365 259.029C853.365 302.932 890.222 338.705 935.751 338.705C981.821 338.705 1019.76 302.933 1019.76 259.029C1019.76 215.127 981.822 179.354 935.751 179.354C890.222 179.354 853.365 215.127 853.365 259.029Z"
                  fill={logoSrc}
                />
                <path
                  d="M1244.69 171.225L1212.71 197.784C1204.58 185.86 1192.11 178.813 1175.85 178.813C1155.26 178.813 1149.84 187.485 1149.84 200.494C1149.84 243.312 1255.53 227.595 1255.53 307.269C1255.53 356.049 1211.08 385.86 1163.39 385.86C1135.2 385.86 1105.39 371.226 1089.13 346.294L1123.28 317.025C1132.49 328.407 1147.12 338.706 1163.38 338.706C1185.61 338.706 1208.37 327.865 1208.37 307.269C1207.83 262.283 1102.68 280.168 1102.68 198.868C1102.68 165.805 1127.61 131.117 1175.85 131.117C1204.04 131.116 1228.43 145.75 1244.69 171.225Z"
                  fill={logoSrc}
                />
                <path
                  d="M1355.25 68.7849V136.536H1395.9V183.148H1355.25V380.439H1308.1V183.148H1267.45V136.536H1308.1V68.7849H1355.25Z"
                  fill={logoSrc}
                />
                <path
                  d="M1639.26 200.493L1469.62 314.314C1483.71 328.949 1505.39 338.163 1529.78 338.163C1552.54 338.163 1573.68 329.491 1589.4 315.398L1624.63 345.751C1600.24 370.142 1566.63 385.859 1529.78 385.859C1457.15 385.859 1398.07 328.949 1398.07 258.487C1398.07 188.568 1457.15 131.116 1529.78 131.116C1580.73 131.116 1619.21 160.926 1639.26 200.493ZM1572.05 195.072C1566.09 185.859 1551.46 178.812 1529.78 178.812C1484.25 178.812 1447.39 214.584 1447.39 258.487C1447.39 265.534 1447.93 273.122 1449.02 279.084L1572.05 195.072Z"
                  fill={logoSrc}
                />
                <path d="M1709.18 1.03394V380.439H1662.02V1.03394H1709.18Z" fill={logoSrc} />
                <path
                  d="M1845.35 55.013C1845.35 85.389 1820.83 109.24 1791.13 109.24C1762.77 109.24 1738.25 84.939 1738.25 55.239C1738.25 25.088 1762.78 0.786987 1791.8 0.786987C1820.83 0.786987 1845.35 25.087 1845.35 55.013ZM1750.85 55.238C1750.85 78.413 1769.53 97.539 1791.13 97.539C1814.08 97.539 1832.53 79.088 1832.53 55.013C1832.53 31.837 1813.85 12.712 1791.8 12.712C1769.53 12.711 1750.85 31.837 1750.85 55.238ZM1791.13 22.837C1810.03 22.837 1817.45 30.712 1817.45 42.637C1817.45 51.637 1812.05 58.838 1797.2 59.738L1816.78 86.289H1804.18L1784.82 61.313H1783.93V86.289H1771.1V22.837H1791.13ZM1790.9 49.837H1791.58C1800.58 49.837 1803.73 46.237 1803.73 42.637C1803.28 37.462 1800.58 34.762 1790.9 34.762H1783.93V49.837H1790.9Z"
                  fill={logoSrc}
                />
              </svg>
            </Link>
            <nav className="hidden lg:flex space-x-8 items-center">
              <button
                onClick={(e) => handleLinkClick(e, "services")}
                className={getLinkClass("services")}
              >
                Services
              </button>
              <button  onClick={(e) => handleLinkClick(e, "stories")} className={getLinkClass("stories")}>
                Stories
              </button>
              <Link
                href="/culture"
                onClick={(e) => handleNavigation("/culture", e)}
                className={`${shouldApplyScrolledStyle ? "text-title" : "text-primary-white"} hover:text-accent-green transition-colors duration-200`}
              >
                Culture
              </Link>
              <button
                className="bg-green-btn px-5 text-primary-white py-2 rounded hover:bg-opacity-90 transition-all duration-200"
                // onClick={() => setIsModalOpen(true)}
                onClick={() => router.push('/free-quote', { scroll: false })}
              >
                Chat with Us
              </button>
            </nav>
          </div>
        </div>
      </header>
      <Modal open={isModalOpen} onClose={() => router.push('/', { scroll: false })} />
    </>
  )
}

export default Header
