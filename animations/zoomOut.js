const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        opacity: 1;
      }
      50% {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
      }
      to {
        opacity: 0;
      }
    }
    .${className} {
      animation-name: ${className};
    } 
  `,
);

export default animationClass;
