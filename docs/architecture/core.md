---
sidebar_position: 1
---
# Core

The initial developer experience of using Fireproof is as a local ledger with a database API, reading and writing documents and querying in support of user interaction. Fireproof is powerful immediately upon npm install or by direct import, so developers can write complete apps before they think of connecting to the cloud. The core is a lightweight functional TypeScript program, which reads and writes via pluggable gateways. The default configuration is web-friendly, but the modular architecture means Fireproof also runs great in data centers or embedded device swarms.

The functional core maintains a pipeline from actions to outputs. Each ledger operation updates the [content-addressed Merkle CRDT](https://github.com/fireproof-storage/fireproof/blob/d38ed0032cdf59f757afc86cbbe76c435658c7e4/src/crdt-helpers.ts#L70) by creating new blocks in the blockstore and saving a git-like diff as a new (transaction-sized) output, which is an immutable file, sent as a message, or PUT as a blob.

To learn more about the Merkle diff operations, see this article about the open-source CRDT Fireproof uses.
Queries are inspired by Apache CouchDB’s map reduce, with application-defined JavaScript indexes stored in hash consistent search trees. This offers enough flexibility for most front-end apps, while the immutable ledger event log makes it straightforward to integrate with other index types like vector, geographic, or full text.
The overall effect is a database API backed by a causally consistent ledger, regardless of the underlying infrastructure. This enables anyone, from self-taught entrepreneurs to infrastructure professionals, to write simple apps that run anywhere, with secure cryptographic proofs for all operations.
