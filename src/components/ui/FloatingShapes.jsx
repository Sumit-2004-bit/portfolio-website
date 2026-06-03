import { motion } from 'framer-motion';
import './FloatingShapes.css';

const shapes = [
  { size: 280, x: '8%', y: '12%', delay: 0, duration: 18 },
  { size: 180, x: '78%', y: '18%', delay: 1.2, duration: 22 },
  { size: 120, x: '65%', y: '68%', delay: 0.6, duration: 16 },
  { size: 90, x: '15%', y: '72%', delay: 2, duration: 20 },
];

export default function FloatingShapes() {
  return (
    <div className="floating-shapes" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.span
          key={i}
          className="floating-shapes__blob"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -24, 12, 0],
            x: [0, 12, -8, 0],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
