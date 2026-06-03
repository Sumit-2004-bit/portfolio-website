import { motion } from 'framer-motion';
import './Button.css';

const MotionTag = motion.a;

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  download,
  external,
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <MotionTag
        href={href}
        className={classes}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        {...rest}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
