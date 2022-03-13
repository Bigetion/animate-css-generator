const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from,
        to {
          ${generator.fields('transform: translate3d(0, 0, 0)')}
        }
        10%,
        30%,
        50%,
        70%,
        90% {
          ${generator.fields('transform: translate3d(0, -10px, 0)')}
        }
        20%,
        40%,
        60%,
        80% {
          ${generator.fields('transform: translate3d(0, 10px, 0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
