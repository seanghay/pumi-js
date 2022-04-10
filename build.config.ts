import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    "src/main",
    "src/data/provinces",
    "src/data/districts",
    "src/data/communes",
    "src/data/villages",
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});