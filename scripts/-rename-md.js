import fs from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = {};

  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];

    if (a === "--src") {
      args.srcDir = argv[++i];
      continue;
    }
  }

  return {
    srcDir: args.srcDir || "docs",
  };
}

const { srcDir } = parseArgs(process.argv);
const directory = `./${srcDir}/md`;

fs.readdirSync(directory).forEach((file) => {
  if (path.extname(file).toLowerCase() === ".md") {
    const basename = path.basename(file, ".md");
    const newName = `${basename.toUpperCase()}.md`;

    if (file !== newName) {
      fs.renameSync(path.join(directory, file), path.join(directory, newName));
      console.log(`Renamed: ${file} -> ${newName}`);
    }
  }
});
