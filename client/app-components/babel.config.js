module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env'
      ],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-optional-chaining'
    ],
  };
};
