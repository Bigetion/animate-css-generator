const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      from {
        transform: translate3d(0, 0, 0);
      }
      15% {
        transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
      }    
      30% {
        transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
      }    
      45% {
        transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
      }    
      60% {
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
      }    
      75% {
        transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
      }    
      to {
        transform: translate3d(0, 0, 0);
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

export default animationClass;
