import React from "react";
import { motion, useInView } from "framer-motion";
import "../features.css";

const features = [
  { icon: "🚀", title: "Fast Performance", description: "Optimized for speed and efficiency." },
  { icon: "🔋", title: "Long Battery Life", description: "Extended battery life for daily usage." },
  { icon: "💎", title: "Premium Design", description: "Sleek and modern aesthetics." },
  { icon: "🔒", title: "Advanced Security", description: "Protect your data with top security features." },
  { icon: "🌎", title: "Global Connectivity", description: "Stay connected anywhere in the world." },
  { icon: "🎨", title: "Customizable UI", description: "Personalize your experience effortlessly." },
];

export default function Features() {
  return (
    <section className="featuresSection">
      <h2 className="title">Key Features</h2>
      <div className="grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}

// Individual Feature Card Component
function FeatureCard({ feature, delay }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px", once: false });

  return (
    <motion.div
      ref={ref}
      className="featureCard"
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animate in both directions
      transition={{ duration: 0.1, delay }}
      whileHover={{ scale: 1.05}} // Hover effect
    >
      <span className="icon">{feature.icon}</span>
      <h3 className="featureTitle">{feature.title}</h3>
      <p className="featureDescription">{feature.description}</p>
    </motion.div>
  );
}
