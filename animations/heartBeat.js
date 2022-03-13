const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: scale(1)')}
        }
        14% {
          ${generator.fields('transform: scale(1.3)')}
        }
        28% {
          ${generator.fields('transform: scale(1)')}
        }
        42% {
          ${generator.fields('transform: scale(1.3)')}
        }
        70% {
          ${generator.fields('transform: scale(1)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'animation-duration: calc(1s * 1.3)',
        'animation-duration: calc(var(--animate-duration) * 1.3)',
        'animation-timing-function: ease-in-out',
      )}
    }
  `,
);

module.exports = animationClass;
