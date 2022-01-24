const { cssHash } = require('css-hash');

const generator = require('./generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields('transform: translate3d(0, 0, 0)')}
        }
        15% {
          ${generator.fields(
            'transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
          )}
        }
        30% {
          ${generator.fields(
            'transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
          )}
        }
        45% {
          ${generator.fields(
            'transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
          )}
        }
        60% {
          ${generator.fields(
            'transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
          )}
        }
        75% {
          ${generator.fields(
            'transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
          )}
        }
        to {
          ${generator.fields('transform: translate3d(0, 0, 0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
