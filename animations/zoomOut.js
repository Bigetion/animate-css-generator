const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          opacity: 1;
        }      
        50% {
          opacity: 0;
          ${generator.fields('transform: scale3d(0.3, 0.3, 0.3)')}
        }      
        to {
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
