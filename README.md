# pumi

[![ci](https://github.com/seanghay/pumi-js/actions/workflows/ci.yml/badge.svg)](https://github.com/seanghay/pumi-js/actions/workflows/ci.yml)

A JavaScript library for querying administrative regions in Cambodia including Provinces, Districts, Communes and Villages.

> Forked from [kruyvanna/node-pumi](https://github.com/kruyvanna/node-pumi)

## Installation

```sh
npm i pumi
```


## Usage

ESM

```js
import { provinces, districts, communes, villages, all } from 'pumi'
```

CommonJS
```js
const { provinces, districts, communes, villages, all } = require('pumi')
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
}
```
