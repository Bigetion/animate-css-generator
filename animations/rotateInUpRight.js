const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields('transform: rotate3d(0, 0, 1, -90deg)')}
          opacity: 0;
        }      
        to {
          ${generator.fields('transform: translate3d(0, 0, 0)')}
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'transform-origin: right bottom',
      )}
    }
  `,
);

module.exports = animationClass;
