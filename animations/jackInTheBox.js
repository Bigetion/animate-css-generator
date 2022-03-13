const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          opacity: 0;
          ${generator.fields(
            'transform: scale(0.1) rotate(30deg)',
            'transform-origin: center bottom',
          )}
        }
        50% {
          ${generator.fields('transform: rotate(-10deg)')}
        }
        70% {
          ${generator.fields('transform: rotate(3deg)')}
        }
        to {
          opacity: 1;
          ${generator.fields('transform: scale(1)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
