# pumi

A collection of administrative regions in Cambodia including Provinces, Districts, Communes and Villages.

> Forked from [kruyvanna/node-pumi](https://github.com/kruyvanna/node-pumi)

## Installation

```sh
npm i pumi
```


## Usage

```js
import { provinces, districts, communes, villages, all } from 'pumi'
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