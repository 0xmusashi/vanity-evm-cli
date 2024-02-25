# Vanity EVM CLI

CLI tool to generate EVM account with pre-defined prefix/suffix address

Make your addressess appear less random.

## Installation

```shell
npm install vanity-evm-cli
```

## Usage

```javascript
const {getVanityWallet} = require("vanity-evm-cli");
const PREFIX = '33';
const SUFFIX = '42';
const IS_CHECKSUM = false;
getVanityWallet(PREFIX, SUFFIX, IS_CHECKSUM, (message) => console.log(message));
```

