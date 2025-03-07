import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useRef } from "react";
import { SiPytorch, SiTensorflow, SiKaggle, SiReact, SiHtml5, SiC } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export const Home = () => {
  const logosContainerRef = useRef(null);

  useEffect(() => {
    const container = logosContainerRef.current;
    if (!container) return;

    const logoItems = container.querySelectorAll(".tech-logo-item");

    // Apply waving effect using CSS animation
    logoItems.forEach((item, index) => {
      item.style.animation = `waveEffect 2s ease-in-out ${index * 0.15}s infinite alternate`;
    });
  }, []);

  // Handle smooth scrolling for buttons
  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbarHeight = 64; // Adjust for fixed navbar height
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // Skill Logos
  const techLogos = [
    { name: "PyTorch", color: "#EE4C2C", icon: <SiPytorch /> },
    { name: "TensorFlow", color: "#FF6F00", icon: <SiTensorflow /> },
    { name: "Python", color: "#3776AB", icon: <FaPython /> },
    { name: "React", color: "#61DAFB", icon: <SiReact /> },
    { name: "HTML", color: "#E34F26", icon: <SiHtml5 /> },
    { name: "C", color: "#A8B9CC", icon: <SiC /> },
    { name: "Kaggle", color: "#20BEFF", icon: <SiKaggle /> },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative pb-16 pt-16 md:pt-24"
      style={{ background: "linear-gradient(to bottom, black, #020617)" }}
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Aeriel Nathen
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Computer Science Undergraduate  
            Aspiring AI & Deep Learning Researcher  
            (Computer Vision Focus)
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              onClick={(e) => handleNavLinkClick(e, "#projects")}
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, "#contact")}
              className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition hover:bg-blue-500/10 cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Tech Skills Section */}
      <RevealOnScroll>
        <div className="mt-24 px-4 w-full max-w-2xl">
          <h2 className="text-xl text-center text-gray-300 mb-6 font-medium">Skills</h2>
          <div ref={logosContainerRef} className="flex flex-wrap justify-center gap-4">
            {techLogos.map((tech, index) => (
              <div
                key={index}
                className="tech-logo-item flex flex-col items-center justify-center p-3 border border-gray-700 rounded-lg w-24 h-24 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: `${tech.color}10`,
                  color: tech.color,
                }}
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="text-xs text-gray-300">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Waving Animation Style */}
      <style jsx>{`
        @keyframes waveEffect {
          0% { transform: translateY(0); }
          100% { transform: translateY(5px); }
        }
        .tech-logo-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Home;
