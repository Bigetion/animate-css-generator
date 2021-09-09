const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      20% {
        transform: scale3d(0.9, 0.9, 0.9);
      }
      50%,
      55% {
        opacity: 1;
        transform: scale3d(1.1, 1.1, 1.1);
      }
      to {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
      }
    }
    .${className} {
      animation-duration: calc(var(--animate-duration) * 0.75);
      animation-name: ${className};
    }
  `,
);

export default animationClass;
