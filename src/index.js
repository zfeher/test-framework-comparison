var fse = require("fs-extra");
var path = require("path");
var to = require("await-to-js").default;

const templatesDir = "./src";
const testsDir = "./tests";
const templateBaseName = "template";
const templateExtension = "spec.js";
const srcTemplateName = `${templateBaseName}.${templateExtension}`;
const frameworks = ["ava", "jest", "mocha"];
const numberOfTestFiles = process.env.NUMBER_OF_TEST_FILES
  ? Number(process.env.NUMBER_OF_TEST_FILES)
  : 100;

main(numberOfTestFiles);

async function main(numberOfTestFiles) {
  const [error] = await to(run(numberOfTestFiles));
  if (error) {
    console.error(error);
    process.exit(-1);
  }

  process.exit(0);
}

async function run(numberOfTestFiles) {
  const indexes = generateIndexes(numberOfTestFiles);
  await clean();

  for (let framework of frameworks) {
    for (let index of indexes) {
      var srcPath = path.join(templatesDir, framework, srcTemplateName);
      var destName = `${templateBaseName}-${index}.${templateExtension}`;
      var destPath = path.join(testsDir, framework, destName);
      await fse.copy(srcPath, destPath);
    }
  }
}

function generateIndexes(n) {
  return [...new Array(n)].map((_, index) => index);
}

function clean() {
  return fse.emptyDir(testsDir);
}
