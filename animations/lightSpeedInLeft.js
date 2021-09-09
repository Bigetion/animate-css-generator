import { cssHash } from 'css-hash';

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        transform: translate3d(-100%, 0, 0) skewX(30deg);
        opacity: 0;
      }
      60% {
        transform: skewX(-20deg);
        opacity: 1;
      }
      80% {
        transform: skewX(5deg);
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }
    .${className} {
      animation-name: ${className};
      animation-timing-function: ease-out;
    }
  `,
);

export default animationClass;
