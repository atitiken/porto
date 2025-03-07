import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import python from "../../assets/python.png";
import machinelearn from "../../assets/machinelearning.png";
import deeplearn from "../../assets/deeplearning.png";
import comvis from "../../assets/computervision.png";
import dataclean from "../../assets/datacleaning.png";
import ethics from "../../assets/AIethics.png";
import explain from "../../assets/explain.png";

export const Certifications = () => {
  // Certification data
  const certificationsList = [
    {
      id: 1,
      title: "Python",
      link: "https://www.kaggle.com/learn/certification/aerielnathen/python",
      image: python,
    },
    {
      id: 2,
      title: "Intro to Machine Learning",
      link: "https://www.kaggle.com/learn/certification/aerielnathen/intro-to-machine-learning",
      image: machinelearn,
    },
    {
      id: 3,
      title: "Intro to Deep Learning",
      link: "https://www.kaggle.com/learn/certification/aerielnathen/intro-to-deep-learning",
      image: deeplearn,
    },
    {
      id: 4,
      title: "Computer Vision",
      link: "https://www.kaggle.com/learn/certification/aerielnathen/computer-vision",
      image: comvis,
    },
    {
      id: 5,
      title: "Data Cleaning",
      link: "https://www.kaggle.com/learn/certification/aerielnathen/data-cleaning",
      image: dataclean,
    },
    {
      id: 6,
      title: "Intro To AI Ethics",
      link: "https://www.kaggle.com/learn/certification/aerielnathen/intro-to-ai-ethics",
      image: ethics,
    },
    {
      id: 7,
      title: "Machine Learning Explainability",
      link: "https://www.kaggle.com/learn/certification/aerielnathen/machine-learning-explainability",
      image: explain,
    },
  ];

  // State to track which certification card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="certifications"
      className="py-20 bg-[#0a041a] bg-opacity-90 relative"
    >
      {/* Background decoration - subtle gradient orbs */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-16 text-center">
            My <span className="text-blue-500">Certifications</span>
          </h2>

          {/* Gradient line underneath the heading */}
          <div className="w-full max-w-lg mx-auto h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-16"></div>

          {/* Main certifications container */}
          <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            <p className="text-gray-300 mb-8 text-center">
              Professional certifications that validate my expertise in AI,
              machine learning, and software development.
            </p>

            {/* Grid of certification cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsList.map((cert) => (
                <div
                  key={cert.id}
                  className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setHoveredCard(cert.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Background image with gradient overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/80 to-transparent"></div>
                  </div>

                  {/* Content with hover animation */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-2"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Expandable description using opacity transition */}
                    <div
                      className="overflow-hidden transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                      style={{ willChange: "opacity" }}
                    >
                      <p className="text-gray-300 text-sm mb-3">
                        This certification validates technical skills and expertise in{" "}
                        {cert.title.toLowerCase()}.
                      </p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600/30 text-blue-300 border border-blue-500/50 py-1 px-4 rounded-full text-sm hover:bg-blue-500/50 transition-colors"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>

                  {/* Animated border effect on hover */}
                  <div
                    className={`absolute inset-0 border-2 rounded-xl transition-all duration-300 pointer-events-none ${
                      hoveredCard === cert.id
                        ? "border-blue-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                        : "border-transparent"
                    }`}
                    style={{ willChange: "box-shadow" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
