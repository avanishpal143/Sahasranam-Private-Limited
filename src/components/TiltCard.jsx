import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard({ children, className }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const { width, height, left, top } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Convert coordinate offset to degree rotation (max 8 degrees tilt)
    const rotateYVal = ((x - width / 2) / (width / 2)) * 8;
    const rotateXVal = -((y - height / 2) / (height / 2)) * 8;
    
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    // Reset back to zero tilt
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      className={className}
    >
      {/* Set children styles to preserve 3D layering if child uses translateZ */}
      <div style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
