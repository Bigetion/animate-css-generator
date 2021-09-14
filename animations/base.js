const { cssHash } = require('css-hash');

const animationClass = cssHash(
	(className) => `
    .${className} {
      --animate-duration: 1s;
      animation-duration: var(--animate-duration);
      animation-fill-mode: both;
    }
    .${className}.animate-infinite {
      animation-iteration-count: infinite;
    }
    .${className}.animate-faster {
      animation-duration: calc(var(--animate-duration) * 0.5);
    }
    .${className}.animate-fast {
      animation-duration: calc(var(--animate-duration) * 0.8);
    }    
    .${className}.animate-slow {
      animation-duration: calc(var(--animate-duration) * 2);
    }    
    .${className}.animate-slower {
      animation-duration: calc(var(--animate-duration) * 3);
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
