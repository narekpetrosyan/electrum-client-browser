# electrum-client-browser

JavaScript implementation of [Electrum Protocol] Client.

This library can communicate with [ElectrumX Servers] using `ws` and `wss` protocols.

Works in modern browsers.

Implements methods described in the [Electrum Protocol methods] documentation.

## Features

- 🔄 Full Electrum Protocol Support
- 🌐 Works in browsers
- 📲 WebSocket support
- 🔔 Subscriptions and notifications
- 📦 CommonJS and ES modules support
- 📘 TypeScript declarations included

## Installation

```bash
npm install --save electrum-client-browser
```

## Usage

### CommonJS (Node.js)

```js
const ElectrumClient = require("electrum-client-browser");

async function main() {
  const client = new ElectrumClient("electrum.bitaroo.net", 50002, "ssl");

  try {
    await client.connect(
      "electrum-client-js", // optional client name
      "1.4.2" // optional protocol version
    );

    const header = await client.blockchain_headers_subscribe();
    console.log("Current header:", header);

    await client.close();
  } catch (err) {
    console.error(err);
  }
}

main();
```

### ES Modules (Modern environments)

```js
import ElectrumClient from "electrum-client-browser";

async function main() {
  const client = new ElectrumClient("electrum.bitaroo.net", 50002, "ssl");

  try {
    await client.connect("electrum-client-js", "1.4.2");
    const balance = await client.blockchain_scripthash_getBalance(
      "your_scripthash_here"
    );
    console.log("Balance:", balance);
    await client.close();
  } catch (err) {
    console.error(err);
  }
}

main();
```

### TypeScript Support

This library includes TypeScript declarations, providing type checking and intelligent code completion.

```typescript
import ElectrumClient from "electrum-client-browser";

async function main() {
  // Full type support for constructor parameters
  const client = new ElectrumClient("electrum.bitaroo.net", 50002, "ssl");

  try {
    await client.connect();

    // Type information for all method parameters and return values
    const balance = await client.blockchain_scripthash_getBalance(
      "your_scripthash_here"
    );
    console.log("Confirmed:", balance.confirmed);
    console.log("Unconfirmed:", balance.unconfirmed);

    await client.close();
  } catch (err) {
    console.error(err);
  }
}
```

## Subscriptions

This library supports Electrum's subscription API. See the [example](example/subscribe.js) for details.

## Examples

See more [examples](example/) for various use cases.

## API Documentation

For a complete list of available methods, refer to the [Electrum Protocol methods] documentation.
