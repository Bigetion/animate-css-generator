const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields(
            'transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
            'animation-timing-function: ease-out',
          )}
        }
        40% {
          ${generator.fields(
            'transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
            'animation-timing-function: ease-out',
          )}
        }
        50% {
          ${generator.fields(
            'transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
            'animation-timing-function: ease-in',
          )}
        }
        80% {
          ${generator.fields(
            'transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
            'animation-timing-function: ease-in',
          )}
        }
        to {
          ${generator.fields(
            'transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
            'animation-timing-function: ease-in',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'backface-visibility: visible',
      )}
    }
  `,
);

module.exports = animationClass;
