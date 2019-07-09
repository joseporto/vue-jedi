# @jporto/vue-jedi

![logo](/src/assets/logo64.png)

[![build status](https://img.shields.io/gitlab/pipeline/porto/vue-jedi/master.svg)](https://gitlab.com/porto/vue-jedi.git)
[![npm-publish](https://img.shields.io/npm/dm/@jporto/vue-jedi.svg)](https://www.npmjs.com/package/@jporto/vue-jedi)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![language count](https://img.shields.io/github/languages/count/joseporto/vue-jedi.svg)](https://gitlab.com/porto/vue-jedi/-/graphs/master/charts)

A VueJS JSON editor component

Checkout the [Demo](https://porto.gitlab.io/vue-jedi/) which contains the component documentation.

## Instalation

```bash
yarn add @jporto/vue-jedi
```

or

```bash
npm install @jporto/vue-jedi
```

## Setup

### Vue.js

- Add the following to you application main.js file:

```js
import VueJedi from '@jporto/vue-jedi'

Vue.use(VueJedi)
```

- import the styles

```scss
@import '@jporto/vue-jedi/dist/@jporto/main.scss';
```

### NuxtJS

- Similar as with Vue.js, but I recomend adding a `components.js` file to plugins, with the following content:
  
```js
import Vue from 'vue'
import VueJedi from '@jporto/vue-jedi';
Vue.use(VueJedi);
```

- Register the plugin in `nuxt.config.js`:

```js
plugins: [
  '@/plugins/components',
],
```

## Configure

Override the following variables prior to importing the `main.scss` file:

Variable Name | Description | Default
--- | --- | --- | ---
$jedi-color-primary | primary color for the component | #EE538C
$jedi-sprite-light | sprite for light backgrounds | -
$jedi-sprite-dark | sprite for dark backgrounds | -
$jedi-font-main | primary font | sans-serif
$jedi-font-monospaced | font for data representation | monospace
