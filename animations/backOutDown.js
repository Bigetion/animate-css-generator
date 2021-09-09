import { cssHash } from 'css-hash';

const animationClass = cssHash(
  (className) => `
    @keyframes ${className} {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      20% {
        transform: translateY(0px) scale(0.7);
        opacity: 0.7;
      }
      100% {
        transform: translateY(700px) scale(0.7);
        opacity: 0.7;
      }
    }
    .${className} {
      animation-name: ${className};
    }
  `,
);

export default animationClass;
