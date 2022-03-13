const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          opacity: 0;
          ${generator.fields('transform: scale3d(0.3, 0.3, 0.3)')}
        }
        50% {
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
