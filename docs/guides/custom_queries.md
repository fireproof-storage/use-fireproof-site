# Custom Queries

The easiest way to query Fireproof is usually by a key within the document. For example, if our documents are created with:

```js
database.put({ type: "product", text: "Dog collar", price: 14.95 });
database.put({ type: "product", text: "Cat toy", price: 8.99 });
database.put({ type: "service", text: "Dog grooming", price: 50.00 });
database.put({ type: "category", text: "Pet Supplies" });
```

Then we can query for documents with a `price` like so:

```js
    database.query('price');
```

And we can get those results filtered to just products and sorted by price from lowest to highest (ascending) like so:

```js
    database.query('price', { key: "product", descending: false })
```

But what about queries 


In this example, `todosByDate` queries for all todos belonging to a specific list and within a specific date range. Here, `startDate` and `endDate` can be used to specify the beginning and end of the range.

Valid paramaters you can use are: 
```js
{
    descending: boolean;
    limit: number;
    includeDocs: boolean;
    range: [IndexKey, IndexKey];
    key: DocFragment;
    keys: DocFragment[];
    prefix: DocFragment | [DocFragment];
}
```


Fireproof provides a powerful querying API that allows you to search and retrieve data quickly. This is done using the `ledger.query(mapFn, params)` method. The `mapFn` is a synchronous function that defines the mapping of your data, and `params` is an optional object that can be used to specify query parameters.

Here's an example of querying data from a ledger that stores todos on multiple lists:

```js
// Querying all lists
const allLists = await ledger.query('type', { key: 'list'})

// Querying all todos from a specific list
const todosByList = await ledger.query(
  doc => {
    if (doc.type === 'todo' && doc.listId) return doc.listId
  },
  { key: listId }
)
```

In this example, we define two queries: `allLists` and `todosByList`. The `allLists` query retrieves all documents with a type property of `'list'`, while the `todosByList` query retrieves all documents with a type property of `'todo'` and a `listId` property, for a specific list.

One of the advantages of using the `ledger.query(mapFn, params)` method is the ability to normalize your data for querying. This allows you to handle data variety and schema drift by normalizing any data to the desired query. For example, you could normalize data to lowercase or remove special characters before querying.

With the ability to define custom queries for any JSON data, you can handle data of any variety, making Fireproof an ideal solution for applications with complex data requirements.

Fireproof runs queries locally, making data processing faster than traditional cloud databases. You can query data with a variety of parameters, including range.

Below are some examples of how to use parameters in your queries:

```js
// Querying all todos from a list within a specific date range
const todosByDate = await ledger.query(
  doc => {
    if (doc.type === 'todo' && doc.listId && doc.date) return [doc.listId, doc.date]
  },
  {
    range: [
      [listId, startDate],
      [listId, endDate]
    ]
  }
)
```

In this example, `todosByDate` queries for all todos belonging to a specific list and within a specific date range. Here, `startDate` and `endDate` can be used to specify the beginning and end of the range.

Valid paramaters you can use are: 
```js
{
    descending: boolean;
    limit: number;
    includeDocs: boolean;
    range: [IndexKey, IndexKey];
    key: DocFragment;
    keys: DocFragment[];
    prefix: DocFragment | [DocFragment];
}
```
