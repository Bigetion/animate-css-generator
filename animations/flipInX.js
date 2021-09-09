import { cssHash } from 'css-hash';

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        animation-timing-function: ease-in;
        opacity: 0;
      }
      40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        animation-timing-function: ease-in;
      }
      60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
      }
      80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      }
      to {
        transform: perspective(400px);
      }
    }
    .${className} {
      backface-visibility: visible !important;
      animation-name: ${className};
    }
  `,
);

export default animationClass;
