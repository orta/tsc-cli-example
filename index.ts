import { blue, bgBlue, red, white, bold } from "https://deno.land/std/fmt/colors.ts";

const title = (str: string) => console.log("\n" + bold(str.toUpperCase()) + "\n")
const flag = (name: string, desc: string) => console.log(`  ${bold(blue("--" + name))}       ${desc}`)
// const values = (values: string) => console.log("  values any of: " + values)

console.log("")
console.log(bold("tsc: The TypeScript Compiler - v4.3.0-beta"))
title("Usage")
console.log("tsc [options] [files...]")
console.log("tsc @args.txt")

title("Common commands")
console.log(`  ${blue(bold("tsc"))} 
  Type checks, and emits outputs for a project in the current working directory.

  ${blue(bold("tsc -p ./path/to/tsconfig.json"))} 
  Runs the TypeScript project defined in another folder.

  ${blue(bold("tsc --init"))} 
  Creates a tsconfig.json with the recommended settings in the current directory.

  ${blue(bold("tsc --help --all"))} 
  An expanded version of this information, showing all possible compiler options.

  ${blue(bold("tsc --noEmit"))} 
  Runs the TypeScript type-checker but does not create .js, .d.ts and .map files.

  ${blue(bold("tsc app.ts util.ts"))} 
  Type checks, and emits outputs for the file index.ts with default compiler options.
  ${bold(`Without ${blue(bold("-p"))} this will ignore any tsconfig.json files.`)}

  ${blue(bold("tsc @args.txt"))} 
  Use the file 'args.txt' to set command line options bypassing command line length limits.`)
  
title("Common Compiler Options")
console.log("")

flag("target, -t", "Set the JavaScript language version for emitted JavaScript\n                     and include compatible library declarations.")
console.log(`
    with:    'es3' (default), 'es5', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 
             'es2020', or 'esnext'.
`)

flag("lib", "Specify library files to be included in the compilation.")
console.log(`
    with:    'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'
             'dom', 'dom.iterable', 'webworker', 'webworker.importscripts', 'scripthost', 'es2015.core'
             'es2015.collection', 'es2015.generator', 'es2015.iterable', 'es2015.promise', 'es2015.proxy'
             'es2015.reflect', 'es2015.symbol', 'es2015.symbol.wellknown', 'es2016.array.include'
             'es2017.object', 'es2017.sharedmemory', 'es2017.string', 'es2017.intl', 'es2017.typedarrays'
             'es2018.asyncgenerator', 'es2018.asynciterable', 'es2018.intl', 'es2018.promise'
             'es2018.regexp', 'es2019.array', 'es2019.object', 'es2019.string', 'es2019.symbol'
             'es2020.bigint', 'es2020.promise', 'es2020.string', 'es2020.symbol.wellknown', 'es2020.intl'
             'esnext.array', 'esnext.symbol', 'esnext.asynciterable', 'esnext.intl', 'esnext.bigint'
             'esnext.string' or 'esnext.promise'
`)


flag("module, -m", "Specify module code generation.")
console.log(`
    with:     'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'esnext''
`)

flag("strict", "Enable all strict type-checking options.")
flag("noEmit", "Do not emit outputs.")

console.log(`
You can learn about all of the compiler options at https://aka.ms/tsconfig-reference
`)


title("Watch Options")

console.log(`Including ${blue(bold("--watch"))}, ${blue(bold("-w"))} will start watching the current project for file changes. 
Once set, you can configure watch mode with:
`)

flag("excludeFiles", "Start watching the current project for changes.")
flag("excludeDirectories", "Start watching the current project for changes.")
flag("watchFile", "Start watching the current project for changes.")
flag("watchDirectory", "Start watching the current project for changes.")
flag("fallbackPolling", "Start watching the current project for changes.")

title("Build Option")

console.log(`Using ${blue(bold("--build"))}, ${blue(bold("-b"))} will make tsc behave more like a build orchestrator than a compiler.
This is used to trigger building composite projects which you can learn more about at https://aka.ms/tsc-composite-builds.
`)

flag("clean", "Delete the outputs of all projects.")
flag("dry", "Show what would be built (or deleted, if specified with '--clean'.")
flag("force", "Build all projects, including those that appear to be up to date.")
flag("verbose", "Enable verbose logging.")

const prefix = " ".repeat(100)
const tsSquareTop = blue(bgBlue("     "))
const tsSquareBottom = bgBlue(white(bold("  TS ")))
console.log("")
console.log(prefix + tsSquareTop);
console.log(prefix + tsSquareBottom);
console.log("\n")
