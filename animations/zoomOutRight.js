const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      40% {
        opacity: 1;
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      }
      to {
        opacity: 0;
        transform: scale(0.1) translate3d(2000px, 0, 0);
      }
    }
    .${className} {
      animation-name: ${className};
      transform-origin: right center;
    } 
  `,
);

module.exports = animationClass;
