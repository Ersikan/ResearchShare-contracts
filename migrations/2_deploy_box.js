// migrations/2_deploy_box.js
const Box = artifacts.require("Box");

module.exports = async function (deployer) {
  await deployer.deploy(Box);
};
