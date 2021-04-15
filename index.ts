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
console.log(`${blue(bold("tsc"))} 
  Type checks, and emits outputs for a project in the current working directory 

  ${blue(bold("tsc --init"))} 
  Creates a tsconfig.json with the recommended settings in the current directory

  ${blue(bold("tsc --help --all"))} 
  An expanded version of this information showing all options 

  ${blue(bold("tsc -p ./path/to/tsconfig.json"))} 
  Runs the TypeScript project defined in another folder

  ${blue(bold("tsc --noEmit"))} 
  Runs the TypeScript type-checker but does not create .js, .d.ts and .map files

  ${blue(bold("tsc @args.txt"))} 
  Use the file 'args.txt' to set command line options. The file `)
  
title("Common Compiler Options")
console.log("")

flag("target, -t", "Specify library files to be included in the compilation.")
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


title("Watch Options")

flag("watch", "Start watching the current project for changes.")
flag("excludeFiles", "Start watching the current project for changes.")
flag("excludeDirectories", "Start watching the current project for changes.")
flag("watchFile", "Start watching the current project for changes.")
flag("watchDirectory", "Start watching the current project for changes.")
flag("fallbackPolling", "Start watching the current project for changes.")



title("Build Option")

flag("build", "Specify library files to be included in the compilation.")
flag("clean", "Delete the outputs of all projects.")
flag("dry", "Show what would be built (or deleted, if specified with '--clean'.")
flag("force", "Build all projects, including those that appear to be up to date.")
flag("verbose", "Enable verbose logging.")

const prefix = " ".repeat(100)
const tsSquareTop = blue(bgBlue("....."))
const tsSquareBottom = bgBlue(white(bold("  TS ")))
console.log("")
console.log(prefix + tsSquareTop);
console.log(prefix + tsSquareBottom);
console.log("\n")


// Version 4.3.0-beta
// Syntax:   tsc [options] [file...]

// Examples: tsc hello.ts
//           tsc --outFile file.js file.ts
//           tsc @args.txt
//           tsc --build tsconfig.json

// Options:
//  -h, --help                                         Print this message.
//  -w, --watch                                        Watch input files.
//  --pretty                                           Stylize errors and messages using color and context (experimental).
//  --all                                              Show all compiler options.
//  -v, --version                                      Print the compiler's version.
//  --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
//  -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
//  -b, --build                 
