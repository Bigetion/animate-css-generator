import { cssHash } from 'css-hash';

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

export default animationClass;
