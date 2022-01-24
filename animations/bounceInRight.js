const { cssHash } = require('css-hash');

const generator = require('./generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from,
        60%,
        75%,
        90%,
        to {
          ${generator.fields(
            'animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)',
          )}
        }
        from {
          opacity: 0;
          ${generator.fields('transform: translate3d(3000px, 0, 0) scaleX(3)')}
        }
        60% {
          opacity: 1;
          ${generator.fields('transform: translate3d(-25px, 0, 0) scaleX(1)')}
        }
        75% {
          ${generator.fields('transform: translate3d(10px, 0, 0) scaleX(0.98)')}
        }
        90% {
          ${generator.fields(
            'transform: translate3d(-5px, 0, 0) scaleX(0.995)',
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
