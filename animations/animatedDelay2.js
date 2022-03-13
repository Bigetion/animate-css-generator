const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    .${className} {
      ${generator.fields(
        'animation-delay: calc(1s * 2)',
        'animation-delay: calc(var(--animate-delay) * 2)',
      )}
    }
  `,
);

module.exports = animationClass;
