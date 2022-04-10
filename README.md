# pumi

[![ci](https://github.com/seanghay/pumi-js/actions/workflows/ci.yml/badge.svg)](https://github.com/seanghay/pumi-js/actions/workflows/ci.yml)

A JavaScript library for querying administrative regions in Cambodia including Provinces, Districts, Communes and Villages.

> Forked from [kruyvanna/node-pumi](https://github.com/kruyvanna/node-pumi)

## Installation

```sh
npm i pumi
```


## Usage in Node.js

ESM

```js
import { provinces, districts, communes, villages, all } from 'pumi'
```

CommonJS
```js
const { provinces, districts, communes, villages, all } = require('pumi')
```

## Import Individual Data

ESM

```js
import provinces from 'pumi/provinces'
import districts from 'pumi/districts'
import communes from 'pumi/communes'
import villages from 'pumi/villages'
```

CommonJS

```js
const provinces = require('pumi/provinces')
const districts = require('pumi/districts')
const communes = require('pumi/communes')
const villages = require('pumi/villages')
```

## Browser

```js
import { provinces, districts, communes, villages, all } from 'https://unpkg.com/pumi@latest/dist/main.mjs'

// Or
const { provinces, districts, communes, villages, all } = await import("https://unpkg.com/pumi@latest/dist/main.mjs")
```

## Types

```typescript
export interface LocalizedName {
  km: string;
  latin: string;
}

export interface AdministrativeUnit extends LocalizedName {
  en: string;
}

export interface AdministrativeDivision {
  id: string;
  name: LocalizedName;
  unit: AdministrativeUnit;
  parent?: string
}
```
