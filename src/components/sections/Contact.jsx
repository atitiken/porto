import React from "react";

export const Contact = () => {
  // Function to handle email button click
  const handleEmailClick = (e) => {
    e.preventDefault();

    const email = "aerielnath@gmail.com";
    const subject = "Let's Connect!";
    const body = "Hi, I’d love to get in touch.";

    const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    const gmailAppLink = `intent://compose?to=${email}&subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}#Intent;scheme=mailto;package=com.google.android.gm;end;`;

    // Check if user is on mobile
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = gmailAppLink; // Open Gmail app
    } else {
      window.open(gmailWebLink, "_blank"); // Open Gmail web in new tab
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative"
      style={{
        background: "linear-gradient(to bottom, #020617, #000)"
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-lg">
          <p className="text-gray-300 text-center mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
          </p>

          <div className="flex justify-center space-x-8">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/aeriel-nathen-9219892a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-lg border border-gray-700 mb-3 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-900/30 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:-translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors">LinkedIn</span>
            </a>

            {/* Email Button */}
            <button
              onClick={handleEmailClick}
              className="flex flex-col items-center group focus:outline-none"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-lg border border-gray-700 mb-3 transition-all duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-900/30 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:-translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-500"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-cyan-500 transition-colors">Email</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
