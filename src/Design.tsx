import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./design.css";

export default function Design() {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, { margin: "-10% 0px", once: false });


  const firstRowTextRef = useRef(null);
  const firstRowTextInView = useInView(firstRowTextRef, { margin: "-10% 0px", once: false });
const firstRowImageRef = useRef(null);
  const firstRowImageInView = useInView(firstRowImageRef, { margin: "-10% 0px", once: false });
  
  const colorTitleRef = useRef(null);
  const colorTitleInView = useInView(colorTitleRef, { margin: "-10% 0px", once: false });

  const colorOptions = {
    black: "design_2_black.png",
    red: "design_2_red.jpg",
    blue: "design_2_blue.jpg",
    pink:"design_2_pink.jpg",
    silver: "design_2_silver.jpg",
  }
 
  const [selectedColor, setSelectedColor] = useState("design_2_black.png");
  



  return (
    <section className="designSection">
      {/* Animated Title Section */}
      <motion.div
        ref={titleRef}
        className="titleWrapper"
        initial={{ opacity: 0, y: 100 }}
        animate={titleIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="smallHeader">Design</h4>
        <h2 className="subtitle">Survival of the toughest.</h2>
      </motion.div>

      {/* First Row - Image Left, Text Right */}
      <div className="designRow">
        <motion.img
          ref={firstRowImageRef}
          src="/assets/design_1.png"
          alt="Smartwatch Design"
          className="designImage"
          initial={{ opacity: 0 }}
          animate={firstRowImageInView? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          ref={firstRowTextRef}
          className="designText"
          initial={{ opacity: 0, y: 50 }}
          animate={firstRowTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
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
      <div className="designSecondRow">
        <motion.div
            ref={colorTitleRef}
            className="designText"
            initial={{ opacity: 0, y: 100 }}
            animate={colorTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
        >
        <h4 className="smallHeader">Customize Your Look</h4>
          <h2 className="subtitle">Choose the color that suits you best.</h2>
          <p className="description">
            Personalize your Ultra 2 smartwatch with a range of stylish colors.
            Whether you prefer a sleek black, a bold red, or a sophisticated silver,
            there's a perfect shade for everyone.
          </p>
          <div className="colorOptions">
          {Object.keys(colorOptions).map((color) => (
              <button
                key={color}
                className={`colorButton ${color}`}
                onMouseEnter={() => setSelectedColor(colorOptions[color])}
              ></button>
            ))}
            </div>
        </motion.div>
        <motion.img
          key={selectedColor} // Forces re-render on color change
          src={`/assets/${selectedColor}`}
          alt="Smartwatch Design"
          className="designImage"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    
    </section>
  );
}
