const { cssHash } = require('css-hash');

const generator = require('./generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from,
        20%,
        53%,
        to {
          ${generator.fields(
            'animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)',
            'transform: translate3d(0, 0, 0)',
          )}
        }
        40%,
        43% {
          ${generator.fields(
            'animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            'transform: translate3d(0, -30px, 0) scaleY(1.1)',
          )}
        }
        70% {
          ${generator.fields(
            'animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            'transform: translate3d(0, -15px, 0) scaleY(1.05)',
          )}
        }
        80% {
          ${generator.fields(
            'transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)',
            'transform: translate3d(0, 0, 0) scaleY(0.95)',
          )}
        }
        90% {
          ${generator.fields('transform: translate3d(0, -4px, 0) scaleY(1.02)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation-name: ${className}`,
        'transform-origin: center bottom',
      )}
    }
  `,
);

module.exports = animationClass;
