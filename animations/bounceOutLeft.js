const { cssHash } = require('css-hash');

const generator = require('./generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        20% {
          opacity: 1;
          ${generator.fields('transform: translate3d(20px, 0, 0) scaleX(0.9)')}
        }      
        to {
          opacity: 0;
          ${generator.fields('transform: translate3d(-2000px, 0, 0) scaleX(2)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(`animation-name: ${className}`)}
    }
  `,
);

module.exports = animationClass;
