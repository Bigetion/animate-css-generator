import { cssHash } from 'css-hash';

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

export default animationClass;
