/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4020439387")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "bool2777654405",
    "name": "available",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool1007901140",
    "name": "featured",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4020439387")

  // remove field
  collection.fields.removeById("bool2777654405")

  // remove field
  collection.fields.removeById("bool1007901140")

  return app.save(collection)
})
