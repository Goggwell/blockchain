# Building a Blockchain

This repo contains code for a blockchain data structure written in JavaScript. 

Code needs to be used in conjunction with [Postman](https://postman.com) (for POST API calls).

## Installation

Clone this repository to use locally.

```bash
mkdir blockchain
cd blockchain
git clone https://github.com/Goggwell/blockchain.git
```

## Technologies

- JavaScript
- [sha256](https://npmjs.com/package/sha256) to hash blocks
- NodeJS + Express (for the API)
- [uuid](https://npmjs.com/package/uuid) to generate a random uuid (universally unique identifier)
- [body-parser](https://npmjs.com/package/body-parser) & [request-promise](https://npmjs.com/package/request-promise)
  - request-promise requires an additional dependency installed ([request](https://npmjs.com/package/request))
- [Postman](https://postman.com) (to test API)
-----
- [AngularJS](https://angularjs.org) (not Angular), links frontend to the backend
- [Bootstrap](https://getbootstrap.com) for styling the frontend
- [jQuery](https://jquery.com) 

## Usage

Because the blockchain runs on a decentralized network, feel free to launch as many nodes as you'd like (you can add more in package.json by copying one of the node scripts and changing the port/url).

Before handling the blockchain, if you want to test out `blockchain.js` separately, use `test.js` to do so, and run `node dev/test.js` in the terminal.

Run `npm run node_1` or `yarn node_1` to start  a new server (can be any node). 

```bash
yarn node_1
```

For node 1, go to localhost:3000.

You can view the blockchain as is with `localhost:3000/blockchain`.

Mine a block with `localhost:3000/mine`.

You can view various other methods within the `networkNode.js` file.

Visit `localhost:3000/block-explorer` to view the frontend of this project. In order to use it properly, you have to use Postman as well (to make POST calls).

Comes with Proof-of-Work and a consensus algorithm.

## License
[MIT](https://choosealicense.com/licenses/mit/)
