const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from,
      50%,
      to {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

export default animationClass;
