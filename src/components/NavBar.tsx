import {motion} from 'framer-motion'
export default function Navbar() {
    return (
        <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={styles.navbar}
      >
        <motion.h1   initial={{  opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{ duration: 1.6 }}>⌚ Smartwatch Showcase</motion.h1>
      </motion.nav>
    );
  }
  
  const styles = {
    navbar: {
        background: "#000",
        padding: "1rem",
        color: "#fff",
        textAlign: "center" as "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
        position: "sticky" as "sticky",
        top: 0,
        height:'100vh',
        zIndex: 1000,
      },
    }
  