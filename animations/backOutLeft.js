const { cssHash } = require('css-hash');

const generator = require('./generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: scale(1)')}
          opacity: 1;
        }
        20% {
          ${generator.fields('transform: translateX(0px) scale(0.7)')}
          opacity: 0.7;
        }
        100% {
          ${generator.fields('transform: translateX(-2000px) scale(0.7)')}
          opacity: 0.7;
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
