const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      0% {
        animation-timing-function: ease-in-out;
      }
      20%,
      60% {
        transform: rotate3d(0, 0, 1, 80deg);
        animation-timing-function: ease-in-out;
      }
      40%,
      80% {
        transform: rotate3d(0, 0, 1, 60deg);
        animation-timing-function: ease-in-out;
        opacity: 1;
      }
      to {
        transform: translate3d(0, 700px, 0);
        opacity: 0;
      }
    }
    .${className} {
      animation-duration: calc(var(--animate-duration) * 2);
      animation-name: ${className};
      transform-origin: top left;
    }
 
  `,
);

module.exports = animationClass;
