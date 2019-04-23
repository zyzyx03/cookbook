#!/bin/bash
# Author:zyzyx03
# Ping without the packet output

ping -c1 172.20.254.254 &> /dev/null
if [ $? -eq 0 ]
then
	echo "Host Alive!"
else
	echo "Host Down!"
fi
