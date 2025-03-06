import React from "react";
import { motion } from "framer-motion";
import "./branches.css";

const branches = [
  {
    id: "cairo",
    city: "Cairo",
    address: "12 El Tahrir Street, Downtown, Cairo, Egypt",
    imgSrc: "/assets/images/branches/eg-map",
  },
  {
    id: "dubai",
    city: "Dubai",
    address: "Burj Khalifa, Downtown Dubai, UAE",
    imgSrc: "/assets/images/branches/ae-map",
  },
  {
    id: "amsterdam",
    city: "Amsterdam",
    address: "Keizersgracht 174, 1016 DW Amsterdam, Netherlands",
    imgSrc: "/assets/images/branches/nl-map",
  },
  {
    id: "madrid",
    city: "Madrid",
    address: "Gran Vía 28, 28013 Madrid, Spain",
    imgSrc: "/assets/images/branches/es-map",
  },
];

export default function Branches() {
  return (
    <section className="branches">
      <h2 className="branches-title">Our Branches</h2>
      <div className="branches-grid">
        {branches.map((branch) => (
          <motion.div
            key={branch.id}
            className="branch-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="branch-image">
              <picture>
                <source srcSet={`${branch.imgSrc}.avif`} type="image/avif" />
                <img src={`${branch.imgSrc}.jpg`} alt={branch.city} loading="lazy" />
              </picture>
            </div>
            <div className="branch-info">
              <h3>{branch.city}</h3>
              <p>{branch.address}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
