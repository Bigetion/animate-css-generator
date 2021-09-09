const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        visibility: hidden;
        transform: translate3d(-100%, 0, 0);
      }
    }
    .${className} {
      animation-name: ${className};
    } 
  `,
);

export default animationClass;
