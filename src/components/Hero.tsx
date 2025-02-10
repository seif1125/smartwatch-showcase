import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import "../index.css"; // Import external styles

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();

  // Scroll-based Transformations
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]); // Shrinks
  const opacity = useTransform(scrollYProgress, [0.25, 0.5], [1, 0]); // Fades out

  // GSAP Animation for Video
  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section className="hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/assets/smartwatch-video.webm"
        autoPlay
        loop
        muted
        playsInline
        className="video"
      />

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="overlay"
      />

      {/* Content */}
      <motion.div className="canvas" style={{ scale, opacity }}>
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="textContainer"
        >
          <h1 className="main_title">LUXE TIME™</h1>
          <h2 className="model">Series X Pro</h2>
          <p className="description">
            The future of wearable technology. Experience precision, elegance,
            and unmatched performance. Powered by AI-enhanced sensors.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="imageWrapper"
        >
          <img src="/assets/img1.png" alt="Smartwatch" className="image" />
        </motion.div>
      </motion.div>
    </section>
  );
}
