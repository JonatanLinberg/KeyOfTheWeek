const core = require('@actions/core');
const github = require('@actions/github');
const main = require('./main.js')

try {
  core.setOutput("key", main.getCurrentKey());
} catch (error) {
  core.setFailed(error.message);

