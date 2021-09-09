const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
      }
    }
    .${className} {
      animation-name: ${className};
    } 
  `,
);

export default animationClass;
