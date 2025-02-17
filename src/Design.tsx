import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./design.css";

export default function Design() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { margin: "-10% 0px", once: false });

  return (
    <section className="designSection">
      {/* Animated Title Section */}
      <motion.div
        ref={titleRef}
        className="titleWrapper"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="smallHeader">Design</h4>
        <h2 className="subtitle">Survival of the toughest.</h2>
      </motion.div>

      {/* First Row - Image Left, Text Right */}
      <div className="designRow">
        <motion.img
          src="/assets/design_1.png"
          alt="Smartwatch Design"
          className="designImage"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="designText"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <p className="description">
            Ultra 2 is built for extremes. Now available in black titanium, the
            49mm case is designed for the toughest environments, and it’s
            certified to EN13319, the internationally recognized standard for
            diving accessories.
          </p>
        </motion.div>
      </div>

      {/* Second Row - Image Right, Text Left */}
      <div className="designRow">
        <motion.div
          className="designText"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="smallHeader">Design</h4>
          <h2 className="subtitle">Survival of the toughest.</h2>
          <p className="description">
            Ultra 2 is built for extremes. Now available in black titanium, the
            49mm case is designed for the toughest environments, and it’s
            certified to EN13319, the internationally recognized standard for
            diving accessories.
          </p>
        </motion.div>
        <motion.img
          src="/assets/design_2.png"
          alt="Smartwatch Design"
          className="designImage"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
