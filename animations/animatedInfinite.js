const { cssHash } = require('css-hash');

const animationClass = cssHash(
	(className) => `
    .${className} {
      animation-iteration-count: infinite;
    }
  `
);

module.exports = animationClass;
