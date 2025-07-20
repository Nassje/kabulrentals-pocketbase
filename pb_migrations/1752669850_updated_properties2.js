/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4020439387")

  // update collection data
  unmarshal({
    "name": "properties"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4020439387")

  // update collection data
  unmarshal({
    "name": "properties2"
  }, collection)

  return app.save(collection)
})
