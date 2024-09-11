const assert = require('assert');
// 引入stylelint
const stylelint = require('stylelint');
const path = require('path');

describe('test/rules-validate.test.js', () => {
  // 1.验证默认值的选项
  it('Validate default', async () => {
    // 读取文档的路径
    const filePaths = [path.join(__dirname, './fixtures/index.css')];
    // 执行stylelint
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });
    // 根据执行结果判断是否有错误
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate sass', async () => {
    const filePaths = [path.join(__dirname, './fixtures/sass-test.scss')];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate less', async () => {
    const filePaths = [path.join(__dirname, './fixtures/less-test.less')];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate css-module', async () => {
    const filePaths = [path.join(__dirname, './fixtures/css-module.scss')];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length === 0);
    }
  });
});
