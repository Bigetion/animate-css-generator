const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        transform: translate3d(0, -100%, 0);
        visibility: visible;
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }
    .${className} {
      animation-name: ${className};
    } 
  `,
);

module.exports = animationClass;
