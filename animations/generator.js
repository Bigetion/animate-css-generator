const keyframes = (name, content) => {
  return `
    @-webkit-keyframes ${name} {
      ${content}
    }
    @keyframes ${name} {
      ${content}
    }
  `;
};

const fields = (...contents) => {
  const generatedContens = contents.map((content) => {
    return `
      -webkit-${content};
      ${content};
    `;
  });
  return generatedContens.join(' ');
};

const generator = {
  keyframes,
  fields,
};

module.exports = generator;
