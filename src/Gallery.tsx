import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import './gallery.css';
import React from "react";

export default function Gallery() {
  const galleryItems = [
    {
      id: "compass",
      title: "A compass that pushes the needle.",
      description:
        "Backtrack uses GPS data to create a path of where you’ve been, even if you’re off the grid.",
      imgSrc: "/assets/compass.jpg",
    },
    {
      id: "trails",
      title: "Make your own trails.",
      description:
        "Create and save custom walking and hiking routes with just a few taps.",
      imgSrc: "/assets/trails.jpg",
    },
    {
      id: "hike",
      title: "Take a hike.",
      description:
        "Track pace, distance, elevation gain, and calories burned during your hike.",
      imgSrc: "/assets/hike.jpg",
    },
    {
      id: "location",
      title: "Leave your iPhone behind. Take directions with you.",
      description:
        "Download offline maps to your iPhone, and they will automatically sync to your watch.",
      imgSrc: "/assets/location.jpg",
    },
    {
      id: "xmarks",
      title: "X marks the spot to make a call.",
      description:
        "Cellular waypoints are automatically added to the Compass app.",
      imgSrc: "/assets/xmarks.jpg",
    }
  ];

  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const itemWidth = 320; // Approximate width of one card (adjust as needed)

  useEffect(() => {
    const updateScrollLimits = () => {
      if (scrollRef.current) {
        setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };

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


  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }

  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h2>Packed with essentials.</h2>
      </div>

      <div className="gallery-wrapper">
        {/* Left Arrow */}
       

        {/* Scrollable Section */}
        <motion.div
          ref={scrollRef}
          className="scroll-container"
       
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="image-container">
                <img src={item.imgSrc} alt={item.title} />
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

        <motion.div className="nav-buttons">
          {/* Left Arrow */}
          <button 
          className="nav-button left" 
          onClick={scrollLeft} 
          disabled={scrollPosition === 0}
        >
          &#9665;
        </button>
        {/* Right Arrow */}
        <button 
          className="nav-button right" 
          onClick={scrollRight} 
          disabled={scrollPosition >= 4}
        >
          &#9655;
        </button>
        </motion.div>
      </div>
    </section>
  );
}
