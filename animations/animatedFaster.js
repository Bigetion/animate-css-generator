const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    .${className} {
      ${generator.fields(
        'animation-duration: calc(1s / 2)',
        'animation-duration: calc(var(--animate-duration) / 2)',
      )}
    }
  `,
);

module.exports = animationClass;
