import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./gallery.css";
import React from "react";

export default function Gallery() {
  const galleryItems = [
    {
      id: "compass",
      title: "A compass that pushes the needle.",
      description:
        "Backtrack uses GPS data to create a path of where you’ve been, even if you’re off the grid.",
      imgSrc: "./assets/images/gallery/compass",
    },
    {
      id: "trails",
      title: "Make your own trails.",
      description:
        "Create and save custom walking and hiking routes with just a few taps.",
      imgSrc: "./assets/images/gallery/trails",
    },
    {
      id: "hike",
      title: "Take a hike.",
      description:
        "Track pace, distance, elevation gain, and calories burned during your hike.",
      imgSrc: "./assets/images/gallery/hike",
    },
    {
      id: "location",
      title: "Leave your iPhone behind. Take directions with you.",
      description:
        "Download offline maps to your iPhone, and they will automatically sync to your watch.",
      imgSrc: "./assets/images/gallery/location",
    },
    {
      id: "xmarks",
      title: "X marks the spot to make a call.",
      description:
        "Cellular waypoints are automatically added to the Compass app.",
      imgSrc: "./assets/images/gallery/xmarks",
    },
  ];

  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const updateScrollLimits = () => {
    if (scrollRef.current) {
      setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", updateScrollLimits);
      updateScrollLimits(); // Set initial state
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", updateScrollLimits);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8; // Adjust for different screens
      scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h2>Packed with essentials.</h2>
      </div>

      <div className="gallery-wrapper">
        {/* Scrollable Section */}
        <motion.div ref={scrollRef} className="scroll-container">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="image-container">
                <picture>
                  <source srcSet={`${item.imgSrc}.avif`} type="image/avif" />
                  <img src={`${item.imgSrc}.png`} alt={item.title} />
                </picture>
              </div>
              <div className="gallery-info">
                <p>
                  <span className="title-span">{item.title}</span>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button
            className="nav-button left"
            onClick={() => scroll(-1)}
            disabled={scrollPosition <= 0}
          >
            &#9665;
          </button>
          <button
            className="nav-button right"
            onClick={() => scroll(1)}
            disabled={scrollPosition >= maxScroll}
          >
            &#9655;
          </button>
        </div>
      </div>
    </section>
  );
}
