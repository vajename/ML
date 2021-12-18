const git = require('nodegit');
const pathToRepo = require("path").resolve("./.git");

let $repo = null;

/** Blame last file change | using commit id */
async function blameLast_old(filePath, callback) {
  const repo = $repo ? $repo : await git.Repository.open(pathToRepo);
  const blame = await git.Blame.file(repo, filePath.slice(2));
  const oid = blame.getHunkByIndex(blame.getHunkCount() - 1).origCommitId();
  const commit = await git.Commit.lookup(repo, oid);
  const email = commit.author().email();
  const time = commit.time() * 1000

  callback(null, { email: email, time });
}

/** Blame last file change */
async function blameLast(filePath, callback) {
  const repo = $repo ? $repo : await git.Repository.open(pathToRepo);
  const blame = await git.Blame.file(repo, filePath.slice(2));
  const hunk = blame.getHunkByIndex(blame.getHunkCount() - 1);
  const email = hunk.finalSignature().email();
  const time = hunk.finalSignature().when().time() * 1000;

  callback(null, { email: email, time });
}

async function blameAll(filePath, callback) {
  const repo = $repo ? $repo : await git.Repository.open(pathToRepo);
  const blame = await git.Blame.file(repo, filePath.slice(2));
  const hunks = Array(blame.getHunkCount()).fill().map((_, idx) => blame.getHunkByIndex(idx));
  const contributors = hunks.map(hunk => {
    const email = hunk.finalSignature().email();
    const time = hunk.finalSignature().when().time() * 1000;

    return { email, time }
  });

  const uniqeContributors = uniqBy(contributors, (i) => i.email);

  callback(null, uniqeContributors);
}

function uniqBy(a, key) {
  let seen = new Set();
  return a.filter(item => {
    let k = key(item);
    return seen.has(k) ? false : seen.add(k);
  });
}

module.exports = { blameLast, blameAll };