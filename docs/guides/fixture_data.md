---
title: Fixture Data
sidebar_position: 4
---

# Fixture Data

It's common to need to pre-populate a Fireproof application with some data that will always be there. This could be a starting landscape in a city-building game or an example todo in a todo list app.

If you create these fixture documents without CIDs they will be generated randomly, which is convenient, but if you are running the same setup across multiple users installations they will create multiple instances of each document when users sync their Fireproof databases together.

A nice way to avoid this is to generate random-looking CIDs with a deterministic generator, so that every time the fixtures are generated they will make the same documents with the same CIDs, avoiding unnecessary bloat or duplicate objects.

This example, taken from the TodoMVC demo app, uses the `mulberry32` pseudorandom gemerator with a seed of `1`.

```js
function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(1); // determinstic fixtures

export default async function loadFixtures(database) {
  const nextId = (prefix = '') => prefix + rand().toString(32).slice(2);
  const listTitles = ['Building Apps', 'Having Fun', 'Getting Groceries'];
  const todoTitles = [
    [
      'In the browser',
      'On the phone',
      'With or without Redux',
      'Login components',
      'GraphQL queries',
      'Automatic replication and versioning',
    ],
    ['Rollerskating meetup', 'Motorcycle ride', 'Write a sci-fi story with ChatGPT'],
    [
      'Macadamia nut milk',
      'Avocado toast',
      'Coffee',
      'Bacon',
      'Sourdough bread',
      'Fruit salad',
    ],
  ];
  let ok;
  for (let j = 0; j < 3; j++) {
    ok = await database.put({
      title: listTitles[j],
      type: 'list',
      _id: nextId('' + j),
    });
    for (let i = 0; i < todoTitles[j].length; i++) {
      await database.put({
        _id: nextId(),
        title: todoTitles[j][i],
        listId: ok.id,
        completed: rand() > 0.75,
        type: 'todo',
      });
    }
  }
}
```