const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    .${className} {
      ${generator.fields('animation-iteration-count: infinite')}
    }
  `,
);

module.exports = animationClass;
