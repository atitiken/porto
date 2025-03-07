import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useRef } from "react";
import profilePic from "../../assets/foto.jpg";


export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "JavaScript", "HTML/CSS"];
  const backendSkills = ["Node.js", "Python",];
  const mlSkills = ["Pandas", "TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision"];

  const profileContainerRef = useRef(null);

  useEffect(() => {
    const profileContainer = profileContainerRef.current;
    if (!profileContainer) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = profileContainer.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      
      profileContainer.style.background = `linear-gradient(130deg, #0d47a1 ${x * 100}%, #1976d2 ${y * 100}%)`;
      profileContainer.style.backgroundOrigin = "border-box";
      profileContainer.style.backgroundClip = "padding-box, border-box";
    };

    profileContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      profileContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="min-h-screen py-20 bg-[#020617] bg-opacity-90 relative">
      {/* Twinkling stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: Math.random() * 2 + "px",
              height: Math.random() * 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-16 text-center">
            About <span className="text-blue-500">Me</span>
          </h2>

          {/* Gradient line */}
          <div className="w-full max-w-lg mx-auto h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-16"></div>

          <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
            {/* Profile Image */}
            <div 
              ref={profileContainerRef}
              className="w-72 h-72 rounded-2xl p-1 bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg transition-all"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <img 
                  src={profilePic}
                  alt="AerielNathen" 
                  className="w-full h-full object-cover"
                />
                {/* Updated decorative borders in blue */}
                <div className="absolute -top-2 -left-2 w-72 h-72 border-2 border-blue-800 rounded-2xl transform rotate-3"></div>
                <div className="absolute -bottom-2 -right-2 w-72 h-72 border-2 border-blue-800 rounded-2xl transform -rotate-2"></div>
              </div>
            </div>

            {/* About Me Text */}
            <div className="flex-1">
              <p className="text-gray-300 mb-6">
                I excel in deep learning and AI research focused on computer vision. My work has led to projects like Staff Monitoring Systems and innovative bone fracture detection solutions—harnessing cutting-edge machine learning techniques for real-world applications.
              </p>
              <p className="text-gray-300 mb-6">
                In terms of leadership, I've gained valuable experience as a Binus freshmen leader and partner. I thrive in collaborative environments and am always eager to tackle new challenges to expand my technical expertise.
              </p>

              {/* Skills Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technical Skills</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Frontend */}
                  <div className="rounded-xl p-4 bg-blue-900/20 border border-blue-900/50 hover:-translate-y-1 transition-all duration-300">
                    <h4 className="text-lg font-medium mb-3 text-center text-blue-300">Frontend</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {frontendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                          hover:shadow-[0_2px_8px_rgba(25,118,210,0.4)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="rounded-xl p-4 bg-blue-900/20 border border-blue-900/50 hover:-translate-y-1 transition-all duration-300">
                    <h4 className="text-lg font-medium mb-3 text-center text-blue-300">Backend</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {backendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                          hover:shadow-[0_2px_8px_rgba(25,118,210,0.4)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Machine Learning */}
                <div className="rounded-xl p-4 mt-6 bg-blue-900/20 border border-blue-900/50 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-lg font-medium mb-3 text-center text-blue-300">Machine Learning</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {mlSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(25,118,210,0.4)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="flex flex-col items-center mt-16">
            <div className="p-6 rounded-xl bg-blue-900/20 border border-blue-900/50 hover:-translate-y-1 transition-all text-center w-full max-w-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">🏫 Education</h3>
              <ul className="list-none text-gray-300 space-y-2">
                <li>
                  <strong className="text-blue-300">Computer Science</strong> - Binus University (2023-2027)
                </li>
                <li>Relevant Coursework: Data Structures, Web Development, AI Development, Machine Learning, Computer Vision</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default About;
