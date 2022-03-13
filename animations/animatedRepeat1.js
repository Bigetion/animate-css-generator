const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    .${className} {
      ${generator.fields(
        'animation-iteration-count: 1',
        'animation-iteration-count: var(--animate-repeat)',
      )}
    }
  `,
);

module.exports = animationClass;
