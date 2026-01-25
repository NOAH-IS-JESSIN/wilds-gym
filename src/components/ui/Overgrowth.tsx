import { motion, useScroll, useTransform } from 'framer-motion';

// Relative paths to your assets
import leafLeft from '../../assets/Monstera_leaf.png'; 
import leafRight from '../../assets/leaf-tropical.png';

export const Overgrowth = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax movement - keeping them subtle so they don't fly off screen
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="absolute left-0 w-full h-0 z-50 pointer-events-none">
      
      {/* LEFT LEAF */}
      <motion.img 
        src={leafLeft} 
        style={{ 
          y: yLeft,
          rotate: 25, 
        }}
        className="absolute -top-48 -left-12 w-64 md:w-[450px] grayscale brightness-[0.25] contrast-125 opacity-90 blur-[1px] origin-top-left"
      />

      {/* RIGHT LEAF: Placed higher (-top-64) and rotated further left (-45) */}
      <motion.img 
        src={leafRight}
        style={{ 
          y: yRight,
          rotate: -205, // Increased rotation to lean further left
          scaleX: -1   
        }}
        // -top-64 pulls it significantly higher into the Why Wilds territory
        className="absolute -top-64 -right-16 w-64 md:w-[480px] grayscale brightness-[0.3] opacity-85 origin-top-right blur-[0.5px]"
      />

      {/* Blending Gradient */}
      <div className="absolute -top-48 left-0 w-full h-96 bg-gradient-to-b from-transparent via-wild-black to-transparent"></div>
    </div>
  );
};