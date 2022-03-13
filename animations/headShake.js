const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translateX(0)')}
        }
        6.5% {
          ${generator.fields('transform: translateX(-6px) rotateY(-9deg)')}
        }
        18.5% {
          ${generator.fields('transform: translateX(5px) rotateY(7deg)')}
        }
        31.5% {
          ${generator.fields('transform: translateX(-3px) rotateY(-5deg)')}
        }
        43.5% {
          ${generator.fields('transform: translateX(2px) rotateY(3deg)')}
        }
        50% {
          ${generator.fields('transform: translateX(0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'animation-timing-function: ease-in-out',
      )}
    }
  `,
);

module.exports = animationClass;
