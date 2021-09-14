const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

module.exports = animationClass;
