const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translate3d(-2000px, 0, 0);
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

module.exports = animationClass;
