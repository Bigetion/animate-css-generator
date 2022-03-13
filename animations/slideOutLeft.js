const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields('transform: translate3d(0, 0, 0)')}
        }      
        to {
          visibility: hidden;
          ${generator.fields('transform: translate3d(-100%, 0, 0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
