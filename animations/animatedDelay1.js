const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    .${className} {
      ${generator.fields(
        'animation-delay: 1s',
        'animation-delay: var(--animate-delay)',
      )}
    }
  `,
);

module.exports = animationClass;
