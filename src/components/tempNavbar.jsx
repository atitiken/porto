import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    // This effect controls body scrolling when the mobile menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  
  // Handle smooth scrolling for navigation links
  const handleNavLinkClick = (e) => {
    e.preventDefault();
    
    // Get the target element id from the href attribute
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    // Check if the element exists before attempting to scroll
    if (targetElement) {
      // Close the mobile menu if it's open
      if (menuOpen) {
        setMenuOpen(false);
      }
      
      // Calculate header height to offset the scroll position
      const navbarHeight = 64; // This is equivalent to h-16 (4rem or 64px)
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      // Perform the smooth scroll
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        {/* Centered flex container with items evenly spaced */}
        <div className="flex justify-center items-center h-16 relative">
          {/* Mobile menu toggle button positioned absolutely on the left */}
          <div
            className="w-7 h-5 absolute left-0 cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Navigation links with hover effect and smooth scrolling */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md relative hover:bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={handleNavLinkClick}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md relative hover:bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={handleNavLinkClick}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md relative hover:bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={handleNavLinkClick}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md relative hover:bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={handleNavLinkClick}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};