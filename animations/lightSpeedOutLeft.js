const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          opacity: 1;
        }
      
        to {
          ${generator.fields(
            'transform: translate3d(-100%, 0, 0) skewX(-30deg)',
          )}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'animation-timing-function: ease-in',
      )}
    }
  `,
);

module.exports = animationClass;
