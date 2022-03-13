const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        20% {
          ${generator.fields(
            'transform: translate3d(0, -10px, 0) scaleY(0.985)',
          )}
        }    
        40%,
        45% {
          opacity: 1;
          ${generator.fields('transform: translate3d(0, 20px, 0) scaleY(0.9)')}
        }    
        to {
          opacity: 0;
          ${generator.fields('transform: translate3d(0, -2000px, 0) scaleY(3)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
