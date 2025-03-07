import React, { useState, useEffect } from "react";

const FloatingIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    // Set a delay of 3 seconds before showing the icons
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <>
      {showIcons && (
        <div className="floating-icons">
          {/* WhatsApp Image */}
          <a
            href="https://wa.me/918870173384"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-image"
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/whatsapp.png`} // Replace with your actual WhatsApp image path
              alt="WhatsApp"
              className="whatsapp-floating"
            />
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingIcons;
