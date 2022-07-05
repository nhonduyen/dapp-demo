const Greeting = artifacts.require("Greetings")
module.exports = (deployer) => {
    deployer.deploy(Greeting)
}