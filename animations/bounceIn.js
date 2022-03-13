const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from,
        20%,
        40%,
        60%,
        80%,
        to {
          ${generator.fields(
            'animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)',
          )}
        }
        0% {
          opacity: 0;
          ${generator.fields('transform: scale3d(0.3, 0.3, 0.3)')}
        }
        20% {
          ${generator.fields('transform: scale3d(1.1, 1.1, 1.1)')}
        }
        40% {
          ${generator.fields('transform: scale3d(0.9, 0.9, 0.9)')}
        }
        60% {
          opacity: 1;
          ${generator.fields('transform: scale3d(1.03, 1.03, 1.03)')}
        }
        80% {
          ${generator.fields('transform: scale3d(0.97, 0.97, 0.97)')}
        }
        to {
          opacity: 1;
          ${generator.fields('transform: scale3d(1, 1, 1)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'animation-duration: calc(1s * 0.75)',
        'animation-duration: calc(var(--animate-duration) * 0.75)',
      )}
    }
  `,
);

module.exports = animationClass;
