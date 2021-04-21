import { blue, bgBlue, white, bold } from "https://deno.land/std/fmt/colors.ts";
console.clear()

const title = (str: string) => console.log("\n" + bold(str.toUpperCase()) + "\n")
const flag = (name: string, desc: string) => {
  
  console.log(`  ${bold(blue(name))}   ${desc}`)
}
// const values = (values: string) => console.log("  values any of: " + values)

const isAll = Deno.args.find(f => f === "--all")

const prefix = " ".repeat(100)
const tsSquareTop = blue(bgBlue("....."))
const tsSquareBottom = bgBlue(white(bold("  TS ")))

console.log("")
console.log(bold("tsc: The TypeScript Compiler - v4.3.0-beta                                                          " + tsSquareTop))
console.log(prefix + tsSquareBottom)

if (!isAll) {
  title("Common commands")
  console.log(`  ${blue(bold("tsc"))} 
  Compiles the current project (${bold(`tsconfig.json`)} in the working directory.)

  ${blue(bold("tsc app.ts util.ts"))} 
  ${bold(`Ignoring tsconfig.json`)}, compiles the specified files with default compiler options.

  ${blue(bold("tsc --init"))} 
  Creates a tsconfig.json with the recommended settings in the working directory.

  ${blue(bold("tsc -p ./path/to/tsconfig.json"))} 
  Compiles the TypeScript project located at the specified path.

  ${blue(bold("tsc --help --all"))} 
  An expanded version of this information, showing all possible compiler options.

  ${blue(bold("tsc --noEmit"))}
  ${blue(bold("tsc --target esnext"))}
  Compiles the current project, with additional settings.
  `)
}
  
title("Common Compiler Options")
console.log("")

flag("--target, -t", "Set the JavaScript language version for emitted JavaScript\n                 and include compatible library declarations.")
console.log(`
          with:  ${bold("'es3' (default)")}, 'es5', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 
                 'es2020', or 'esnext'.
`)

flag("        --lib", "Specify library files to be included in the compilation.")
console.log(`
          with:  ${bold("'es5' (default)")}, 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'
                 'dom' or 'webworker'
`)


flag(" --module, -m", "Specify module code generation.")
console.log(`
          with:  'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'esnext''
       default:  ${bold("CommonJS")}  if target is ES3 or ES5
                 ${bold("ES6/ES2015")} if target is ES6 and higher
`)

flag("        --jsx", "Specify library files to be included in the compilation.")
console.log(`
          with:  'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'
`)

flag("     --strict", "Enable all strict type-checking options.")
flag("     --noEmit", "Do not emit outputs.")
flag("     --outDir", "Do not emit outputs.")


console.log(`
You can learn about all of the compiler options at https://aka.ms/tsconfig-reference
`)


if(isAll) {
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
}
console.log("")

