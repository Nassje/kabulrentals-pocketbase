#!/bin/sh
# Remove existing admin database
rm -rf /pb/pb_data/data.db
rm -rf /pb/pb_data/logs.db
# Start PocketBase
/pb/pocketbase serve --http=0.0.0.0:8080