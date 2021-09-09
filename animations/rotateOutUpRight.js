const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 1;
      }
      to {
        transform: rotate3d(0, 0, 1, 90deg);
        opacity: 0;
      }
    }
    .${className} {
      animation-name: ${className};
      transform-origin: right bottom;
    } 
  `,
);

export default animationClass;
