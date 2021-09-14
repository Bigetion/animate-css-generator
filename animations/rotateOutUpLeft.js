const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 1;
      }
      to {
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }
    }
    .${className} {
      animation-name: ${className};
      transform-origin: left bottom;
    } 
  `,
);

module.exports = animationClass;
