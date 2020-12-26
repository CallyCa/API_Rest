#!/bin/bash

# Update System Packages
echo '# Update package list'
sudo apt-get update

echo '# Upgrade package list'
sudo apt-get upgrade -y

# Config Database Students

npx sequelize migration:create --name=students
npx sequelize db:migrate

# Config Database Users
npx sequelize migration:create --name=users
npx sequelize db:migrate