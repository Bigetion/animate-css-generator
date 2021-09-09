const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 0;
        transform: translate3d(0, -2000px, 0);
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

export default animationClass;
