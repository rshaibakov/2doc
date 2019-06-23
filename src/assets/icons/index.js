const context = require.context('.', true, /\.svg$/)
export default context.keys().map(path => context(path).default)
