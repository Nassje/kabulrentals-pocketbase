/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4020439387")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file3760176746",
    "maxSelect": 15,
    "maxSize": 10485760,
    "mimeTypes": [],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4020439387")

  // remove field
  collection.fields.removeById("file3760176746")

  return app.save(collection)
})
