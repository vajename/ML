const git = require('nodegit');
const pathToRepo = require('path').resolve('./.git');
const uniqBy = require('../utils').uniqBy;
const Cache = require('@11ty/eleventy-cache-assets');

let $repo = null;

/** Blame last file change | using commit id */
async function blameLast_old(filePath, callback) {
  const repo = $repo ? $repo : await git.Repository.open(pathToRepo);
  const blame = await git.Blame.file(repo, filePath.slice(2));
  const oid = blame.getHunkByIndex(blame.getHunkCount() - 1).origCommitId();
  const commit = await git.Commit.lookup(repo, oid);
  const email = commit.author().email();
  const time = commit.time() * 1000;

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

async function blameAll(filePath) {
  const repo = $repo ? $repo : await git.Repository.open(pathToRepo);
  const blame = await git.Blame.file(repo, filePath.slice(2));
  const hunks = Array(blame.getHunkCount())
    .fill()
    .map((_, idx) => blame.getHunkByIndex(idx));

  const contributors = hunks.map((hunk) => {
    const email = hunk.finalSignature().email();
    const time = hunk.finalSignature().when().time() * 1000;

    return { email, time };
  });

  const uniqeContributors = uniqBy(contributors, (i) => i.email);
  return uniqeContributors;
}

const getFileContributorsJSON = async function fetchContributors(filePath) {
  const options = {
    method: 'GET',
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from('mhsattarian' + ':' + process.env.GITHUB_TOKEN).toString(
          'base64'
        ),
    },
  };

  return fetch(
    `https://api.github.com/repos/${repo.user}/${
      repo.name
    }/commits?path=${filePath.slice(2)}`,
    options
  )
    .then((res) => res.json())
    .then((contribs) => {
      const contributors = contribs
        .map((i) => ({
          user: i.author.login,
          url: i.author.html_url,
          /// reduce avatar image size by default
          avatar_url: i.author.avatar_url + '&s=80',
        }))
        .reverse();

      return uniqBy(contributors, (i) => i.user);
    });
};

const getFileContributorsHTML = async function fetchContributors(filePath) {
  return fetch(
    `https://github.com/${repo.user}/${
      repo.name
    }/contributors-list/master/${filePath.slice(2)}`
  )
    .then((res) => res.text())
    .then((html) =>
      html
        .replace(
          /href="/g,
          `target="_blank" rel="noreferrer" href="//github.com`
        )
        .replace(/s=40/g, 's=80')
    );
};

const getUserData = async function (email) {
  try {
    const url = `https://api.github.com/search/users?q=${email}`;
    const userData = await Cache(url, {
      duration: '1m', // 1 month
      type: 'json', // also supports "text" or "buffer"
    });
    const user = userData.items[0];

    return {
      user: user.login,
      url: user.html_url,
      /// reduce avatar image size by default
      avatar_url: user.avatar_url + '&s=80',
    };
  } catch (e) {
    console.log(`Failed getting GitHub user data, email:  ${email}`);
    return {
      user: '',
      url: `mailto:${email}`,
      avatar_url: '/assets/s/github.svg',
    };
  }
};

module.exports = {
  blameLast,
  blameAll,
  getFileContributorsJSON,
  getFileContributorsHTML,
  getUserData,
};
