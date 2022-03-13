const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields('transform: perspective(400px)')}
        }
        30% {
          ${generator.fields(
            'transform: perspective(400px) rotate3d(0, 1, 0, -15deg)',
          )}
          opacity: 1;
        }
        to {
          ${generator.fields(
            'transform: perspective(400px) rotate3d(0, 1, 0, 90deg)',
          )}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'animation-duration: calc(1s * 0.75)',
        'animation-duration: calc(var(--animate-duration) * 0.75)',
        'backface-visibility: visible !important',
      )}
    }
  `,
);

module.exports = animationClass;
