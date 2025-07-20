/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2037580119")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number3402113753",
    "max": null,
    "min": null,
    "name": "price",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
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

  // add field
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

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1293008050",
    "max": null,
    "min": null,
    "name": "guests",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1843675174",
    "maxSize": 0,
    "name": "description",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "bool2777654405",
    "name": "available",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3950007415",
    "maxSelect": 1,
    "name": "amenities",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "WiFi",
      "Airconditioning",
      "24/7 Electricity",
      "Kitchen",
      "Parking",
      "Verified"
    ]
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number2090932886",
    "max": null,
    "min": null,
    "name": "rooms",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2037580119")

  // remove field
  collection.fields.removeById("number3402113753")

  // remove field
  collection.fields.removeById("number3860153169")

  // remove field
  collection.fields.removeById("number2953298466")

  // remove field
  collection.fields.removeById("number1293008050")

  // remove field
  collection.fields.removeById("editor1843675174")

  // remove field
  collection.fields.removeById("bool2777654405")

  // remove field
  collection.fields.removeById("select3950007415")

  // remove field
  collection.fields.removeById("number2090932886")

  return app.save(collection)
})
