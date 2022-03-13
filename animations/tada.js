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
        10%,
        20% {
          ${generator.fields(
            'transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
          )}
        }
        30%,
        50%,
        70%,
        90% {
          ${generator.fields(
            'transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
          )}
        }
        40%,
        60%,
        80% {
          ${generator.fields(
            'transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
          )}
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
