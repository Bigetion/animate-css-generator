const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    .${className} {
      ${generator.fields(
        'animation-duration: calc(1s * 0.8)',
        'animation-duration: calc(var(--animate-duration) * 0.8)',
      )}
    }
  `,
);

module.exports = animationClass;
