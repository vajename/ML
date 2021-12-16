const git = require('nodegit');
const moment = require('jalali-moment');
const pathToRepo = require("path").resolve("./.git");
// const makeSynchronous = require('make-synchronous');

let $repo = null;

async function blame(filePath, callback) {
  const repo = $repo ? repo : await git.Repository.open(pathToRepo);
  const blame = await git.Blame.file(repo, filePath.slice(2));
  const oid = blame.getHunkByIndex(blame.getHunkCount() - 1).origCommitId();
  const commit = await git.Commit.lookup(repo, oid);
  const email = commit.author().email();
  const timeRaw = moment(commit.time() * 1000).locale('fa');
  const time = {
    year: timeRaw.jYear(),
    month: timeRaw.jMonth(),
    day: timeRaw.jDate(),
  }

  callback(null, { email: email, time });
}

module.exports = blame;