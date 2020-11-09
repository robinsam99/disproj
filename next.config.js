const compose = require("next-compose");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const cssConfig = {
  cssLoaderOptions: {
    url: false,
  },
};

const sassConfig = {
  cssLoaderOptions: {
    url: true,
    importLoaders: 1,
    sourceMap: true,
    modules: true,
    getLocalIdent: (context, localIdentName, localName, options) => {
      const pathSplit = context.context.split("/");

      const pathSplitLength = pathSplit.length;

      const filePath = pathSplit[pathSplitLength - 1];

      const resourcePathSplit = context.resourcePath.split("/");

      const resourcePathLength = resourcePathSplit.length;

      const resourcePath = resourcePathSplit[resourcePathLength - 1].split(
        "."
      )[0];

      // const resourcePath = path.split('.')[0];

      if (filePath === "styles") {
        return localName;
      }
      return `${filePath}_${resourcePath}_${localName}`;
    },
  },
};

module.exports = { ...compose([withSass(sassConfig), withCSS(cssConfig)]) };
