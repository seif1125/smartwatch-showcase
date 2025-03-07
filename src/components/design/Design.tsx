import React, { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import "./design.css";

export default function Design() {
  // Define refs at the top level
  const titleRef = useRef(null);
  const firstRowTextRef = useRef(null);
  const firstRowImageRef = useRef(null);
  const colorTitleRef = useRef(null);

  // Use `useInView` at the top level
  const titleIsInView = useInView(titleRef, { margin: "-10% 0px" });
  const firstRowTextInView = useInView(firstRowTextRef, { margin: "-10% 0px" });
  const firstRowImageInView = useInView(firstRowImageRef, { margin: "-10% 0px" });
  const colorTitleInView = useInView(colorTitleRef, { margin: "-10% 0px" });

  // Memoized color options
  const colorOptions = useMemo(
    () => ({
      black: "design_2_black",
      red: "design_2_red",
      blue: "design_2_blue",
      pink: "design_2_pink",
      silver: "design_2_silver",
    }),
    []
  );

  const [selectedColor, setSelectedColor] = useState("black");
  const [loaded, setLoaded] = useState(true);

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
        <motion.picture
          ref={firstRowImageRef}
          initial={{ opacity: 0 }}
          animate={firstRowImageInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <source srcSet="./assets/images/design/design_1.avif" type="image/avif" />
          <img
            src="./assets/images/design/design_1.png"
            alt="Smartwatch Design"
            className="designImage"
          />
        </motion.picture>
        
        <motion.div
          ref={firstRowTextRef}
          className="designText"
          initial={{ opacity: 0, y: 50 }}
          animate={firstRowTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <p className="description">
            Ultra 2 is built for extremes. Now available in black titanium, the 49mm case is
            designed for the toughest environments, and it’s certified to EN13319, the
            internationally recognized standard for diving accessories.
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
            Personalize your Ultra 2 smartwatch with a range of stylish colors. Whether you
            prefer a sleek black, a bold red, or a sophisticated silver, there's a perfect
            shade for everyone.
          </p>
          <div className="colorOptions">
            {Object.keys(colorOptions).map((color) => (
              <button
                key={color}
                className={`colorButton ${color}`}
                onMouseEnter={() => {
                  setLoaded(false);
                  setSelectedColor(color);
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Image Container with Absolute Positioning */}
        <div className="imageContainer">
          <motion.picture
            key={selectedColor} // Ensures correct re-rendering
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            onLoad={() => setLoaded(true)} // Ensures smooth loading
          >
            <source srcSet={`/assets/images/design/${colorOptions[selectedColor]}.avif`} type="image/avif" />
            <img
              src={`/assets/images/design/${colorOptions[selectedColor]}.png`}
              alt="Smartwatch Design"
              className="designImage"
            />
          </motion.picture>
        </div>
      </div>
    </section>
  );
}
