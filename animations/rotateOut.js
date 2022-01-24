const { cssHash } = require('css-hash');

const generator = require('./generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          opacity: 1;
        }      
        to {
          ${generator.fields('transform: rotate3d(0, 0, 1, 200deg)')}
          opacity: 0;
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
