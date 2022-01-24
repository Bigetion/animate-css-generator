const { cssHash } = require('css-hash');

const generator = require('./generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields('transform: scale3d(1, 1, 1)')}
        }
        50% {
          ${generator.fields('transform: scale3d(1.05, 1.05, 1.05)')}
        }
        to {
          ${generator.fields('transform: scale3d(1, 1, 1)')}
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
