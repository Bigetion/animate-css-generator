const { cssHash } = require('css-hash');

const animationClass = cssHash(
	(className) => `
    .${className} {
      --animate-duration: 1s;
      animation-duration: var(--animate-duration);
      animation-fill-mode: both;
    }
    @media print, (prefers-reduced-motion: reduce) {
      .${className} {
        animation-duration: 1ms !important;
        transition-duration: 1ms !important;
        animation-iteration-count: 1 !important;
      }
      .${className}[class*='Out'] {
        opacity: 0;
      }
    }
  `
);

module.exports = animationClass;
