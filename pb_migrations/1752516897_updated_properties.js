/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2037580119")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3950007415",
    "maxSelect": 6,
    "name": "amenities",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "WiFi",
      "24/7 Electricity",
      "Kitchen",
      "Security Guard",
      "Heating",
      "Washing Machine",
      "Free Parking",
      "Hot Water",
      "Air Conditioning",
      "Family Friendly",
      "Verified",
      "Garden"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2037580119")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3950007415",
    "maxSelect": 6,
    "name": "amenities",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "WiFi",
      "24/7 Electricity",
      "Kitchen",
      "Security Guard",
      "Heating",
      "Washing Machine",
      "Free Parking",
      "Hot Water",
      "Air Conditioning",
      "Family Friendly",
      "Verified"
    ]
  }))

  return app.save(collection)
})
