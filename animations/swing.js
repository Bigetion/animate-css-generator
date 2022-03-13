const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        20% {
          ${generator.fields('transform: rotate3d(0, 0, 1, 15deg)')}
        }
        40% {
          ${generator.fields('transform: rotate3d(0, 0, 1, -10deg)')}
        }
        60% {
          ${generator.fields('transform: rotate3d(0, 0, 1, 5deg)')}
        }
        80% {
          ${generator.fields('transform: rotate3d(0, 0, 1, -5deg)')}
        }
        to {
          ${generator.fields('transform: rotate3d(0, 0, 1, 0deg)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'transform-origin: top center',
      )}
    }
  `,
);

module.exports = animationClass;
