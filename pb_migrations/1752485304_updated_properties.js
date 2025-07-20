/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2037580119")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3860153169",
    "max": null,
    "min": null,
    "name": "bedrooms",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number2953298466",
    "max": null,
    "min": null,
    "name": "bathrooms",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2037580119")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3860153169",
    "max": null,
    "min": null,
    "name": "bedroom",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number2953298466",
    "max": null,
    "min": null,
    "name": "bathroom",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
