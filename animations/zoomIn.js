const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
      }
      50% {
        opacity: 1;
      }
    }
    .${className} {
      animation-name: ${className};
    } 
  `,
);

module.exports = animationClass;
