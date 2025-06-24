#!/bin/bash
cd /home/ec2-user/app
# Kill any existing Node process
pkill node
# Start app in background
nohup node index.js > app.log 2>&1 &
chmod +x scripts/*.sh
