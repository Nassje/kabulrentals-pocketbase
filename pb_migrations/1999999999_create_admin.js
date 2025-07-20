/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Create admin using raw SQL
  const email = "admin@kabulrentals.com";
  const password = "TempPassword123!";
  
  try {
    // Check if admin exists
    const result = app.dao().db()
      .select("id")
      .from("_admins")
      .where($dbx.exp("email = {:email}", {email: email}))
      .build()
      .one();
    
    console.log("Admin already exists");
  } catch (e) {
    // Admin doesn't exist, create it
    console.log("Creating admin...");
    
    // Hash the password
    const hashedPassword = $security.hash(password);
    
    // Insert admin
    app.dao().db()
      .insertInto("_admins", {
        email: email,
        password: hashedPassword,
        created: new Date().toISOString(),
        updated: new Date().toISOString()
      })
      .execute();
    
    console.log("Admin created successfully!");
  }
  
  return null;
}, (app) => {
  // Down migration - do nothing
  return null;
})