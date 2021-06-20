module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    }
  },
  rules: {
    'react/prop-types': 'off',
    'import/no-anonymous-default-export': [2,
      {
        "allowArrowFunction": true
      }
    ]
  },
  globals: {
    React: true
  }
}
