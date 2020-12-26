#!/bin/bash

# Update System Packages
echo '# Update package list'
sudo apt-get update

echo '# Upgrade package list'
sudo apt-get upgrade -y
