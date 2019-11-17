module.exports = {
  pagePerSection: true,
  sections: [
    {
      name: 'UI Components',
      components: 'packages/**/*.tsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse
}
