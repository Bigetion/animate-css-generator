import { cssHash } from 'css-hash';

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        transform: scale3d(1, 1, 1);
      }  
      50% {
        transform: scale3d(1.05, 1.05, 1.05);
      }
      to {
        transform: scale3d(1, 1, 1);
      }
    }
    .${className} {
      animation-name: ${className};
      animation-timing-function: ease-in-out;
    }
  `,
);

export default animationClass;
