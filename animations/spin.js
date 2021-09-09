const { cssHash } = require('css-hash');

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      0% { 
        transform: rotate(0deg); 
      }
      100% { 
        transform: rotate(360deg); 
      }
    }
    .${className} {
      animation-timing-function: linear;
      animation-name: ${className};
    } 
  `,
);

export default animationClass;
