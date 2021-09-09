const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      20% {
        opacity: 1;
        transform: translate3d(20px, 0, 0) scaleX(0.9);
      }
      to {
        opacity: 0;
        transform: translate3d(-2000px, 0, 0) scaleX(2);
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

export default animationClass;
