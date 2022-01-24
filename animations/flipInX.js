const { cssHash } = require('css-hash');

const generator = require('./generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields(
            'transform: perspective(400px) rotate3d(1, 0, 0, 90deg)',
            'animation-timing-function: ease-in',
          )}
          opacity: 0;
        }
        40% {
          ${generator.fields(
            'transform: perspective(400px) rotate3d(1, 0, 0, -20deg)',
            'animation-timing-function: ease-in',
          )}
        }
        60% {
          ${generator.fields(
            'transform: perspective(400px) rotate3d(1, 0, 0, 10deg)',
          )}
          opacity: 1;
        }
        80% {
          ${generator.fields(
            'transform: perspective(400px) rotate3d(1, 0, 0, -5deg)',
          )}
        }
        to {
          ${generator.fields('transform: perspective(400px)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'backface-visibility: visible !important',
      )}
    }
  `,
);

module.exports = animationClass;
