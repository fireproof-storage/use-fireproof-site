---
sidebar_position: 1
---
# Basics

Learn to use Fireproof in a few simple steps.

Install Fireproof with NPM:

```sh
npm install use-fireproof
```

or Yarn:

```sh
yarn add use-fireproof
```

The default package import provides a concise way to access Fireproof, this quick sketch will give you a sense of how the API works:
```js
import { fireproof } from 'use-fireproof';
```

We cache the database instance so you can call this on every render.

```js
const database = fireproof('my-database')
```

## Document API

Here's how to put a document and get an 'ok' response with an id.

```js
const ok = await database.put({ _id: 'my-doc', hello: 'world' })
```

To get a document, use the document's id. The returned document's _id field will be 'my-doc'. You can `put` again to update.

```js
const doc = await database.get('my-doc')
doc.hello = 'universe'
const ok2 = await database.put(doc)
```

To delete a document, use the document's id.

```js
const ok3 = await database.del('my-doc')
```

You can query for documents with a specific field. In this case, we're querying for documents with a 'hello' field.

```js
const { rows } = await database.query('hello', { range: ['a', 'z'] })
```

You can also query for changes since an operation's clock.

```js
const { rows : chs } = await database.changes(ok.clock)
```

To subscribe to live updates, use the subscribe method. The updates parameter is an array of documents.

```js
const unsub = database.subscribe((updates) => {
  // updates is an array of documents
})
```

You can read more about the [database API](./database) and the [document API](./documents) in the API docs. For getting started with React, see the [React tutorial](/docs/react-tutorial). Fireproof runs almost anywhere. Read about [framework and bundler support](/docs/appendix/bundling).
