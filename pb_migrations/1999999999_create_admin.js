/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Create admin if doesn't exist
  try {
    app.dao().findAdminByEmail("admin@kabulrentals.com")
    console.log("Admin already exists")
  } catch (e) {
    console.log("Creating admin...")
    const admin = new Admin()
    admin.email = "admin@kabulrentals.com"
    admin.setPassword("TempPassword123!")
    app.dao().saveAdmin(admin)
    console.log("Admin created successfully!")
  }
  return null
}, (app) => {
  // Down migration - do nothing
  return null
})