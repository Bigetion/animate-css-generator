const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields('transform: translate3d(100%, 0, 0)')}
          visibility: visible;
        }      
        to {
          ${generator.fields('transform: translate3d(0, 0, 0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
