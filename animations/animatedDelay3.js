const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    .${className} {
      ${generator.fields(
        'animation-delay: calc(1s * 3)',
        'animation-delay: calc(var(--animate-delay) * 3)',
      )}
    }
  `,
);

module.exports = animationClass;
