import { cssHash } from 'css-hash';

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
    .${className} {
      animation-name: ${className};
      transform-origin: right bottom;
    }
  `,
);

export default animationClass;
