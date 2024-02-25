const { getVanityWallet } = require("./index.js");

function test() {
    const PREFIX = '33';
    const SUFFIX = '42';
    const IS_CHECKSUM = false;

    try {
        getVanityWallet(PREFIX, SUFFIX, IS_CHECKSUM, (message) => console.log(message));
    } catch (err) {
        console.log('Error: ', err);
    }
}

test();