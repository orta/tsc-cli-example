import { blue, bgBlue, rgb24, bold, gray } from "https://deno.land/std/fmt/colors.ts";
console.clear();

const title = (str: string) => console.log(bold(str.toUpperCase()) + "\n");
const subtitle = (str: string) => console.log("\n### " + str + "\n");
const flag = (name: string, desc: string) => {
  console.log(`  ${bold(blue(name))}   ${desc}`);
};

const isAll = Deno.args.find((f) => f === "--all");

const prefix = " ".repeat(100);
const tsSquareTop = blue(bgBlue("     "));
const tsSquareBottom = bgBlue(bold(rgb24("  TS ", 0xffFFff)));

console.log("");
console.log(
  bold(
    "tsc: The TypeScript Compiler - v4.3.0-beta                                                          " + tsSquareTop
  )
);
console.log(prefix + tsSquareBottom);

if (!isAll) {
  title("Common commands");
  console.log(`  ${blue(bold("tsc"))} 
  Compiles the current project (${bold(`tsconfig.json`)} in the working directory.)

  ${blue(bold("tsc app.ts util.ts"))} 
  ${bold(`Ignoring tsconfig.json`)}, compiles the specified files with default compiler options.

  ${blue(bold("tsc -b"))} 
  Build a composite project in the working directory.

  ${blue(bold("tsc --init"))} 
  Creates a tsconfig.json with the recommended settings in the working directory.

  ${blue(bold("tsc -p ./path/to/tsconfig.json"))} 
  Compiles the TypeScript project located at the specified path.

  ${blue(bold("tsc --help --all"))} 
  An expanded version of this information, showing all possible compiler options.

  ${blue(bold("tsc --noEmit"))}
  ${blue(bold("tsc --target esnext"))}
  Compiles the current project, with additional settings.
  `);
}


if (!isAll) {
  title("Common Compiler Options\n");

  flag(
    "--target, -t",
    "Set the JavaScript language version for emitted JavaScript\n                 and include compatible library declarations."
  );
  console.log(`
       any of:  'es3', 'es5', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 
                 'es2020', or 'esnext'.
      default:  ${bold("'es3'")}
  `);

  flag("       --lib", "Specify library files to be included in the compilation.");
  console.log(`
  one or more:  'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'es2019', 
                 'es2020', 'esnext', 'dom' or 'webworker'
      default:  ${bold("'es5'")}

  `);

  flag(" --module, -m", "Specify module code generation.");
  console.log(`
        any of:  'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'esnext'
       default:  ${bold("'commonjs'")} if target is ES3 or ES5
                 ${bold("'ES2015'")} if target is ES6 and higher
  `);

  flag("        --jsx", "Specify library files to be included in the compilation.");
  console.log(`
        any of:  'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'
  `);

  flag("     --strict", "Enable all strict type-checking options.");
  flag("     --noEmit", "Do not emit outputs.");
  flag("     --outDir", "Do not emit outputs.");
}

else {
  title("All Compiler Options");
  console.log("### " + "Projects" + "\n");

  flag("                              --composite", "Generates corresponding d.ts files");
  flag("--disableSourceOfProjectReferenceRedirect", "Generates corresponding d.ts files");
  flag("               --disableSolutionSearching", "Generates corresponding d.ts files");
  flag("                        --tsBuildInfoFile", "Generates corresponding d.ts files");
  flag("           --disableReferencedProjectLoad", "Generates corresponding d.ts files");


  subtitle("Language & Environment");

  flag(
    "--target, -t",
    "Set the JavaScript language version for emitted JavaScript\n                 and include compatible library declarations."
  );
  console.log(`
       any of:  'es3', 'es5', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 
                 'es2020', or 'esnext'.
      default:  ${bold("'es3'")}
  `);

  flag("       --lib", "Specify library files to be included in the compilation.");
  console.log(`
  one or more:  'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'es2019', 
                 'es2020', 'esnext', 'dom' or 'webworker'
      default:  ${bold("'es5'")}

  `);


  subtitle("Build");
  flag("        --declaration", "Generates corresponding d.ts files");
  flag("     --declarationDir", "Specify output directory for generated declaration files.");
  flag("--emitDeclarationOnly", "Only emit '.d.ts' declaration files");
  flag("     --declarationMap", "Generates a sourcemap for each corresponding '.d.ts' file");
  flag(" --downlevelIteration",
    "Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'."
  );
}

console.log(`
You can learn about all of the compiler options at https://aka.ms/tsconfig-reference
`);

if (isAll) {
  console.log("")
  title("Watch Options");

  console.log(`Including ${blue(bold("--watch"))}, ${blue(
    bold("-w")
  )} will start watching the current project for file changes. 
Once set, you can configure watch mode with:
  `);

  flag("      --excludeFiles", "Files which should not be watched for changes.");
  flag("--excludeDirectories", "Folders which should not be watched for changes.");
  flag("         --watchFile", "Specify how the TypeScript watch mode works.");
  flag("    --watchDirectory", "Specify how directories are watched on systems that lack recursive file-watching functionality.");
  flag("   --fallbackPolling","Specify what approach the watcher should use if the system runs out of native file watchers."
  );

  console.log("\n")
  title("Build Option");

  console.log(`Using ${blue(bold("--build"))}, ${blue(
    bold("-b")
  )} will make tsc behave more like a build orchestrator than a compiler.
This is used to trigger building composite projects which you can learn
more about at https://aka.ms/tsc-composite-builds.
  `);

  flag("  --clean", "Delete the outputs of all projects.");
  flag("    --dry", "Show what would be built (or deleted, if specified with '--clean'.");
  flag("  --force", "Build all projects, including those that appear to be up to date.");
  flag("--verbose", "Enable verbose logging.");
}
console.log("");
