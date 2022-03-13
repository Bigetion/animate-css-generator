const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        40% {
          opacity: 1;
          ${generator.fields(
            'transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
          )}
        }      
        to {
          opacity: 0;
          ${generator.fields('transform: scale(0.1) translate3d(2000px, 0, 0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'transform-origin: right center',
      )}
    }
  `,
);

module.exports = animationClass;
