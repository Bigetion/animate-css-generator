const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from,
      to {
        transform: translate3d(0, 0, 0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        transform: translate3d(0, -10px, 0);
      }
      20%,
      40%,
      60%,
      80% {
        transform: translate3d(0, 10px, 0);
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

module.exports = animationClass;
