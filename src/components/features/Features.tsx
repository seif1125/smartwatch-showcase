import React, { useRef,  } from "react";
import { motion, useInView } from "framer-motion";
import { FaRocket, FaBatteryFull, FaShieldAlt, FaGlobe, FaPalette, FaGem } from "react-icons/fa";
import "./features.css";

const features = [
  { icon: <FaRocket />, title: "Fast Performance", description: "Experience seamless speed with optimized performance.\nLoad apps instantly without delays or lag.\nDesigned for efficiency and smooth user interactions." },
  { icon: <FaBatteryFull />, title: "Long Battery Life", description: "Stay powered throughout the day with extended battery life.\nOptimized energy consumption for maximum efficiency.\nNo need to worry about frequent charging." },
  { icon: <FaGem />, title: "Premium Design", description: "Crafted with sleek and modern aesthetics.\nHigh-quality materials ensure a luxurious feel.\nDesigned to complement your lifestyle and taste." },
  { icon: <FaShieldAlt />, title: "Advanced Security", description: "Protect your data with cutting-edge security features.\nBuilt-in encryption and biometric authentication.\nStay safe from cyber threats and unauthorized access." },
  { icon: <FaGlobe />, title: "Global Connectivity", description: "Stay connected wherever you go, worldwide.\nSupports high-speed networks and seamless roaming.\nEffortless access to online services in any region." },
  { icon: <FaPalette />, title: "Customizable UI", description: "Personalize your experience with flexible design options.\nAdjust themes, layouts, and preferences with ease.\nCreate an interface that fits your unique style." },
];

const Features = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { margin: "-10% 0px" });

  return (
    <section className="featuresSection">
      {/* Animated Title */}
      <motion.h2
        ref={titleRef}
        className="title"
        initial={{ opacity: 0, y: 100 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span className="span-highlighted">Key </motion.span> Features
      </motion.h2>

      {/* Feature Grid */}
      <div className="grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

// Individual Feature Card Component
const FeatureCard = React.memo(({ feature, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 80%" });

  return (
    <motion.div
      ref={ref}
      className="featureCard"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.25, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="icon">{feature.icon}</span>
      <div>
        <h3 className="featureTitle">{feature.title}</h3>
        <p className="featureDescription">{feature.description}</p>
      </div>
    </motion.div>
  );
});

export default Features;
