import { motion, useAnimation } from "framer-motion";
import { React,useEffect } from "react";
import "./header.css";

export default function Header() {
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY + 50) {
            controls.start({ opacity: 0, y: -50, transition: { duration: 0.4 } });
          } else if (window.scrollY < 50) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.4 } });
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.header 
      className="header" 
      animate={controls} 
      initial={{ opacity: 1, y: 0 }}
      role="banner"
    >
      <picture>
        <source srcSet="./assets/images/header/logo.avif" type="image/avif" />
        <img 
          className="logo" 
          src="./assets/images/header/logo.png" 
          alt="Luxe Lime Logo"
          width="40"
          height="40"
          loading="lazy"
        />
      </picture>
      <h1 className="header-title">Luxe Lime</h1>
    </motion.header>
  );
}
