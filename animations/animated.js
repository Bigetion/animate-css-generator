const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    :root {
      --animate-duration: 1s;
      --animate-delay: 1s;
      --animate-repeat: 1;
    }
    .${className} {
      ${generator.fields(
        'animation-duration: 1s',
        'animation-duration: var(--animate-duration)',
        'animation-fill-mode: both',
      )}
    }
    @media print, (prefers-reduced-motion: reduce) {
      .${className} {
        ${generator.fields(
          'animation-duration: 1ms !important',
          'transition-duration: 1ms !important',
          'animation-iteration-count: 1 !important',
        )}
      }
      .${className}[class*='Out'] {
        opacity: 0;
      }
    }
  `,
);

module.exports = animationClass;
