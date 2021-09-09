import { cssHash } from 'css-hash';

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 0;
        transform: scale(0.1) rotate(30deg);
        transform-origin: center bottom;
      }
      50% {
        transform: rotate(-10deg);
      }
      70% {
        transform: rotate(3deg);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

export default animationClass;
