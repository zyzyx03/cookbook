# Upgrade package

apt update && sudo apt -y upgrade

# Install Redis server
apt install  -y redis-server

# Enable Redis Service
systemctl enable redis-server.service