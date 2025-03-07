import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import "./index.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollYProgress } = useScroll();

  // Define Transform Effects
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5], [1, 0]);

  useEffect(() => {
    if (!videoRef.current) return;

    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="./assets/videos/smartwatch-video.webm"
        autoPlay
        loop
        muted
        playsInline
        className="video"
      />

      {/* Dark Overlay */}
      <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />

      {/* Content */}
      <motion.div className="canvas" style={{ scale, opacity }}>
        {/* Left Side - Text */}
        <motion.div
          className="textContainer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="main_title">LUXE TIME™</h1>
          <h2 className="model">Series X Pro</h2>
          <p className="description">
            The future of wearable technology. Experience precision, elegance, and unmatched performance.
            Powered by AI-enhanced sensors.
          </p>
        </motion.div>

        {/* Right Side - Image with AVIF & PNG Fallback */}
        <motion.div
          className="imageWrapper"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <picture>
            <source srcSet="./assets/images/hero/hero_img.avif" type="image/avif" />
            <img src="./assets/images/hero/hero_img.png" alt="Smartwatch" className="image" loading="lazy" />
          </picture>
        </motion.div>
      </motion.div>
    </section>
  );
}
