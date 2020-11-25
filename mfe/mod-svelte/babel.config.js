module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: '3',
          shippedProposals: true,
          targets: 'defaults',
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  };
};
