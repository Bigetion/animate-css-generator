const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from,
        11.1%,
        to {
          ${generator.fields('transform: translate3d(0, 0, 0)')}
        }
        22.2% {
          ${generator.fields('transform: skewX(-12.5deg) skewY(-12.5deg)')}
        }
        33.3% {
          ${generator.fields('transform: skewX(6.25deg) skewY(6.25deg)')}
        }
        44.4% {
          ${generator.fields('transform: skewX(-3.125deg) skewY(-3.125deg)')}
        }
        55.5% {
          ${generator.fields('transform: skewX(1.5625deg) skewY(1.5625deg)')}
        }
        66.6% {
          ${generator.fields(
            'transform: skewX(-0.78125deg) skewY(-0.78125deg)',
          )}
        }
        77.7% {
          ${generator.fields(
            'transform: skewX(0.390625deg) skewY(0.390625deg)',
          )}
        }
        88.8% {
          ${generator.fields(
            'transform: skewX(-0.1953125deg) skewY(-0.1953125deg)',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'transform-origin: center',
      )}
    }
  `,
);

module.exports = animationClass;
