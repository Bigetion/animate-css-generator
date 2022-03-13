const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields(
            'transform: translate3d(-100%, 0, 0) skewX(30deg)',
          )}
          opacity: 0;
        }
        60% {
          ${generator.fields('transform: skewX(-20deg)')}
          opacity: 1;
        }
        80% {
          ${generator.fields('transform: skewX(5deg)')}
        }
        to {
          ${generator.fields('transform: translate3d(0, 0, 0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'animation-timing-function: ease-out',
      )}
    }
  `,
);

module.exports = animationClass;
