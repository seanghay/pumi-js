import _esbuild from "rollup-plugin-esbuild";
import { defineBuildConfig } from "unbuild";
import { Plugin } from "rollup";

//@ts-ignore
const esbuild = _esbuild.default || _esbuild;

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
    esbuild: {
      minify: true,
    },
  },
  hooks: {
    "rollup:dts:options": (ctx, options) => {
      options.plugins = options.plugins!.map(p => {
        const plugin = (p as Plugin);
        if (plugin.name === 'esbuild') {
          return esbuild({ 
            ...ctx.options.rollup.esbuild,
            minify: false,
          })
        }
        return plugin;
      })
    },
  },
});
