const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        transform: rotate3d(0, 0, 1, -90deg);
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

module.exports = animationClass;
