const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      0% {
        transform: scale(1);
      }
      14% {
        transform: scale(1.3);
      }
      28% {
        transform: scale(1);
      }
      42% {
        transform: scale(1.3);
      }
      70% {
        transform: scale(1);
      }
    }
    .${className} {
      animation-name: ${className};
      animation-duration: calc(var(--animate-duration) * 1.3);
      animation-timing-function: ease-in-out;
    }
  `,
);

module.exports = animationClass;
