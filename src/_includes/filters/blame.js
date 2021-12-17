const git = require('nodegit');
const pathToRepo = require("path").resolve("./.git");

let $repo = null;

async function blame(filePath, callback) {
  const repo = $repo ? repo : await git.Repository.open(pathToRepo);
  const blame = await git.Blame.file(repo, filePath.slice(2));
  const oid = blame.getHunkByIndex(blame.getHunkCount() - 1).origCommitId();
  const commit = await git.Commit.lookup(repo, oid);
  const email = commit.author().email();
  const time = commit.time() * 1000

  callback(null, { email: email, time });
}

module.exports = blame;