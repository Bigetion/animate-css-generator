const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: rotate(0deg)')}
        }
        100% {
          ${generator.fields('transform: rotate(360deg)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'animation-timing-function: linear',
      )}
    } 
  `,
);

module.exports = animationClass;
