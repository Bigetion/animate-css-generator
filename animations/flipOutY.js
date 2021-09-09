import { cssHash } from 'css-hash';

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        transform: perspective(400px);
      }
      30% {
        transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        opacity: 1;
      }
      to {
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        opacity: 0;
      }
    }
    .${className} {
      animation-duration: calc(var(--animate-duration) * 0.75);
      backface-visibility: visible !important;
      animation-name: ${className};
    }
  `,
);

export default animationClass;
