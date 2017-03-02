# js-project-starter-kit

[![Build Status][travis-badge]][travis-link]
[![Build Status][circle-badge]][circle-link]
[![Coverage Status][coveralls-badge]][coveralls-link]

This is a no-frills starter kit for JavaScript projects.
It's meant to be a quickstart especially for small library projects.

## Getting Started

Install from source

First, clone the project:

```
$ git clone https://github.com/yeojz/js-project-starter-kit.git <my-project-name>
$ cd <my-project-name>
```

Update `<your name>` and `<your email>` in the following files:

 - `package.json`
 - `LICENSE`

then run:

```
npm install

// or

yarn install
```

## Warning: Auto publishing

This starter kit is configured to **auto publish to npm** when you tag a build and that build passes. 

### Circle CI

You will still need to provide `NPM_PASS`, `NPM_USER`, `NPM_EMAIL` as environment variables - [Documentation](https://circleci.com/docs/1.0/environment-variables/#setting-environment-variables-for-all-commands-using-circleyml)

You will also need to replace `<your username>` under `release` section in `circle.yml` to your npm username.

### Travis CI

You will need to provide your `NPM_EMAIL` and `NPM_API_KEY` as a Travis environment variables - [Documentation](https://docs.travis-ci.com/user/deployment/npm/)


## Coverage

Coverage is provided by [nyc](https://github.com/istanbuljs/nyc) with reports configured to upload to coveralls when test passes. 

If you do want to use coveralls, you'll need to provide `COVERALLS_REPO_TOKEN` in your CI's environment variable.


[travis-badge]: https://img.shields.io/travis/yeojz/js-project-starter-kit.svg?style=flat-square
[travis-link]: https://travis-ci.org/yeojz/js-project-starter-kit

[circle-badge]: https://img.shields.io/circleci/project/github/yeojz/js-project-starter-kit.svg?style=flat-square
[circle-link]: https://circleci.com/gh/yeojz/js-project-starter-kit.svg

[coveralls-badge]: https://img.shields.io/coveralls/yeojz/js-project-starter-kit.svg?style=flat-square
[coveralls-link]: https://coveralls.io/github/yeojz/js-project-starter-kit
