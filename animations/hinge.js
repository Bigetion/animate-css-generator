const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('animation-timing-function: ease-in-out')}
        }
        20%,
        60% {
          ${generator.fields(
            'transform: rotate3d(0, 0, 1, 80deg)',
            'animation-timing-function: ease-in-out',
          )}
        }
        40%,
        80% {
          ${generator.fields(
            'transform: rotate3d(0, 0, 1, 60deg)',
            'animation-timing-function: ease-in-out',
          )}
          opacity: 1;
        }
        to {
          ${generator.fields('transform: translate3d(0, 700px, 0)')}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'animation-duration: calc(1s * 2)',
        'animation-duration: calc(var(--animate-duration) * 2)',
        'transform-origin: top left',
      )}
    }
  `,
);

module.exports = animationClass;
