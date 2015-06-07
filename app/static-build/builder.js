import request from 'superagent';
import fs from 'fs';
import { mkdirP as mkdirPCallback } from 'mkdirp';
import url from 'url';
import path from 'path';
import denodeify from 'denodeify';

const mkdirP = denodeify(mkdirPCallback);
const writeFile = denodeify(fs.writeFile);

/**
 * Download page from provided route, as HTML content.
 * @param  {String} host     Server main URL.
 * @param  {String} pagePath Path from the router to download.
 * @return {Promise<String>}          If download was successful, resolve promise with page URL and downloaded HTML content.
 *                           Otherwise reject with the same output.
 */
export function fetchPage(host, pagePath) {
  return new Promise(function(resolve, reject) {
    const pageUrl = host + pagePath;

    request.get(pageUrl).accept('text/html').end(function(err, res) {
      if (err) {
        return reject(err);
      }

      if (res.ok) {
        resolve([pageUrl, res.text]);
      } else {
        reject([pageUrl, res.text]);
      }
    });
  });
}

/**
 * Writes the content to the file named index.html located at the path defined by pageUrl pathname part and base dir.
 * @param  {String} baseDir  Base directory where file will be saved.
 * @param  {String} pageUrl  URL from which the content was obtained. Used to get the pathname where content should be saved.
 * @param  {String} content  File content to be saved.
 * @return {Promise<String>} Resolves with promise containing the full path of the file that was saved.
 */
export function writePage(baseDir, [pageUrl, content]) {
  const pathname = url.parse(pageUrl).pathname;
  const filename = path.join(baseDir, pathname, 'index.html');

  return mkdirP(path.dirname(filename))
    .then(() => writeFile(filename, content))
    .then(() => filename);
}
