const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      20% {
        transform: rotate3d(0, 0, 1, 15deg);
      }
      40% {
        transform: rotate3d(0, 0, 1, -10deg);
      }
      60% {
        transform: rotate3d(0, 0, 1, 5deg);
      }
      80% {
        transform: rotate3d(0, 0, 1, -5deg);
      }
      to {
        transform: rotate3d(0, 0, 1, 0deg);
      }
    }
    .${className} {
      transform-origin: top center;
      animation-name: ${className};
    }
  `,
);

export default animationClass;
