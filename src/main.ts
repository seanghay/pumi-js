import { provinces, districts, communes, villages } from './data'

import { AdministrativeDivision } from "./types";

export * from "./data";
export * from "./types";

function sorted(items: AdministrativeDivision[]): AdministrativeDivision[] {
  return items.sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });
}

export const all: AdministrativeDivision[] = sorted([
  ...provinces,
  ...districts,
  ...communes,
  ...villages,
]);

