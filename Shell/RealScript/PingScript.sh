#!/bin/bash
# Author:zyzyx93
# Ping Script

ping -c1 172.20.254.254
if [ $? -eq 0 ]
then
	echo "Host Alive!"
else
	echo "Host Down!"
fi
