const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      20% {
        transform: translateX(0px) scale(0.7);
        opacity: 0.7;
      }
      100% {
        transform: translateX(2000px) scale(0.7);
        opacity: 0.7;
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

module.exports = animationClass;
