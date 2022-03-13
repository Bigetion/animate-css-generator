const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    .${className} {
      ${generator.fields(
        'animation-duration: calc(1s * 3)',
        'animation-duration: calc(var(--animate-duration) * 3)',
      )}
    }
  `,
);

module.exports = animationClass;
