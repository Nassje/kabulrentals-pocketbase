#!/bin/sh
echo "Starting PocketBase..."
if [ ! -z "$ADMIN_EMAIL" ] && [ ! -z "$ADMIN_PASSWORD" ]; then
    echo "Creating admin user..."
    /pb/pocketbase superuser create "$ADMIN_EMAIL" "$ADMIN_PASSWORD" --dir /pb_data || echo "Admin might already exist"
fi
echo "Starting server..."
exec /pb/pocketbase serve --http=0.0.0.0:8080 --dir /pb_data