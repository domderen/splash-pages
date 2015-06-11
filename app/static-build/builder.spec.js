import fs from 'fs';
import rimraf from 'rimraf';
import mkdirPCallback from 'mkdirp';
import { writePage } from './builder';
import denodeify from 'denodeify';

const readdir = denodeify(fs.readdir);
const readFile = denodeify(fs.readFile);
const rmdir = denodeify(rimraf);
const mkdirP = denodeify(mkdirPCallback);

describe('writePage', () => {
  beforeEach((done) => {
    const dirName = '.tmp/writePage';

    rmdir(dirName)
      .then(() => mkdirP(dirName))
      .then(done, done.fail);
  });

  it('writes the pages', (done) => {
    const url = 'https://localhost/about';
    const content = 'about content';
    const baseDir = '.tmp/writePage';

    writePage(baseDir, [url, content])
      .then(() => readdir(baseDir))
      .then(function(files) {
        expect(files.length).toEqual(1);
        return readFile(`${baseDir}/about/index.html`, 'utf8');
      })
      .then((data) => expect(data).toEqual('about content'))
      .then(done, done.fail);
  });
});
