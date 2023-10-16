/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
