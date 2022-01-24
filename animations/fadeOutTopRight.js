const { cssHash } = require('css-hash');

const generator = require('./generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          opacity: 1;
          ${generator.fields('transform: translate3d(0, 0, 0)')}
        }
        to {
          opacity: 0;
          ${generator.fields('transform: translate3d(100%, -100%, 0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
