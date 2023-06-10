const {
  main,
  name,
  version,
  resources,
  description,
  displayName,
  author: _author,
} = require('./package.json')

const { normalize, dirname } = require('path')

getDevFolder = (path) => {
  const [nodeModules, devFolder] = normalize(dirname(path)).split(/\/|\\/g)

  return [nodeModules, devFolder].join('/')
}

const author = _author?.name ?? _author
const currentYear = new Date().getFullYear()
const authorInKebabCase = author.replace(/\s+/g, '-')
const appId = `com.${authorInKebabCase}.${name}`.toLowerCase()

/** @type {import('electron-builder').Configuration} */
module.exports = {
  appId,
  productName: displayName,
  copyright: `Copyright © ${currentYear} — ${author}`,

  directories: {
    app: getDevFolder(main),
    output: `dist/v${version}`,
  },

  mac: {
    icon: `${resources}/build/icons/icon.icns`,
    category: 'public.app-category.utilities',
  },

  dmg: {
    icon: false,
  },

  linux: {
    category: 'Utilities',
    synopsis: description,
    target: ['AppImage', 'deb', 'pacman', 'freebsd', 'rpm'],
  },

  win: {
    icon: `${resources}/build/icons/icon.ico`,
    target: ['nsis', 'portable', 'zip'],
  },
}
