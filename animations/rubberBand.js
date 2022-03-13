const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields('transform: scale3d(1, 1, 1)')}
        }
        30% {
          ${generator.fields('transform: scale3d(1.25, 0.75, 1)')}
        }
        40% {
          ${generator.fields('transform: scale3d(0.75, 1.25, 1)')}
        }
        50% {
          ${generator.fields('transform: scale3d(1.15, 0.85, 1)')}
        }
        65% {
          ${generator.fields('transform: scale3d(0.95, 1.05, 1)')}
        }
        75% {
          ${generator.fields('transform: scale3d(1.05, 0.95, 1)')}
        }
        to {
          ${generator.fields('transform: scale3d(1, 1, 1)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
