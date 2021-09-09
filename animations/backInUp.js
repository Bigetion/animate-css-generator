const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      0% {
        transform: translateY(1200px) scale(0.7);
        opacity: 0.7;
      }    
      80% {
        transform: translateY(0px) scale(0.7);
        opacity: 0.7;
      }    
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }    
    .${className} {
      animation-name: ${className};
    }
  `,
);

export default animationClass;