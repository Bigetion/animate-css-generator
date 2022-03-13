const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        20% {
          ${generator.fields('transform: scale3d(0.9, 0.9, 0.9)')}
        }
        50%,
        55% {
          opacity: 1;
          ${generator.fields('transform: scale3d(1.1, 1.1, 1.1)')}
        }
        to {
          opacity: 0;
          ${generator.fields('transform: scale3d(0.3, 0.3, 0.3)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'animation-duration: calc(1s * 0.75)',
        'animation-duration: calc(var(--animate-duration) * 0.75)',
      )}
    }
  `,
);

module.exports = animationClass;
